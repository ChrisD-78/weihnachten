# Netlify Setup - Schritt für Schritt

## 1. Netlify Account erstellen

1. Gehe zu [netlify.com](https://netlify.com)
2. Klicke auf "Sign up"
3. Wähle "Sign up with GitHub"
4. Autorisiere Netlify, auf deine Repositories zuzugreifen

## 2. Neues Site erstellen

1. Klicke auf "Add new site" → "Import an existing project"
2. Wähle "GitHub"
3. Wähle dein Repository: `weihnachten`
4. Netlify erkennt automatisch die Einstellungen

## 3. Build Settings

1. **Build command:** (leer lassen - statische Seite)
2. **Publish directory:** `/` (Root)
3. Klicke auf **Deploy site**

## 4. Environment Variable setzen

1. Gehe zu **Site Settings** → **Environment Variables**
2. Klicke auf **Add variable**
3. Füge hinzu:
   - **Key:** `VITE_API_URL`
   - **Value:** `https://deine-railway-url.railway.app/api`
     (Ersetze `deine-railway-url` mit deiner tatsächlichen Railway URL)
4. Klicke auf **Save**

## 5. Netlify Function einrichten

Die Netlify Function `get-api-url.js` ist bereits erstellt und sollte automatisch funktionieren.

**Wichtig:** Stelle sicher, dass die Function die Environment Variable `VITE_API_URL` lesen kann.

## 6. Redeploy

1. Gehe zu **Deploys** Tab
2. Klicke auf **Trigger deploy** → **Clear cache and deploy site**
3. Warte, bis der Deploy abgeschlossen ist

## 7. Testen

1. Öffne deine Netlify-URL
2. Öffne die Browser-Konsole (F12)
3. Teste die Registrierung eines neuen Benutzers
4. Überprüfe, ob die API-Calls funktionieren

## Alternative: API URL direkt in index.html setzen

Falls die Netlify Function nicht funktioniert, kannst du die API URL direkt in `index.html` setzen:

1. Öffne `index.html`
2. Finde die Zeile mit `'https://your-api-url.railway.app/api'`
3. Ersetze sie mit deiner tatsächlichen Railway API URL
4. Committe und pushe die Änderung

## Troubleshooting

### API URL wird nicht geladen
- Überprüfe die Browser-Konsole auf Fehler
- Stelle sicher, dass `VITE_API_URL` in Netlify gesetzt ist
- Überprüfe, ob die Netlify Function funktioniert: `https://deine-site.netlify.app/.netlify/functions/get-api-url`

### CORS Fehler
- Überprüfe die Server-Logs in Railway
- Stelle sicher, dass CORS im Server aktiviert ist
- Überprüfe, ob die Netlify-URL in den CORS-Einstellungen erlaubt ist

### Environment Variable nicht verfügbar
- Netlify Environment Variables sind nur während des Builds verfügbar
- Für statische Seiten: Verwende die Netlify Function oder setze die URL direkt in `index.html`

