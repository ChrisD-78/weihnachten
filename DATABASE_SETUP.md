# Datenbank Setup für Weihnachtskalender

Diese Anleitung erklärt, wie du die Neon PostgreSQL Datenbank für den Weihnachtskalender einrichtest.

## Schritt 1: Neon Database erstellen

1. Gehe zu [neon.tech](https://neon.tech) und erstelle ein kostenloses Konto
2. Klicke auf "Create Project"
3. Wähle einen Projektnamen (z.B. "weihnachtskalender")
4. Wähle eine Region (z.B. "EU (Frankfurt)")
5. Klicke auf "Create Project"

## Schritt 2: Connection String kopieren

1. Nach der Erstellung findest du die Connection String in der Projektübersicht
2. Klicke auf "Connection Details"
3. Kopiere die Connection String (Format: `postgresql://user:password@host/database?sslmode=require`)

## Schritt 3: Datenbank Schema erstellen

1. Öffne den Neon SQL Editor in deinem Projekt
2. Öffne die Datei `database/schema.sql`
3. Kopiere den gesamten Inhalt
4. Füge ihn in den SQL Editor ein
5. Führe das Script aus (Button "Run" oder F5)

Das Schema erstellt folgende Tabellen:
- `users` - Benutzer
- `opened_doors` - Geöffnete Türchen
- `quiz_answers` - Quiz-Antworten
- `quiz_day_results` - Quiz-Tagesergebnisse
- `challenge_submissions` - Challenge-Einreichungen
- `challenge_votes` - Challenge-Abstimmungen

## Schritt 4: Backend Server einrichten

1. Gehe in den `server` Ordner:
   ```bash
   cd server
   ```

2. Installiere Dependencies:
   ```bash
   npm install
   ```

3. Erstelle eine `.env` Datei:
   ```bash
   cp .env.example .env
   ```

4. Öffne `.env` und füge deine Neon Connection String ein:
   ```
   DATABASE_URL=postgresql://user:password@host/database?sslmode=require
   PORT=3000
   NODE_ENV=production
   ```

5. Starte den Server:
   ```bash
   npm start
   ```

## Schritt 5: API URL konfigurieren

### Für lokale Entwicklung:
- Die API läuft standardmäßig auf `http://localhost:3000/api`

### Für Netlify/Production:
1. Deploye den Backend Server (z.B. auf Railway, Render, oder einem eigenen Server)
2. Setze die Environment Variable `VITE_API_URL` in Netlify:
   - Gehe zu Netlify Dashboard → Site Settings → Environment Variables
   - Füge hinzu: `VITE_API_URL` = `https://your-api-domain.com/api`

## Schritt 6: Testen

1. Öffne die Browser-Konsole
2. Die API sollte automatisch verwendet werden, wenn `VITE_API_URL` gesetzt ist
3. Teste die Registrierung eines neuen Benutzers
4. Teste das Öffnen eines Türchens
5. Teste das Beantworten von Quiz-Fragen

## Troubleshooting

### Database Connection Error
- Überprüfe, ob die Connection String korrekt ist
- Stelle sicher, dass SSL aktiviert ist (`?sslmode=require`)
- Überprüfe, ob die IP-Adresse in Neon erlaubt ist (bei Bedarf IP-Whitelist anpassen)

### API nicht erreichbar
- Überprüfe, ob der Server läuft
- Überprüfe die CORS-Einstellungen
- Stelle sicher, dass die API-URL korrekt ist

### Daten werden nicht gespeichert
- Überprüfe die Browser-Konsole auf Fehler
- Überprüfe die Server-Logs
- Stelle sicher, dass die Datenbank-Tabellen existieren

## Datenbank-Struktur

### users
- `id` (VARCHAR) - Eindeutige Benutzer-ID
- `name` (VARCHAR) - Benutzername
- `total_points` (INTEGER) - Gesamtpunkte
- `created_at` (TIMESTAMP) - Erstellungsdatum
- `updated_at` (TIMESTAMP) - Letzte Aktualisierung

### opened_doors
- `id` (SERIAL) - Eindeutige ID
- `user_id` (VARCHAR) - Benutzer-ID
- `day` (INTEGER) - Tag (1-24)
- `opened_at` (TIMESTAMP) - Öffnungszeitpunkt

### quiz_answers
- `id` (SERIAL) - Eindeutige ID
- `user_id` (VARCHAR) - Benutzer-ID
- `day` (INTEGER) - Tag (1-24)
- `question_id` (INTEGER) - Frage-ID
- `answer` (INTEGER) - Antwort
- `is_correct` (BOOLEAN) - Ist korrekt
- `answered_at` (TIMESTAMP) - Antwortzeitpunkt

### quiz_day_results
- `id` (SERIAL) - Eindeutige ID
- `user_id` (VARCHAR) - Benutzer-ID
- `day` (INTEGER) - Tag (1-24)
- `points` (INTEGER) - Punkte für diesen Tag
- `completed_at` (TIMESTAMP) - Abschlusszeitpunkt

### challenge_submissions
- `id` (SERIAL) - Eindeutige ID
- `user_id` (VARCHAR) - Benutzer-ID
- `challenge_id` (INTEGER) - Challenge-ID
- `image_data` (TEXT) - Base64 kodiertes Bild
- `submitted_at` (TIMESTAMP) - Einreichungszeitpunkt

### challenge_votes
- `id` (SERIAL) - Eindeutige ID
- `challenge_id` (INTEGER) - Challenge-ID
- `voter_id` (VARCHAR) - Abstimmender Benutzer
- `voted_for_user_id` (VARCHAR) - Benutzer, für den abgestimmt wurde
- `voted_at` (TIMESTAMP) - Abstimmungszeitpunkt

