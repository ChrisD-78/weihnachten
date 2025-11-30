// Script zum Zurücksetzen der Weihnachtsoutfit-Challenge (Challenge ID 1) für alle Nutzer
import pkg from 'pg';
const { Pool } = pkg;

const DATABASE_URL = process.env.DATABASE_URL || 'postgresql://neondb_owner:npg_xBIljAw81oSV@ep-aged-silence-ag2f6td1-pooler.c-2.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require';

const pool = new Pool({
    connectionString: DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});

async function resetChallenge1() {
    try {
        console.log('Starte Reset der Weihnachtsoutfit-Challenge (Challenge ID 1)...');
        
        await pool.query('BEGIN');
        
        // Zeige zuerst, welche Einreichungen existieren
        const checkResult = await pool.query(`
            SELECT cs.id, cs.challenge_id, u.name, cs.submitted_at 
            FROM challenge_submissions cs
            JOIN users u ON cs.user_id = u.id
            WHERE cs.challenge_id = 1
        `);
        
        if (checkResult.rows.length > 0) {
            console.log('\nGefundene Einreichungen für Challenge 1:');
            checkResult.rows.forEach(row => {
                console.log(`  - ${row.name} (${row.submitted_at})`);
            });
        } else {
            console.log('Keine Einreichungen für Challenge 1 gefunden.');
        }
        
        // Lösche alle Challenge-Einreichungen für Challenge ID 1
        const deleteSubmissions = await pool.query(
            'DELETE FROM challenge_submissions WHERE challenge_id = 1'
        );
        console.log(`\n✅ Gelöscht: ${deleteSubmissions.rowCount} Challenge-Einreichung(en) für Challenge 1`);
        
        // Lösche alle Challenge-Abstimmungen für Challenge ID 1
        const deleteVotes = await pool.query(
            'DELETE FROM challenge_votes WHERE challenge_id = 1'
        );
        console.log(`✅ Gelöscht: ${deleteVotes.rowCount} Challenge-Abstimmung(en) für Challenge 1`);
        
        // Setze Punkte für alle Nutzer zurück (werden beim nächsten Update neu berechnet)
        const updatePoints = await pool.query(`
            UPDATE users 
            SET total_points = (
                SELECT COALESCE(SUM(points), 0) 
                FROM quiz_day_results 
                WHERE user_id = users.id
            )
        `);
        console.log(`✅ Punkte für alle Nutzer neu berechnet`);
        
        await pool.query('COMMIT');
        
        console.log('\n✅ Reset erfolgreich abgeschlossen! Die Weihnachtsoutfit-Challenge kann jetzt neu gemacht werden.');
        process.exit(0);
    } catch (error) {
        await pool.query('ROLLBACK');
        console.error('❌ Fehler beim Reset:', error);
        process.exit(1);
    } finally {
        await pool.end();
    }
}

resetChallenge1();

