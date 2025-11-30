# Quick Start - Deployment

## Schnellübersicht

1. **Backend auf Railway deployen** → Siehe `RAILWAY_SETUP.md`
2. **API URL in Netlify setzen** → Siehe `NETLIFY_SETUP.md`
3. **Fertig!** 🎉

## Schritt 1: Railway (Backend)

1. Gehe zu [railway.app](https://railway.app) und erstelle Account
2. "New Project" → "Deploy from GitHub repo"
3. Repository: `weihnachten`
4. Root Directory: `server`
5. Environment Variables:
   - `DATABASE_URL` = deine Neon Connection String
   - `PORT` = `3000`
   - `NODE_ENV` = `production`
6. Notiere dir die Railway URL (z.B. `https://weihnachten-production.up.railway.app`)

## Schritt 2: Netlify (Frontend)

1. Gehe zu [netlify.com](https://netlify.com)
2. "Add new site" → "Import from GitHub"
3. Repository: `weihnachten`
4. Environment Variable:
   - `VITE_API_URL` = `https://deine-railway-url.railway.app/api`
5. Redeploy

## Schritt 3: API URL in index.html (Optional)

Falls die Netlify Function nicht funktioniert:

1. Öffne `index.html`
2. Finde: `'https://your-api-url.railway.app/api'`
3. Ersetze mit deiner Railway URL
4. Committe und pushe

## Testen

1. Öffne deine Netlify-URL
2. Browser-Konsole öffnen (F12)
3. Teste Registrierung → Sollte in Datenbank gespeichert werden
4. Teste Quiz → Sollte in Datenbank gespeichert werden

## Hilfe

- **Railway Probleme:** Siehe `RAILWAY_SETUP.md`
- **Netlify Probleme:** Siehe `NETLIFY_SETUP.md`
- **Allgemeine Deployment Info:** Siehe `DEPLOYMENT.md`

