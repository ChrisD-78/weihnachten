# Deployment-Anleitung

Diese Anleitung erklärt, wie du den Weihnachtskalender für Production deployst.

## 1. Backend Server deployen

### Option A: Railway (Empfohlen)

1. **Railway Account erstellen:**
   - Gehe zu [railway.app](https://railway.app)
   - Erstelle ein kostenloses Konto (GitHub Login)

2. **Neues Projekt erstellen:**
   - Klicke auf "New Project"
   - Wähle "Deploy from GitHub repo"
   - Wähle dein Repository `weihnachten`
   - Wähle den `server` Ordner als Root Directory

3. **Environment Variables setzen:**
   - Gehe zu "Variables" Tab
   - Füge hinzu:
     ```
     DATABASE_URL=postgresql://neondb_owner:npg_xBIljAw81oSV@ep-aged-silence-ag2f6td1-pooler.c-2.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require
     PORT=3000
     NODE_ENV=production
     ```

4. **Deploy:**
   - Railway deployt automatisch
   - Nach dem Deploy erhältst du eine URL wie: `https://your-app.railway.app`
   - **Wichtig:** Notiere dir diese URL!

### Option B: Render

1. **Render Account erstellen:**
   - Gehe zu [render.com](https://render.com)
   - Erstelle ein kostenloses Konto

2. **Neuen Web Service erstellen:**
   - Klicke auf "New +" → "Web Service"
   - Verbinde dein GitHub Repository
   - Wähle den `server` Ordner als Root Directory

3. **Konfiguration:**
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
   - **Environment:** Node

4. **Environment Variables:**
   - Füge hinzu:
     ```
     DATABASE_URL=postgresql://neondb_owner:npg_xBIljAw81oSV@ep-aged-silence-ag2f6td1-pooler.c-2.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require
     PORT=3000
     NODE_ENV=production
     ```

5. **Deploy:**
   - Render deployt automatisch
   - Nach dem Deploy erhältst du eine URL wie: `https://your-app.onrender.com`
   - **Wichtig:** Notiere dir diese URL!

## 2. Netlify Environment Variable setzen

1. **Gehe zu Netlify Dashboard:**
   - Öffne [app.netlify.com](https://app.netlify.com)
   - Wähle dein Projekt

2. **Environment Variables hinzufügen:**
   - Gehe zu: **Site Settings** → **Environment Variables**
   - Klicke auf **Add variable**
   - Füge hinzu:
     - **Key:** `VITE_API_URL`
     - **Value:** `https://your-api-url.railway.app/api` (oder deine Render URL)
   - Klicke auf **Save**

3. **Build Settings anpassen (optional):**
   - Gehe zu: **Site Settings** → **Build & deploy** → **Build settings**
   - **Build command:** (leer lassen, da statische Seite)
   - **Publish directory:** `/` (Root)

4. **Redeploy:**
   - Gehe zu **Deploys** Tab
   - Klicke auf **Trigger deploy** → **Clear cache and deploy site**

## 3. Frontend anpassen (für Production)

Die API URL wird automatisch über die Environment Variable `VITE_API_URL` gesetzt. 

**Wichtig:** Netlify setzt Environment Variables nur während des Builds. Da wir eine statische Seite haben, müssen wir die URL zur Laufzeit setzen.

### Lösung: Netlify Functions oder Inline Script

Da Netlify Environment Variables nicht direkt im Browser verfügbar sind, gibt es zwei Optionen:

**Option 1: Netlify Function (Empfohlen)**
Erstelle eine Netlify Function, die die API URL zurückgibt.

**Option 2: Inline Script in index.html**
Passe `index.html` an, um die API URL aus einer Netlify Function zu laden.

## 4. Testen

1. Öffne deine Netlify-URL
2. Öffne die Browser-Konsole (F12)
3. Teste die Registrierung eines neuen Benutzers
4. Teste das Öffnen eines Türchens
5. Teste das Beantworten von Quiz-Fragen

## Troubleshooting

### API nicht erreichbar
- Überprüfe, ob der Backend Server läuft
- Überprüfe die CORS-Einstellungen im Server
- Überprüfe die API URL in Netlify Environment Variables

### CORS Fehler
- Stelle sicher, dass `cors()` im Server aktiviert ist
- Überprüfe, ob die Netlify-URL in den CORS-Einstellungen erlaubt ist

### Daten werden nicht gespeichert
- Überprüfe die Browser-Konsole auf Fehler
- Überprüfe die Server-Logs in Railway/Render
- Überprüfe die Datenbankverbindung

