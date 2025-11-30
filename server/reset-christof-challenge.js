// Script zum Zurücksetzen der Weihnachtsoutfit-Challenge für Christof
import pkg from 'pg';
const { Pool } = pkg;

const DATABASE_URL = process.env.DATABASE_URL || 'postgresql://neondb_owner:npg_xBIljAw81oSV@ep-aged-silence-ag2f6td1-pooler.c-2.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require';

const pool = new Pool({
    connectionString: DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});

async function resetChristofChallenge() {
    try {
        console.log('Starte Reset der Weihnachtsoutfit-Challenge für Christof...');
        
        await pool.query('BEGIN');
        
        // Finde Christof User ID
        const userResult = await pool.query(
            "SELECT id, name FROM users WHERE LOWER(name) = 'christof'"
        );
        
        if (userResult.rows.length === 0) {
            console.log('❌ Nutzer "Christof" nicht gefunden.');
            await pool.query('ROLLBACK');
            return;
        }
        
        const christofId = userResult.rows[0].id;
        console.log(`✅ Gefundener Nutzer: ${userResult.rows[0].name} (ID: ${christofId})`);
        
        // Finde Weihnachtsoutfit Challenge ID (normalerweise Challenge ID 8)
        // Prüfe zuerst, welche Challenge-ID es ist
        const challengeResult = await pool.query(
            `SELECT cs.id, cs.challenge_id, cs.user_id, cs.submitted_at 
             FROM challenge_submissions cs
             JOIN users u ON cs.user_id = u.id
             WHERE LOWER(u.name) = 'christof'`
        );
        
        console.log(`Gefundene Challenge-Einreichungen für Christof: ${challengeResult.rows.length}`);
        
        // Lösche alle Challenge-Einreichungen für Christof
        const deleteSubmissions = await pool.query(
            'DELETE FROM challenge_submissions WHERE user_id = $1',
            [christofId]
        );
        console.log(`✅ Gelöscht: ${deleteSubmissions.rowCount} Challenge-Einreichung(en)`);
        
        // Lösche Challenge-Abstimmungen, wo Christof beteiligt ist
        const deleteVotes = await pool.query(
            'DELETE FROM challenge_votes WHERE voter_id = $1 OR voted_for_user_id = $1',
            [christofId]
        );
        console.log(`✅ Gelöscht: ${deleteVotes.rowCount} Challenge-Abstimmung(en)`);
        
        // Setze Punkte auf 0 zurück (wird beim nächsten Update neu berechnet)
        const updatePoints = await pool.query(
            'UPDATE users SET total_points = 0 WHERE id = $1',
            [christofId]
        );
        console.log(`✅ Punkte zurückgesetzt für Christof`);
        
        await pool.query('COMMIT');
        
        console.log('✅ Reset erfolgreich abgeschlossen! Christof kann die Challenge jetzt neu machen.');
        process.exit(0);
    } catch (error) {
        await pool.query('ROLLBACK');
        console.error('❌ Fehler beim Reset:', error);
        process.exit(1);
    } finally {
        await pool.end();
    }
}

resetChristofChallenge();

