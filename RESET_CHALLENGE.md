# Challenge zurücksetzen - Anleitung

## Problem
Die Weihnachtsoutfit-Challenge wird als "von Christof abgeschlossen" angezeigt, obwohl sie neu gemacht werden soll.

## Lösung

### Option 1: Browser-Konsole (Schnellste Methode)

1. Öffne die Weihnachtskalender-Seite
2. Öffne die Browser-Konsole (F12)
3. Führe folgenden Code aus:

```javascript
// Lösche Challenge-Daten für Christof aus localStorage
let userChallenges = JSON.parse(localStorage.getItem('quizChallenges') || '{}');
let users = JSON.parse(localStorage.getItem('quizUsers') || '[]');

// Finde Christof
const christof = users.find(u => u.name.toLowerCase() === 'christof');
if (christof) {
    // Lösche Challenge 1 (Weihnachtsoutfit) für Christof
    if (userChallenges[christof.id] && userChallenges[christof.id][1]) {
        delete userChallenges[christof.id][1];
        localStorage.setItem('quizChallenges', JSON.stringify(userChallenges));
        console.log('✅ Challenge 1 für Christof gelöscht!');
    }
    
    // Lösche auch Challenge-Votes
    let challengeVotes = JSON.parse(localStorage.getItem('challengeVotes') || '{}');
    if (challengeVotes[1]) {
        // Lösche Votes, wo Christof beteiligt ist
        Object.keys(challengeVotes[1]).forEach(voterId => {
            if (voterId === christof.id || challengeVotes[1][voterId] === christof.id) {
                delete challengeVotes[1][voterId];
            }
        });
        localStorage.setItem('challengeVotes', JSON.stringify(challengeVotes));
        console.log('✅ Challenge-Votes für Christof gelöscht!');
    }
    
    console.log('✅ Fertig! Seite neu laden und als Christof anmelden.');
} else {
    console.log('❌ Christof nicht gefunden. Stelle sicher, dass du dich als Christof angemeldet hast.');
}
```

4. Lade die Seite neu (F5)

### Option 2: Alle Challenge-Daten löschen

Wenn du alle Challenge-Daten löschen möchtest:

```javascript
localStorage.removeItem('quizChallenges');
localStorage.removeItem('challengeVotes');
console.log('✅ Alle Challenge-Daten gelöscht!');
location.reload();
```

### Option 3: Datenbank-Reset (wenn Daten in DB sind)

Falls die Daten bereits in der Datenbank sind:

```bash
cd server
node reset-challenge-1.js
```

Dies löscht alle Einreichungen für Challenge 1 (Weihnachtsoutfit).

## Nach dem Reset

1. Lade die Seite neu
2. Melde dich als Christof an
3. Die Weihnachtsoutfit-Challenge sollte jetzt wieder verfügbar sein

