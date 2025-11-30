-- Reset Quiz-Daten für Christof und Kirstin ab 1.12
-- Lösche alle Quiz-Antworten und Quiz-Tagesergebnisse für diese Nutzer

-- Finde User IDs für Christof und Kirstin
-- (Anpassen falls die IDs anders sind)

-- Lösche Quiz-Antworten
DELETE FROM quiz_answers 
WHERE user_id IN (
    SELECT id FROM users WHERE LOWER(name) IN ('christof', 'kirstin')
);

-- Lösche Quiz-Tagesergebnisse
DELETE FROM quiz_day_results 
WHERE user_id IN (
    SELECT id FROM users WHERE LOWER(name) IN ('christof', 'kirstin')
);

-- Lösche Challenge-Einreichungen (Bilder)
DELETE FROM challenge_submissions 
WHERE user_id IN (
    SELECT id FROM users WHERE LOWER(name) IN ('christof', 'kirstin')
);

-- Lösche Challenge-Abstimmungen
DELETE FROM challenge_votes 
WHERE voter_id IN (
    SELECT id FROM users WHERE LOWER(name) IN ('christof', 'kirstin')
)
OR voted_for_user_id IN (
    SELECT id FROM users WHERE LOWER(name) IN ('christof', 'kirstin')
);

-- Setze Punkte auf 0 zurück
UPDATE users 
SET total_points = 0 
WHERE LOWER(name) IN ('christof', 'kirstin');

