# Railway Deployment - Schritt für Schritt

## 1. Railway Account erstellen

1. Gehe zu [railway.app](https://railway.app)
2. Klicke auf "Start a New Project"
3. Wähle "Login with GitHub"
4. Autorisiere Railway, auf deine Repositories zuzugreifen

## 2. Neues Projekt erstellen

1. Klicke auf "New Project"
2. Wähle "Deploy from GitHub repo"
3. Wähle dein Repository: `weihnachten`
4. Railway erkennt automatisch, dass es ein Node.js Projekt ist

## 3. Root Directory setzen

1. Gehe zu **Settings** → **Source**
2. Setze **Root Directory** auf: `server`
3. Klicke auf **Save**

## 4. Environment Variables setzen

1. Gehe zu **Variables** Tab
2. Klicke auf **New Variable**
3. Füge folgende Variablen hinzu:

   **Variable 1:**
   - Key: `DATABASE_URL`
   - Value: `postgresql://neondb_owner:npg_xBIljAw81oSV@ep-aged-silence-ag2f6td1-pooler.c-2.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require`

   **Variable 2:**
   - Key: `PORT`
   - Value: `3000`

   **Variable 3:**
   - Key: `NODE_ENV`
   - Value: `production`

4. Klicke auf **Save** für jede Variable

## 5. Deploy Settings

1. Gehe zu **Settings** → **Deploy**
2. **Start Command:** `node server.js`
3. Railway sollte automatisch `npm install` ausführen

## 6. Deploy

1. Railway deployt automatisch nach dem Push
2. Oder klicke auf **Deploy** → **Redeploy**
3. Warte, bis der Deploy abgeschlossen ist (grüner Status)

## 7. Domain/URL finden

1. Nach erfolgreichem Deploy findest du die URL unter **Settings** → **Domains**
2. Oder klicke auf **View Logs** → Die URL wird dort angezeigt
3. Die URL sieht aus wie: `https://weihnachten-production.up.railway.app`
4. **WICHTIG:** Notiere dir diese URL!

## 8. API URL für Netlify

Die API URL ist: `https://deine-railway-url.railway.app/api`

Diese URL musst du in Netlify als Environment Variable `VITE_API_URL` setzen.

## Troubleshooting

### Deploy schlägt fehl
- Überprüfe die Logs unter **Deployments** → **View Logs**
- Stelle sicher, dass `server/package.json` existiert
- Überprüfe, ob Root Directory auf `server` gesetzt ist

### Server startet nicht
- Überprüfe die Logs
- Stelle sicher, dass `DATABASE_URL` korrekt gesetzt ist
- Überprüfe, ob Port 3000 verfügbar ist (Railway setzt automatisch PORT)

### Datenbankverbindung fehlgeschlagen
- Überprüfe die `DATABASE_URL` in den Environment Variables
- Stelle sicher, dass SSL aktiviert ist (`sslmode=require`)

