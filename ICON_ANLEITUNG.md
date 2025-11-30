# Weihnachts-Icon erstellen - Anleitung

## Option 1: Online-Tool (Empfohlen)

1. Gehe zu [convertio.co/svg-png](https://convertio.co/svg-png/)
2. Lade die Datei `icon.svg` hoch
3. Konvertiere zu PNG mit folgenden Größen:
   - **192x192** → speichere als `icon-192.png`
   - **512x512** → speichere als `icon-512.png`
4. Lege beide PNG-Dateien ins Root-Verzeichnis

## Option 2: Mit Node.js Canvas

```bash
npm install canvas
node create-icons.js
```

## Option 3: Mit ImageMagick

```bash
# Installiere ImageMagick (falls nicht vorhanden)
# macOS: brew install imagemagick
# Linux: sudo apt-get install imagemagick

convert icon.svg -resize 192x192 icon-192.png
convert icon.svg -resize 512x512 icon-512.png
```

## Option 4: SVG direkt verwenden (Fallback)

Falls PNG-Dateien nicht erstellt werden können, wird das SVG-Icon als Fallback verwendet. Moderne Browser unterstützen SVG-Icons.

## Was wurde bereits erstellt:

✅ `icon.svg` - SVG-Version des Icons  
✅ `manifest.json` - PWA-Manifest  
✅ Meta-Tags in `index.html` - Für iOS und Android  

## Testen:

1. Öffne die Seite auf dem Handy
2. Bei iOS: Tippe auf "Teilen" → "Zum Home-Bildschirm"
3. Bei Android: Tippe auf das Menü → "Zum Startbildschirm hinzufügen"
4. Das Weihnachts-Icon sollte jetzt auf dem Home-Bildschirm erscheinen!

