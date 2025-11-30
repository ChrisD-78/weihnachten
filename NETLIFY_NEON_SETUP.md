# Netlify + Neon Setup - Komplette Anleitung

Diese Anleitung zeigt, wie du den Weihnachtskalender komplett mit Netlify (Frontend + Backend) und Neon (Datenbank) einrichtest.

## Voraussetzungen

- ✅ GitHub Repository
- ✅ Neon PostgreSQL Datenbank (bereits eingerichtet)
- ✅ Netlify Account

## Schritt 1: Netlify Account erstellen

1. Gehe zu [netlify.com](https://netlify.com)
2. Klicke auf "Sign up"
3. Wähle "Sign up with GitHub"
4. Autorisiere Netlify, auf deine Repositories zuzugreifen

## Schritt 2: Neues Site erstellen

1. Klicke auf "Add new site" → "Import an existing project"
2. Wähle "GitHub"
3. Wähle dein Repository: `weihnachten`
4. Netlify erkennt automatisch die Einstellungen

## Schritt 3: Build Settings

1. **Build command:** (leer lassen - statische Seite)
2. **Publish directory:** `/` (Root)
3. Klicke auf **Deploy site**

## Schritt 4: Environment Variable für Datenbank setzen

1. Gehe zu **Site Settings** → **Environment Variables**
2. Klicke auf **Add variable**
3. Füge hinzu:
   - **Key:** `DATABASE_URL`
   - **Value:** `postgresql://neondb_owner:npg_xBIljAw81oSV@ep-aged-silence-ag2f6td1-pooler.c-2.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require`
4. Klicke auf **Save**

## Schritt 5: Netlify Functions Dependencies installieren

Netlify installiert automatisch die Dependencies aus `netlify/functions/package.json`.

**Wichtig:** Stelle sicher, dass `netlify/functions/package.json` existiert und `pg` als Dependency enthält.

## Schritt 6: Redeploy

1. Gehe zu **Deploys** Tab
2. Klicke auf **Trigger deploy** → **Clear cache and deploy site**
3. Warte, bis der Deploy abgeschlossen ist

## Schritt 7: Testen

1. Öffne deine Netlify-URL
2. Öffne die Browser-Konsole (F12)
3. Teste die API:
   ```javascript
   fetch('/.netlify/functions/api/health')
     .then(r => r.json())
     .then(console.log)
   ```
4. Sollte `{status: "ok", timestamp: "..."}` zurückgeben

## Schritt 8: Funktionen testen

1. **Registrierung testen:**
   - Gehe zum Quiz-Bereich
   - Registriere einen neuen Benutzer
   - Überprüfe in Neon, ob der Benutzer in der Datenbank ist

2. **Türchen öffnen:**
   - Öffne ein Türchen im Adventskalender
   - Überprüfe in Neon, ob es in `opened_doors` gespeichert ist

3. **Quiz beantworten:**
   - Beantworte Quiz-Fragen
   - Überprüfe in Neon, ob die Antworten gespeichert sind

## Troubleshooting

### Netlify Functions funktionieren nicht

1. **Überprüfe die Logs:**
   - Gehe zu **Functions** Tab
   - Klicke auf eine Function
   - Überprüfe die Logs auf Fehler

2. **Überprüfe Dependencies:**
   - Stelle sicher, dass `netlify/functions/package.json` existiert
   - Überprüfe, ob `pg` installiert ist

3. **Überprüfe Environment Variables:**
   - Stelle sicher, dass `DATABASE_URL` gesetzt ist
   - Überprüfe, ob die Connection String korrekt ist

### Datenbankverbindung fehlgeschlagen

1. **Überprüfe die Connection String:**
   - Stelle sicher, dass `DATABASE_URL` korrekt ist
   - Überprüfe, ob SSL aktiviert ist (`sslmode=require`)

2. **Überprüfe Neon:**
   - Gehe zu deinem Neon Dashboard
   - Überprüfe, ob die Datenbank läuft
   - Überprüfe die Connection Details

### CORS Fehler

- Netlify Functions haben automatisch CORS aktiviert
- Falls Probleme auftreten, überprüfe die `corsHeaders` in `api.js`

### Function Timeout

- Netlify Functions haben ein Timeout von 10 Sekunden (Free Plan)
- Für längere Operationen: Überlege, ob die Query optimiert werden kann

## API Endpoints

Alle API-Endpoints sind unter `/.netlify/functions/api` verfügbar:

- `GET /.netlify/functions/api/users` - Alle Benutzer
- `GET /.netlify/functions/api/users/:id` - Benutzer nach ID
- `POST /.netlify/functions/api/users` - Benutzer erstellen/aktualisieren
- `GET /.netlify/functions/api/opened-doors/:userId` - Geöffnete Türchen
- `POST /.netlify/functions/api/opened-doors` - Türchen öffnen
- `GET /.netlify/functions/api/quiz-answers/:userId` - Quiz-Antworten
- `POST /.netlify/functions/api/quiz-answers` - Quiz-Antworten speichern
- `GET /.netlify/functions/api/challenges/:challengeId/submissions` - Challenge-Einreichungen
- `GET /.netlify/functions/api/challenges/user/:userId` - Benutzer-Challenges
- `POST /.netlify/functions/api/challenges/submit` - Challenge einreichen
- `GET /.netlify/functions/api/challenges/:challengeId/votes` - Challenge-Abstimmungen
- `POST /.netlify/functions/api/challenges/vote` - Für Challenge abstimmen
- `GET /.netlify/functions/api/health` - Health Check

## Vorteile dieser Lösung

✅ **Alles auf einer Plattform** - Frontend und Backend auf Netlify  
✅ **Keine zusätzlichen Services** - Kein Railway, Render, etc. nötig  
✅ **Einfaches Deployment** - Ein Git Push deployt alles  
✅ **Kostenlos** - Netlify Free Plan reicht für kleine Projekte  
✅ **Automatische Skalierung** - Netlify skaliert automatisch  

## Wichtige Hinweise

- **Function Timeout:** Free Plan hat 10 Sekunden Timeout
- **Function Invocations:** Free Plan hat 125.000 Invocations/Monat
- **Datenbank:** Neon Free Plan hat 0.5 GB Storage
- **Bilder:** Base64-kodierte Bilder werden in der Datenbank gespeichert (kann groß werden)

## Nächste Schritte

Nach erfolgreichem Setup kannst du:
- Die Seite weiter anpassen
- Weitere Features hinzufügen
- Die Datenbank-Performance optimieren

