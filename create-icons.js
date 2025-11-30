// Script zum Erstellen der PWA Icons
// Benötigt: npm install canvas (optional, falls nicht verfügbar wird SVG verwendet)

const fs = require('fs');

// Einfaches SVG-Icon (wird als Fallback verwendet)
const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <rect width="512" height="512" fill="#0a0a0a"/>
  <g transform="translate(256, 400)">
    <rect x="-20" y="0" width="40" height="60" fill="#8B4513" rx="5"/>
    <path d="M 0,-100 L -80,20 L 80,20 Z" fill="#228B22"/>
    <path d="M 0,-150 L -100,0 L 100,0 Z" fill="#32CD32"/>
    <path d="M 0,-200 L -120,-20 L 120,-20 Z" fill="#228B22"/>
    <circle cx="-50" cy="-30" r="15" fill="#FF0000"/>
    <circle cx="50" cy="-30" r="15" fill="#FFD700"/>
    <circle cx="0" cy="-80" r="15" fill="#FF0000"/>
    <path d="M 0,-220 L -10,-240 L 0,-250 L 10,-240 Z" fill="#FFD700"/>
  </g>
  <text x="100" y="100" font-size="40" fill="#FFFFFF" opacity="0.8">❄</text>
  <text x="400" y="150" font-size="30" fill="#FFFFFF" opacity="0.7">❄</text>
</svg>`;

// Speichere SVG
fs.writeFileSync('icon.svg', svgIcon);
console.log('✅ icon.svg erstellt');

// Versuche Canvas zu verwenden (falls verfügbar)
try {
    const { createCanvas } = require('canvas');
    
    function createIcon(size) {
        const canvas = createCanvas(size, size);
        const ctx = canvas.getContext('2d');
        
        // Hintergrund
        ctx.fillStyle = '#0a0a0a';
        ctx.fillRect(0, 0, size, size);
        
        const centerX = size / 2;
        const scale = size / 512;
        
        // Baumstamm
        ctx.fillStyle = '#8B4513';
        ctx.fillRect(centerX - 20 * scale, size - 60 * scale, 40 * scale, 60 * scale);
        
        // Baum-Ebenen
        ctx.fillStyle = '#228B22';
        ctx.beginPath();
        ctx.moveTo(centerX, 50 * scale);
        ctx.lineTo(centerX - 80 * scale, size - 92 * scale);
        ctx.lineTo(centerX + 80 * scale, size - 92 * scale);
        ctx.closePath();
        ctx.fill();
        
        ctx.fillStyle = '#32CD32';
        ctx.beginPath();
        ctx.moveTo(centerX, 30 * scale);
        ctx.lineTo(centerX - 100 * scale, size - 112 * scale);
        ctx.lineTo(centerX + 100 * scale, size - 112 * scale);
        ctx.closePath();
        ctx.fill();
        
        ctx.fillStyle = '#228B22';
        ctx.beginPath();
        ctx.moveTo(centerX, 10 * scale);
        ctx.lineTo(centerX - 120 * scale, size - 132 * scale);
        ctx.lineTo(centerX + 120 * scale, size - 132 * scale);
        ctx.closePath();
        ctx.fill();
        
        // Kugeln
        ctx.fillStyle = '#FF0000';
        ctx.beginPath();
        ctx.arc(centerX - 50 * scale, size - 142 * scale, 15 * scale, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = '#FFD700';
        ctx.beginPath();
        ctx.arc(centerX + 50 * scale, size - 142 * scale, 15 * scale, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = '#FF0000';
        ctx.beginPath();
        ctx.arc(centerX, size - 172 * scale, 15 * scale, 0, Math.PI * 2);
        ctx.fill();
        
        // Stern
        ctx.fillStyle = '#FFD700';
        ctx.beginPath();
        const starSize = 20 * scale;
        for (let i = 0; i < 5; i++) {
            const angle = (i * 4 * Math.PI / 5) - Math.PI / 2;
            const x = centerX + Math.cos(angle) * starSize;
            const y = 10 * scale + Math.sin(angle) * starSize;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fill();
        
        return canvas.toBuffer('image/png');
    }
    
    // Erstelle Icons
    fs.writeFileSync('icon-192.png', createIcon(192));
    console.log('✅ icon-192.png erstellt');
    
    fs.writeFileSync('icon-512.png', createIcon(512));
    console.log('✅ icon-512.png erstellt');
    
} catch (error) {
    console.log('⚠️  Canvas nicht verfügbar. SVG-Icon wurde erstellt.');
    console.log('   Installiere canvas mit: npm install canvas');
    console.log('   Oder konvertiere icon.svg manuell zu PNG (192x192 und 512x512)');
    console.log('   Online-Tool: https://convertio.co/svg-png/');
}

