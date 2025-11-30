// Script zum Anzeigen aller Nutzer in der Datenbank
import pkg from 'pg';
const { Pool } = pkg;

const DATABASE_URL = process.env.DATABASE_URL || 'postgresql://neondb_owner:npg_xBIljAw81oSV@ep-aged-silence-ag2f6td1-pooler.c-2.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require';

const pool = new Pool({
    connectionString: DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});

async function listUsers() {
    try {
        const result = await pool.query('SELECT id, name, total_points FROM users ORDER BY name');
        
        console.log('\n=== Alle Nutzer in der Datenbank ===\n');
        if (result.rows.length === 0) {
            console.log('Keine Nutzer gefunden.');
        } else {
            result.rows.forEach(user => {
                console.log(`- ${user.name} (ID: ${user.id}, Punkte: ${user.total_points})`);
            });
        }
        
        // Zeige auch Challenge-Einreichungen
        const challengesResult = await pool.query(`
            SELECT cs.challenge_id, u.name, cs.submitted_at
            FROM challenge_submissions cs
            JOIN users u ON cs.user_id = u.id
            ORDER BY u.name, cs.challenge_id
        `);
        
        if (challengesResult.rows.length > 0) {
            console.log('\n=== Challenge-Einreichungen ===\n');
            challengesResult.rows.forEach(row => {
                console.log(`- ${row.name}: Challenge ${row.challenge_id} (${row.submitted_at})`);
            });
        }
        
        process.exit(0);
    } catch (error) {
        console.error('Fehler:', error);
        process.exit(1);
    } finally {
        await pool.end();
    }
}

listUsers();

