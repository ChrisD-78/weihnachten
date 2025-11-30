// Netlify Function für alle API-Endpoints
const { Pool } = require('pg');

// Database connection pool
let pool = null;

function getPool() {
    if (!pool) {
        pool = new Pool({
            connectionString: process.env.DATABASE_URL,
            ssl: { rejectUnauthorized: false }
        });
    }
    return pool;
}

// CORS headers
const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
};

exports.handler = async function(event, context) {
    // Handle CORS preflight
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers: corsHeaders,
            body: ''
        };
    }

    const path = event.path.replace('/.netlify/functions/api', '');
    const method = event.httpMethod;
    const db = getPool();

    try {
        // ========== USERS ==========
        
        // GET /api/users - Get all users
        if (path === '/users' && method === 'GET') {
            const result = await db.query('SELECT * FROM users ORDER BY total_points DESC, name ASC');
            return {
                statusCode: 200,
                headers: { ...corsHeaders, 'Content-Type': 'application/json' },
                body: JSON.stringify(result.rows)
            };
        }

        // GET /api/users/:id - Get user by ID
        if (path.startsWith('/users/') && method === 'GET') {
            const userId = path.split('/')[2];
            const result = await db.query('SELECT * FROM users WHERE id = $1', [userId]);
            if (result.rows.length === 0) {
                return {
                    statusCode: 404,
                    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
                    body: JSON.stringify({ error: 'User not found' })
                };
            }
            return {
                statusCode: 200,
                headers: { ...corsHeaders, 'Content-Type': 'application/json' },
                body: JSON.stringify(result.rows[0])
            };
        }

        // POST /api/users - Create or update user
        if (path === '/users' && method === 'POST') {
            const { id, name } = JSON.parse(event.body);
            const result = await db.query(
                `INSERT INTO users (id, name) 
                 VALUES ($1, $2) 
                 ON CONFLICT (id) 
                 DO UPDATE SET name = EXCLUDED.name, updated_at = CURRENT_TIMESTAMP
                 RETURNING *`,
                [id, name]
            );
            return {
                statusCode: 200,
                headers: { ...corsHeaders, 'Content-Type': 'application/json' },
                body: JSON.stringify(result.rows[0])
            };
        }

        // ========== OPENED DOORS ==========

        // GET /api/opened-doors/:userId
        if (path.startsWith('/opened-doors/') && method === 'GET') {
            const userId = path.split('/')[2];
            const result = await db.query(
                'SELECT day FROM opened_doors WHERE user_id = $1 ORDER BY day',
                [userId]
            );
            return {
                statusCode: 200,
                headers: { ...corsHeaders, 'Content-Type': 'application/json' },
                body: JSON.stringify(result.rows.map(r => r.day))
            };
        }

        // POST /api/opened-doors
        if (path === '/opened-doors' && method === 'POST') {
            const { userId, day } = JSON.parse(event.body);
            await db.query(
                `INSERT INTO opened_doors (user_id, day) 
                 VALUES ($1, $2) 
                 ON CONFLICT (user_id, day) DO NOTHING`,
                [userId, day]
            );
            return {
                statusCode: 200,
                headers: { ...corsHeaders, 'Content-Type': 'application/json' },
                body: JSON.stringify({ success: true, day })
            };
        }

        // ========== QUIZ ANSWERS ==========

        // GET /api/quiz-answers/:userId
        if (path.startsWith('/quiz-answers/') && method === 'GET') {
            const userId = path.split('/')[2];
            const result = await db.query(
                `SELECT day, question_id, answer, is_correct 
                 FROM quiz_answers 
                 WHERE user_id = $1 
                 ORDER BY day, question_id`,
                [userId]
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
            const dayResults = await db.query(
                'SELECT day, points, completed_at FROM quiz_day_results WHERE user_id = $1',
                [userId]
            );
            
            dayResults.rows.forEach(row => {
                const dayKey = `day${row.day}`;
                if (answersByDay[dayKey]) {
                    answersByDay[dayKey].points = row.points;
                    answersByDay[dayKey].date = row.completed_at.toISOString();
                }
            });
            
            return {
                statusCode: 200,
                headers: { ...corsHeaders, 'Content-Type': 'application/json' },
                body: JSON.stringify(answersByDay)
            };
        }

        // POST /api/quiz-answers
        if (path === '/quiz-answers' && method === 'POST') {
            const { userId, day, answers, points } = JSON.parse(event.body);
            
            await db.query('BEGIN');
            
            try {
                // Delete existing answers for this day
                await db.query(
                    'DELETE FROM quiz_answers WHERE user_id = $1 AND day = $2',
                    [userId, day]
                );
                
                // Insert new answers
                for (const [questionId, answer] of Object.entries(answers)) {
                    const isCorrect = answer !== null && answer !== undefined;
                    await db.query(
                        `INSERT INTO quiz_answers (user_id, day, question_id, answer, is_correct) 
                         VALUES ($1, $2, $3, $4, $5)`,
                        [userId, day, questionId, answer, isCorrect]
                    );
                }
                
                // Update or insert day result
                await db.query(
                    `INSERT INTO quiz_day_results (user_id, day, points) 
                     VALUES ($1, $2, $3) 
                     ON CONFLICT (user_id, day) 
                     DO UPDATE SET points = EXCLUDED.points, completed_at = CURRENT_TIMESTAMP`,
                    [userId, day, points]
                );
                
                // Update user total points
                await db.query(
                    `UPDATE users 
                     SET total_points = (
                         SELECT COALESCE(SUM(points), 0) 
                         FROM quiz_day_results 
                         WHERE user_id = $1
                     ) + (
                         SELECT COALESCE(SUM(c.points), 0)
                         FROM (
                             SELECT DISTINCT challenge_id, points
                             FROM challenge_submissions cs
                             JOIN (
                                 SELECT challenge_id, voted_for_user_id, COUNT(*) as vote_count
                                 FROM challenge_votes
                                 GROUP BY challenge_id, voted_for_user_id
                             ) cv ON cs.challenge_id = cv.challenge_id
                             WHERE cs.user_id = $1
                             AND cv.voted_for_user_id = $1
                             AND cv.vote_count = (
                                 SELECT MAX(vote_count) FROM (
                                     SELECT COUNT(*) as vote_count
                                     FROM challenge_votes
                                     WHERE challenge_id = cs.challenge_id
                                     GROUP BY voted_for_user_id
                                 ) sub
                             )
                         ) c
                     ),
                     updated_at = CURRENT_TIMESTAMP
                     WHERE id = $1`,
                    [userId]
                );
                
                await db.query('COMMIT');
                
                return {
                    statusCode: 200,
                    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
                    body: JSON.stringify({ success: true, day, points })
                };
            } catch (error) {
                await db.query('ROLLBACK');
                throw error;
            }
        }

        // ========== CHALLENGES ==========

        // GET /api/challenges/:challengeId/submissions
        if (path.match(/^\/challenges\/\d+\/submissions$/) && method === 'GET') {
            const challengeId = path.split('/')[2];
            const result = await db.query(
                `SELECT cs.*, u.name as user_name 
                 FROM challenge_submissions cs
                 JOIN users u ON cs.user_id = u.id
                 WHERE cs.challenge_id = $1
                 ORDER BY cs.submitted_at DESC`,
                [challengeId]
            );
            return {
                statusCode: 200,
                headers: { ...corsHeaders, 'Content-Type': 'application/json' },
                body: JSON.stringify(result.rows)
            };
        }

        // GET /api/challenges/user/:userId
        if (path.startsWith('/challenges/user/') && method === 'GET') {
            const userId = path.split('/')[3];
            const result = await db.query(
                'SELECT * FROM challenge_submissions WHERE user_id = $1',
                [userId]
            );
            
            const submissions = {};
            result.rows.forEach(row => {
                submissions[row.challenge_id] = {
                    imageData: row.image_data,
                    date: row.submitted_at.toISOString()
                };
            });
            
            return {
                statusCode: 200,
                headers: { ...corsHeaders, 'Content-Type': 'application/json' },
                body: JSON.stringify(submissions)
            };
        }

        // POST /api/challenges/submit
        if (path === '/challenges/submit' && method === 'POST') {
            const { userId, challengeId, imageData } = JSON.parse(event.body);
            const result = await db.query(
                `INSERT INTO challenge_submissions (user_id, challenge_id, image_data) 
                 VALUES ($1, $2, $3) 
                 ON CONFLICT (user_id, challenge_id) 
                 DO UPDATE SET image_data = EXCLUDED.image_data, submitted_at = CURRENT_TIMESTAMP
                 RETURNING *`,
                [userId, challengeId, imageData]
            );
            return {
                statusCode: 200,
                headers: { ...corsHeaders, 'Content-Type': 'application/json' },
                body: JSON.stringify(result.rows[0])
            };
        }

        // GET /api/challenges/:challengeId/votes
        if (path.match(/^\/challenges\/\d+\/votes$/) && method === 'GET') {
            const challengeId = path.split('/')[2];
            const result = await db.query(
                'SELECT voter_id, voted_for_user_id FROM challenge_votes WHERE challenge_id = $1',
                [challengeId]
            );
            
            const votes = {};
            result.rows.forEach(row => {
                votes[row.voter_id] = row.voted_for_user_id;
            });
            
            return {
                statusCode: 200,
                headers: { ...corsHeaders, 'Content-Type': 'application/json' },
                body: JSON.stringify(votes)
            };
        }

        // POST /api/challenges/vote
        if (path === '/challenges/vote' && method === 'POST') {
            const { challengeId, voterId, votedForUserId } = JSON.parse(event.body);
            
            await db.query('BEGIN');
            
            try {
                // Delete existing vote if exists
                await db.query(
                    'DELETE FROM challenge_votes WHERE challenge_id = $1 AND voter_id = $2',
                    [challengeId, voterId]
                );
                
                // Insert new vote
                await db.query(
                    `INSERT INTO challenge_votes (challenge_id, voter_id, voted_for_user_id) 
                     VALUES ($1, $2, $3)`,
                    [challengeId, voterId, votedForUserId]
                );
                
                // Recalculate points for all users
                await db.query(`
                    UPDATE users 
                    SET total_points = (
                        SELECT COALESCE(SUM(points), 0) 
                        FROM quiz_day_results 
                        WHERE user_id = users.id
                    ) + (
                        SELECT COALESCE(SUM(c.points), 0)
                        FROM (
                            SELECT DISTINCT cs.challenge_id, 
                                   (SELECT points FROM (
                                       SELECT challenge_id, 5 as points
                                       FROM challenge_submissions
                                       LIMIT 1
                                   ) sub WHERE sub.challenge_id = cs.challenge_id) as points
                            FROM challenge_submissions cs
                            JOIN challenge_votes cv ON cs.challenge_id = cv.challenge_id
                            WHERE cs.user_id = users.id
                            AND cv.voted_for_user_id = users.id
                            AND cv.voted_for_user_id IN (
                                SELECT voted_for_user_id 
                                FROM challenge_votes 
                                WHERE challenge_id = cs.challenge_id
                                GROUP BY voted_for_user_id
                                HAVING COUNT(*) = (
                                    SELECT MAX(vote_count) FROM (
                                        SELECT COUNT(*) as vote_count
                                        FROM challenge_votes
                                        WHERE challenge_id = cs.challenge_id
                                        GROUP BY voted_for_user_id
                                    ) sub
                                )
                            )
                        ) c
                    ),
                    updated_at = CURRENT_TIMESTAMP
                `);
                
                await db.query('COMMIT');
                
                return {
                    statusCode: 200,
                    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
                    body: JSON.stringify({ success: true })
                };
            } catch (error) {
                await db.query('ROLLBACK');
                throw error;
            }
        }

        // ========== HEALTH CHECK ==========
        
        if (path === '/health' && method === 'GET') {
            return {
                statusCode: 200,
                headers: { ...corsHeaders, 'Content-Type': 'application/json' },
                body: JSON.stringify({ status: 'ok', timestamp: new Date().toISOString() })
            };
        }

        // 404 for unknown routes
        return {
            statusCode: 404,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            body: JSON.stringify({ error: 'Not found' })
        };

    } catch (error) {
        console.error('API Error:', error);
        return {
            statusCode: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            body: JSON.stringify({ error: error.message || 'Internal server error' })
        };
    }
};

