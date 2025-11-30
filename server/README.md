# Weihnachtskalender Backend API

Backend API für den Weihnachtskalender mit Neon PostgreSQL Datenbank.

## Setup

1. **Neon Database erstellen:**
   - Gehe zu [neon.tech](https://neon.tech)
   - Erstelle ein neues Projekt
   - Kopiere die Connection String

2. **Dependencies installieren:**
   ```bash
   cd server
   npm install
   ```

3. **Umgebungsvariablen einrichten:**
   ```bash
   cp .env.example .env
   ```
   Dann die `.env` Datei bearbeiten und deine Neon Database URL eintragen.

4. **Datenbank Schema erstellen:**
   - Verbinde dich mit deiner Neon Database
   - Führe das SQL-Script aus `../database/schema.sql` aus

5. **Server starten:**
   ```bash
   npm start
   # oder für Development mit Auto-Reload:
   npm run dev
   ```

## API Endpoints

### Users
- `GET /api/users` - Alle Benutzer abrufen
- `GET /api/users/:id` - Benutzer nach ID abrufen
- `POST /api/users` - Benutzer erstellen/aktualisieren

### Opened Doors
- `GET /api/opened-doors/:userId` - Geöffnete Türchen für Benutzer
- `POST /api/opened-doors` - Türchen als geöffnet markieren

### Quiz Answers
- `GET /api/quiz-answers/:userId` - Quiz-Antworten für Benutzer
- `POST /api/quiz-answers` - Quiz-Antworten speichern

### Challenges
- `GET /api/challenges/:challengeId/submissions` - Einreichungen für Challenge
- `GET /api/challenges/user/:userId` - Benutzer-Einreichungen
- `POST /api/challenges/submit` - Challenge einreichen
- `GET /api/challenges/:challengeId/votes` - Abstimmungen für Challenge
- `POST /api/challenges/vote` - Für Challenge abstimmen

### Health
- `GET /api/health` - Server Status

## Deployment

Für Netlify Functions oder andere Serverless-Plattformen muss die API entsprechend angepasst werden.

