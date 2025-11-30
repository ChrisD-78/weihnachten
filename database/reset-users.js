// Script zum Zurücksetzen der Quiz-Daten für Christof und Kirstin
// Führe dieses Script aus, um alle Quiz-Daten für diese Nutzer zu löschen

const { Pool } = require('pg');

const DATABASE_URL = process.env.DATABASE_URL || 'postgresql://neondb_owner:npg_xBIljAw81oSV@ep-aged-silence-ag2f6td1-pooler.c-2.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require';

const pool = new Pool({
    connectionString: DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});

async function resetUsers() {
    try {
        console.log('Starte Reset für Christof und Kirstin...');
        
        await pool.query('BEGIN');
        
        // Finde User IDs
        const usersResult = await pool.query(
            "SELECT id, name FROM users WHERE LOWER(name) IN ('christof', 'kirstin')"
        );
        
        if (usersResult.rows.length === 0) {
            console.log('Keine Nutzer mit Namen Christof oder Kirstin gefunden.');
            await pool.query('ROLLBACK');
            return;
        }
        
        const userIds = usersResult.rows.map(u => u.id);
        console.log(`Gefundene Nutzer: ${usersResult.rows.map(u => u.name).join(', ')}`);
        console.log(`User IDs: ${userIds.join(', ')}`);
        
        // Lösche Quiz-Antworten
        const answersResult = await pool.query(
            'DELETE FROM quiz_answers WHERE user_id = ANY($1)',
            [userIds]
        );
        console.log(`Gelöscht: ${answersResult.rowCount} Quiz-Antworten`);
        
        // Lösche Quiz-Tagesergebnisse
        const resultsResult = await pool.query(
            'DELETE FROM quiz_day_results WHERE user_id = ANY($1)',
            [userIds]
        );
        console.log(`Gelöscht: ${resultsResult.rowCount} Quiz-Tagesergebnisse`);
        
        // Lösche Challenge-Einreichungen
        const challengesResult = await pool.query(
            'DELETE FROM challenge_submissions WHERE user_id = ANY($1)',
            [userIds]
        );
        console.log(`Gelöscht: ${challengesResult.rowCount} Challenge-Einreichungen`);
        
        // Lösche Challenge-Abstimmungen (als Voter und als Voted-For)
        const votesResult1 = await pool.query(
            'DELETE FROM challenge_votes WHERE voter_id = ANY($1) OR voted_for_user_id = ANY($1)',
            [userIds]
        );
        console.log(`Gelöscht: ${votesResult1.rowCount} Challenge-Abstimmungen`);
        
        // Setze Punkte auf 0 zurück
        const updateResult = await pool.query(
            "UPDATE users SET total_points = 0 WHERE LOWER(name) IN ('christof', 'kirstin')"
        );
        console.log(`Zurückgesetzt: ${updateResult.rowCount} Nutzer-Punkte`);
        
        await pool.query('COMMIT');
        
        console.log('✅ Reset erfolgreich abgeschlossen!');
        process.exit(0);
    } catch (error) {
        await pool.query('ROLLBACK');
        console.error('Fehler beim Reset:', error);
        process.exit(1);
    } finally {
        await pool.end();
    }
}

resetUsers();

