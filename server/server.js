import express from 'express';
import cors from 'cors';
import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pkg;
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' })); // Für Base64 Bilder
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Database connection
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

// Test database connection
pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('Database connection error:', err);
    } else {
        console.log('Database connected successfully');
    }
});

// ========== USERS ==========

// Get all users
app.get('/api/users', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM users ORDER BY total_points DESC, name ASC');
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Failed to fetch users' });
    }
});

// Get user by ID
app.get('/api/users/:id', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM users WHERE id = $1', [req.params.id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ error: 'Failed to fetch user' });
    }
});

// Create or update user
app.post('/api/users', async (req, res) => {
    try {
        const { id, name } = req.body;
        const result = await pool.query(
            `INSERT INTO users (id, name) 
             VALUES ($1, $2) 
             ON CONFLICT (id) 
             DO UPDATE SET name = EXCLUDED.name, updated_at = CURRENT_TIMESTAMP
             RETURNING *`,
            [id, name]
        );
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error creating/updating user:', error);
        res.status(500).json({ error: 'Failed to create/update user' });
    }
});

// ========== OPENED DOORS ==========

// Get opened doors for a user
app.get('/api/opened-doors/:userId', async (req, res) => {
    try {
        const result = await pool.query(
            'SELECT day FROM opened_doors WHERE user_id = $1 ORDER BY day',
            [req.params.userId]
        );
        res.json(result.rows.map(r => r.day));
    } catch (error) {
        console.error('Error fetching opened doors:', error);
        res.status(500).json({ error: 'Failed to fetch opened doors' });
    }
});

// Add opened door
app.post('/api/opened-doors', async (req, res) => {
    try {
        const { userId, day } = req.body;
        const result = await pool.query(
            `INSERT INTO opened_doors (user_id, day) 
             VALUES ($1, $2) 
             ON CONFLICT (user_id, day) DO NOTHING
             RETURNING *`,
            [userId, day]
        );
        res.json({ success: true, day });
    } catch (error) {
        console.error('Error adding opened door:', error);
        res.status(500).json({ error: 'Failed to add opened door' });
    }
});

// ========== QUIZ ANSWERS ==========

// Get quiz answers for a user
app.get('/api/quiz-answers/:userId', async (req, res) => {
    try {
        const result = await pool.query(
            `SELECT day, question_id, answer, is_correct 
             FROM quiz_answers 
             WHERE user_id = $1 
             ORDER BY day, question_id`,
            [req.params.userId]
        );
        
        // Group by day
        const answersByDay = {};
        result.rows.forEach(row => {
            const dayKey = `day${row.day}`;
            if (!answersByDay[dayKey]) {
                answersByDay[dayKey] = { answers: {}, points: 0, date: null };
            }
            answersByDay[dayKey].answers[row.question_id] = row.answer;
        });
        
        // Get day results for points and dates
        const dayResults = await pool.query(
            'SELECT day, points, completed_at FROM quiz_day_results WHERE user_id = $1',
            [req.params.userId]
        );
        
        dayResults.rows.forEach(row => {
            const dayKey = `day${row.day}`;
            if (answersByDay[dayKey]) {
                answersByDay[dayKey].points = row.points;
                answersByDay[dayKey].date = row.completed_at.toISOString();
            }
        });
        
        res.json(answersByDay);
    } catch (error) {
        console.error('Error fetching quiz answers:', error);
        res.status(500).json({ error: 'Failed to fetch quiz answers' });
    }
});

// Submit quiz answers
app.post('/api/quiz-answers', async (req, res) => {
    try {
        const { userId, day, answers, points } = req.body;
        
        // Start transaction
        await pool.query('BEGIN');
        
        try {
            // Delete existing answers for this day
            await pool.query(
                'DELETE FROM quiz_answers WHERE user_id = $1 AND day = $2',
                [userId, day]
            );
            
            // Insert new answers
            for (const [questionId, answer] of Object.entries(answers)) {
                // Determine if answer is correct (this should be validated against quiz questions)
                const isCorrect = answer !== null && answer !== undefined;
                
                await pool.query(
                    `INSERT INTO quiz_answers (user_id, day, question_id, answer, is_correct) 
                     VALUES ($1, $2, $3, $4, $5)`,
                    [userId, day, questionId, answer, isCorrect]
                );
            }
            
            // Update or insert day result
            await pool.query(
                `INSERT INTO quiz_day_results (user_id, day, points) 
                 VALUES ($1, $2, $3) 
                 ON CONFLICT (user_id, day) 
                 DO UPDATE SET points = EXCLUDED.points, completed_at = CURRENT_TIMESTAMP`,
                [userId, day, points]
            );
            
            // Update user total points
            await pool.query(
                `UPDATE users 
                 SET total_points = (
                     SELECT COALESCE(SUM(points), 0) 
                     FROM quiz_day_results 
                     WHERE user_id = $1
                 ) + (
                     SELECT COALESCE(SUM(c.points), 0)
                     FROM challenges c
                     WHERE EXISTS (
                         SELECT 1 FROM challenge_votes cv
                         WHERE cv.challenge_id = c.id
                         AND cv.voted_for_user_id = $1
                         AND cv.voted_for_user_id IN (
                             SELECT voted_for_user_id 
                             FROM challenge_votes 
                             WHERE challenge_id = c.id
                             GROUP BY voted_for_user_id
                             HAVING COUNT(*) = (
                                 SELECT MAX(vote_count) FROM (
                                     SELECT COUNT(*) as vote_count
                                     FROM challenge_votes
                                     WHERE challenge_id = c.id
                                     GROUP BY voted_for_user_id
                                 ) sub
                             )
                         )
                     )
                 ),
                 updated_at = CURRENT_TIMESTAMP
                 WHERE id = $1`,
                [userId]
            );
            
            await pool.query('COMMIT');
            res.json({ success: true, day, points });
        } catch (error) {
            await pool.query('ROLLBACK');
            throw error;
        }
    } catch (error) {
        console.error('Error submitting quiz answers:', error);
        res.status(500).json({ error: 'Failed to submit quiz answers' });
    }
});

