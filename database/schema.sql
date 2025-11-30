-- Neon PostgreSQL Database Schema für Weihnachtskalender

-- Users Table
CREATE TABLE IF NOT EXISTS users (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    total_points INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Opened Doors Table (welche Türchen wurden geöffnet)
CREATE TABLE IF NOT EXISTS opened_doors (
    id SERIAL PRIMARY KEY,
    user_id VARCHAR(255) REFERENCES users(id) ON DELETE CASCADE,
    day INTEGER NOT NULL CHECK (day >= 1 AND day <= 24),
    opened_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, day)
);

-- Quiz Answers Table
CREATE TABLE IF NOT EXISTS quiz_answers (
    id SERIAL PRIMARY KEY,
    user_id VARCHAR(255) REFERENCES users(id) ON DELETE CASCADE,
    day INTEGER NOT NULL CHECK (day >= 1 AND day <= 24),
    question_id INTEGER NOT NULL,
    answer INTEGER NOT NULL,
    is_correct BOOLEAN DEFAULT FALSE,
    answered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, day, question_id)
);

-- Quiz Day Results Table (Zusammenfassung pro Tag)
CREATE TABLE IF NOT EXISTS quiz_day_results (
    id SERIAL PRIMARY KEY,
    user_id VARCHAR(255) REFERENCES users(id) ON DELETE CASCADE,
    day INTEGER NOT NULL CHECK (day >= 1 AND day <= 24),
    points INTEGER DEFAULT 0,
    completed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, day)
);

-- Challenge Submissions Table
CREATE TABLE IF NOT EXISTS challenge_submissions (
    id SERIAL PRIMARY KEY,
    user_id VARCHAR(255) REFERENCES users(id) ON DELETE CASCADE,
    challenge_id INTEGER NOT NULL,
    image_data TEXT NOT NULL, -- Base64 encoded image
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, challenge_id)
);

-- Challenge Votes Table
CREATE TABLE IF NOT EXISTS challenge_votes (
    id SERIAL PRIMARY KEY,
    challenge_id INTEGER NOT NULL,
    voter_id VARCHAR(255) REFERENCES users(id) ON DELETE CASCADE,
    voted_for_user_id VARCHAR(255) REFERENCES users(id) ON DELETE CASCADE,
    voted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(challenge_id, voter_id)
);

-- Indexes for better performance
CREATE INDEX IF NOT EXISTS idx_opened_doors_user_id ON opened_doors(user_id);
CREATE INDEX IF NOT EXISTS idx_quiz_answers_user_id ON quiz_answers(user_id);
CREATE INDEX IF NOT EXISTS idx_quiz_answers_day ON quiz_answers(day);
CREATE INDEX IF NOT EXISTS idx_quiz_day_results_user_id ON quiz_day_results(user_id);
CREATE INDEX IF NOT EXISTS idx_challenge_submissions_user_id ON challenge_submissions(user_id);
CREATE INDEX IF NOT EXISTS idx_challenge_submissions_challenge_id ON challenge_submissions(challenge_id);
CREATE INDEX IF NOT EXISTS idx_challenge_votes_challenge_id ON challenge_votes(challenge_id);
CREATE INDEX IF NOT EXISTS idx_challenge_votes_voter_id ON challenge_votes(voter_id);