// ========== CHALLENGES ==========

// Get challenge submissions
app.get('/api/challenges/:challengeId/submissions', async (req, res) => {
    try {
        const result = await pool.query(
            `SELECT cs.*, u.name as user_name 
             FROM challenge_submissions cs
             JOIN users u ON cs.user_id = u.id
             WHERE cs.challenge_id = $1
             ORDER BY cs.submitted_at DESC`,
            [req.params.challengeId]
        );
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching challenge submissions:', error);
        res.status(500).json({ error: 'Failed to fetch challenge submissions' });
    }
});

// Submit challenge
app.post('/api/challenges/submit', async (req, res) => {
    try {
        const { userId, challengeId, imageData } = req.body;
        const result = await pool.query(
            `INSERT INTO challenge_submissions (user_id, challenge_id, image_data) 
             VALUES ($1, $2, $3) 
             ON CONFLICT (user_id, challenge_id) 
             DO UPDATE SET image_data = EXCLUDED.image_data, submitted_at = CURRENT_TIMESTAMP
             RETURNING *`,
            [userId, challengeId, imageData]
        );
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error submitting challenge:', error);
        res.status(500).json({ error: 'Failed to submit challenge' });
    }
});

// Get user's challenge submissions
app.get('/api/challenges/user/:userId', async (req, res) => {
    try {
        const result = await pool.query(
            'SELECT * FROM challenge_submissions WHERE user_id = $1',
            [req.params.userId]
        );
        
        const submissions = {};
        result.rows.forEach(row => {
            submissions[row.challenge_id] = {
                imageData: row.image_data,
                date: row.submitted_at.toISOString()
            };
        });
        
        res.json(submissions);
    } catch (error) {
        console.error('Error fetching user challenges:', error);
        res.status(500).json({ error: 'Failed to fetch user challenges' });
    }
});

// ========== CHALLENGE VOTES ==========

// Get votes for a challenge
app.get('/api/challenges/:challengeId/votes', async (req, res) => {
    try {
        const result = await pool.query(
            'SELECT voter_id, voted_for_user_id FROM challenge_votes WHERE challenge_id = $1',
            [req.params.challengeId]
        );
        
        const votes = {};
        result.rows.forEach(row => {
            votes[row.voter_id] = row.voted_for_user_id;
        });
        
        res.json(votes);
    } catch (error) {
        console.error('Error fetching challenge votes:', error);
        res.status(500).json({ error: 'Failed to fetch challenge votes' });
    }
});

// Submit vote
app.post('/api/challenges/vote', async (req, res) => {
    try {
        const { challengeId, voterId, votedForUserId } = req.body;
        
        await pool.query('BEGIN');
        
        try {
            // Delete existing vote if exists
            await pool.query(
                'DELETE FROM challenge_votes WHERE challenge_id = $1 AND voter_id = $2',
                [challengeId, voterId]
            );
            
            // Insert new vote
            await pool.query(
                `INSERT INTO challenge_votes (challenge_id, voter_id, voted_for_user_id) 
                 VALUES ($1, $2, $3)`,
                [challengeId, voterId, votedForUserId]
            );
            
            // Recalculate points for all users (challenge winners)
            // This is simplified - in production you might want to optimize this
            await pool.query(`
                UPDATE users 
                SET total_points = (
                    SELECT COALESCE(SUM(points), 0) 
                    FROM quiz_day_results 
                    WHERE user_id = users.id
                ) + (
                    SELECT COALESCE(SUM(c.points), 0)
                    FROM challenges c
                    WHERE EXISTS (
                        SELECT 1 FROM challenge_votes cv
                        WHERE cv.challenge_id = c.id
                        AND cv.voted_for_user_id = users.id
                        AND cv.voted_for_user_id IN (
                            SELECT voted_for_user_id 
                            FROM challenge_votes 
                            WHERE challenge_id = c.id
                            GROUP BY voted_for_user_id
                            HAVING COUNT(*) = (
                                SELECT MAX(vote_count) FROM (
                                    SELECT COUNT(*) as vote_count
                                    FROM challenge_votes
                                    WHERE challenge_id = c.id
                                    GROUP BY voted_for_user_id
                                ) sub
                            )
                        )
                    )
                ),
                updated_at = CURRENT_TIMESTAMP
            `);
            
            await pool.query('COMMIT');
            res.json({ success: true });
        } catch (error) {
            await pool.query('ROLLBACK');
            throw error;
        }
    } catch (error) {
        console.error('Error submitting vote:', error);
        res.status(500).json({ error: 'Failed to submit vote' });
    }
});

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

