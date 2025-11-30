// Quiz Data - 72 Fragen aufgeteilt in 24 Tage (3 Fragen pro Tag)
const quizQuestions = [
    // Tag 1 (Fragen 1-3)
    [
        {
            id: 1,
            question: "Was mag der Weihnachtsmann am liebsten essen?",
            options: ["Pizza mit Ananas", "Kekse und Milch", "Sauerkraut mit Würstchen", "Spinat"],
            correct: 1
        },
        {
            id: 2,
            question: "Wie viele Rentiere ziehen den Schlitten des Weihnachtsmanns?",
            options: ["5 Rentiere", "12 Rentiere", "9 Rentiere", "100 Rentiere"],
            correct: 2
        },
        {
            id: 3,
            question: "Welches Rentier hat eine rote Nase?",
            options: ["Blitzen", "Rudolph", "Donner", "Rudi"],
            correct: 1
        }
    ],
    // Tag 2 (Fragen 4-6)
    [
        {
            id: 4,
            question: "Wo wohnt der Weihnachtsmann?",
            options: ["Auf dem Mond", "In der Sahara", "Am Nordpol", "Im Supermarkt"],
            correct: 2
        },
        {
            id: 5,
            question: "Was trägt der Weihnachtsmann auf dem Kopf?",
            options: ["Einen Cowboyhut", "Eine Krone", "Eine rote Mütze", "Einen Helm"],
            correct: 2
        },
        {
            id: 6,
            question: "Wie kommt der Weihnachtsmann ins Haus?",
            options: ["Durch den Kamin", "Durch die Toilette", "Durch das Fenster", "Er klingelt an der Tür"],
            correct: 0
        }
    ],
    // Tag 3 (Fragen 7-9)
    [
        {
            id: 7,
            question: "Was macht der Weihnachtsmann im Sommer?",
            options: ["Er macht Urlaub am Strand", "Er übt Schlittenfahren", "Er schläft das ganze Jahr", "Er bereitet Weihnachten vor"],
            correct: 3
        },
        {
            id: 8,
            question: "Welche Farbe hat der Mantel des Weihnachtsmanns?",
            options: ["Grün und gelb", "Rot und weiß", "Blau und silber", "Lila mit Punkten"],
            correct: 1
        },
        {
            id: 9,
            question: "Was steht auf dem Wunschzettel ganz oben?",
            options: ["Hausaufgaben", "Spinat", "Spielzeug und Geschenke", "Eine neue Zahnbürste"],
            correct: 2
        }
    ],
    // Tag 4 (Fragen 10-12)
    [
        {
            id: 10,
            question: "Wer hilft dem Weihnachtsmann beim Geschenke einpacken?",
            options: ["Die Pinguine", "Die Wichtel", "Die Feuerwehr", "Dinosaurier"],
            correct: 1
        },
        {
            id: 11,
            question: "Was passiert mit Kindern, die nicht artig waren?",
            options: ["Sie bekommen trotzdem Geschenke", "Sie bekommen Kohle", "Sie müssen zum Zahnarzt", "Nichts Besonderes"],
            correct: 1
        },
        {
            id: 12,
            question: "Womit wird der Schlitten des Weihnachtsmanns gezogen?",
            options: ["Mit einem Traktor", "Mit Rentieren", "Mit Einhörnern", "Mit Pferden"],
            correct: 1
        }
    ],
    // Tag 5 (Fragen 13-15)
    [
        {
            id: 13,
            question: "Was kommt ganz oben auf den Weihnachtsbaum?",
            options: ["Ein Stern oder eine Spitze", "Eine Banane", "Ein Fußball", "Eine Mütze"],
            correct: 0
        },
        {
            id: 14,
            question: "Welcher Baum wird traditionell als Weihnachtsbaum benutzt?",
            options: ["Palme", "Apfelbaum", "Tanne oder Fichte", "Gummibaum"],
            correct: 2
        },
        {
            id: 15,
            question: "Was hängt man an den Weihnachtsbaum?",
            options: ["Socken", "Kugeln und Lametta", "Wäscheklammern", "Alte Handys"],
            correct: 1
        }
    ],
    // Tag 6 (Fragen 16-18)
    [
        {
            id: 16,
            question: "Wann wird der Weihnachtsbaum normalerweise geschmückt?",
            options: ["Im Sommer", "An Ostern", "Im Advent", "Nie"],
            correct: 2
        },
        {
            id: 17,
            question: "Was leuchtet am Weihnachtsbaum?",
            options: ["Glühwürmchen", "Lichterketten", "Taschenlampen", "Neonröhren"],
            correct: 1
        },
        {
            id: 18,
            question: "Was ist ein Adventskranz?",
            options: ["Ein Kranz mit vier Kerzen", "Ein Kranz aus Würstchen", "Ein Hula-Hoop-Reifen", "Ein Suppenteller"],
            correct: 0
        }
    ],
    // Tag 7 (Fragen 19-21)
    [
        {
            id: 19,
            question: "Wie viele Türchen hat ein Adventskalender?",
            options: ["12 Türchen", "24 Türchen", "100 Türchen", "3 Türchen"],
            correct: 1
        },
        {
            id: 20,
            question: "Was findet man oft hinter den Türchen im Adventskalender?",
            options: ["Schokolade oder kleine Geschenke", "Spinnen", "Hausaufgaben", "Dreck"],
            correct: 0
        },
        {
            id: 21,
            question: "Welche Farben sind typisch für Weihnachten?",
            options: ["Schwarz und grau", "Rot, grün und gold", "Orange und lila", "Nur braun"],
            correct: 1
        }
    ],
    // Tag 8 (Fragen 22-24)
    [
        {
            id: 22,
            question: "Was hängt man über den Kamin?",
            options: ["Weihnachtsstrümpfe", "Unterhosen", "Schulranzen", "Bratpfannen"],
            correct: 0
        },
        {
            id: 23,
            question: "Womit schmückt man die Wohnung zu Weihnachten?",
            options: ["Mit Spinnennetzen", "Mit Tannenzweigen und Kerzen", "Mit alten Zeitungen", "Gar nicht"],
            correct: 1
        },
        {
            id: 24,
            question: "Was für Kugeln hängen am Weihnachtsbaum?",
            options: ["Tennisbälle", "Christbaumkugeln", "Seifenblasen", "Bowlingkugeln"],
            correct: 1
        }
    ],
    // Tag 9 (Fragen 25-27)
    [
        {
            id: 25,
            question: "Welches Lied singen Kinder gerne zu Weihnachten?",
            options: ["O Tannenbaum", "Alle meine Entchen", "Baby Shark", "Old MacDonald"],
            correct: 0
        },
        {
            id: 26,
            question: "Was kommt in dem Lied \"Jingle Bells\" vor?",
            options: ["Ein Schlitten mit Glöckchen", "Ein Flugzeug", "Ein Zug", "Ein Fahrrad"],
            correct: 0
        },
        {
            id: 27,
            question: "Welches Lied beginnt mit \"Stille Nacht\"?",
            options: ["Stille Nacht, heilige Nacht", "Stille Nacht, laute Nacht", "Stille Nacht, Party-Nacht", "Stille Nacht, Pizza-Nacht"],
            correct: 0
        }
    ],
    // Tag 10 (Fragen 28-30)
    [
        {
            id: 28,
            question: "Was singt man am liebsten unter dem Weihnachtsbaum?",
            options: ["Popmusik", "Weihnachtslieder", "Rockmusik", "Rapmusik"],
            correct: 1
        },
        {
            id: 29,
            question: "Welches Instrument hört man oft in Weihnachtsliedern?",
            options: ["Elektrische Gitarre", "Glocken", "Schlagzeug", "Saxophon"],
            correct: 1
        },
        {
            id: 30,
            question: "In welchem Lied kommt ein Schneemann vor?",
            options: ["Frosty der Schneemann", "Rudolf das Rentier", "O Tannenbaum", "Alle Jahre wieder"],
            correct: 0
        }
    ],
    // Tag 11 (Fragen 31-33)
    [
        {
            id: 31,
            question: "Wer bringt in dem Lied \"Morgen kommt der Weihnachtsmann\" die Geschenke?",
            options: ["Die Post", "Der Weihnachtsmann", "Die Polizei", "Der Briefträger"],
            correct: 1
        },
        {
            id: 32,
            question: "Was reimt sich auf \"Weihnachtszeit\"?",
            options: ["Käsezeit", "Ferienzeit", "Mathezeit", "Putzzeit"],
            correct: 1
        },
        {
            id: 33,
            question: "Welches Lied singt man oft beim Adventskranz?",
            options: ["Happy Birthday", "Wir sagen euch an den lieben Advent", "Die Gedanken sind frei", "Old MacDonald"],
            correct: 1
        }
    ],
    // Tag 12 (Fragen 34-36)
    [
        {
            id: 34,
            question: "Was für Lieder singt man auf dem Weihnachtsmarkt?",
            options: ["Sommerlieder", "Weihnachtslieder", "Geburtstagslieder", "Schlaflieder"],
            correct: 1
        },
        {
            id: 35,
            question: "In \"Rudolph mit der roten Nase\", welche Farbe hat Rudolphs Nase?",
            options: ["Blau", "Grün", "Rot", "Gelb"],
            correct: 2
        },
        {
            id: 36,
            question: "Was läutet in vielen Weihnachtsliedern?",
            options: ["Das Telefon", "Die Glocken", "Der Wecker", "Die Türklingel"],
            correct: 1
        }
    ],
    // Tag 13 (Fragen 37-39)
    [
        {
            id: 37,
            question: "Was ist Lebkuchen?",
            options: ["Ein Gewürzkuchen", "Ein lebendiger Kuchen", "Ein Kuchen aus Lehm", "Etwas zum Spielen"],
            correct: 0
        },
        {
            id: 38,
            question: "Was isst man traditionell zu Weihnachten?",
            options: ["Gänsebraten oder Würstchen mit Kartoffelsalat", "Nur Eis", "Spaghetti mit Ketchup", "Nichts"],
            correct: 0
        },
        {
            id: 39,
            question: "Welches Getränk trinkt man gerne auf dem Weihnachtsmarkt?",
            options: ["Limonade", "Kinderpunsch", "Spülmittel", "Salzwasser"],
            correct: 1
        }
    ],
    // Tag 14 (Fragen 40-42)
    [
        {
            id: 40,
            question: "Was backt man zu Weihnachten?",
            options: ["Plätzchen und Lebkuchen", "Brot", "Hamburger", "Pizza"],
            correct: 0
        },
        {
            id: 41,
            question: "Welche Form haben viele Weihnachtsplätzchen?",
            options: ["Stern, Herz, Tannenbaum", "Viereck", "Dreieck", "Kreis"],
            correct: 0
        },
        {
            id: 42,
            question: "Was ist ein Christstollen?",
            options: ["Ein Weihnachtsgebäck", "Ein Tunnel", "Ein Baum", "Ein Werkzeug"],
            correct: 0
        }
    ],
    // Tag 15 (Fragen 43-45)
    [
        {
            id: 43,
            question: "Welches Gewürz riecht besonders weihnachtlich?",
            options: ["Zimt", "Salz", "Pfeffer", "Ketchup"],
            correct: 0
        },
        {
            id: 44,
            question: "Was isst der Weihnachtsmann gerne, wenn er zu Besuch kommt?",
            options: ["Kekse", "Spinat", "Käse", "Sushi"],
            correct: 0
        },
        {
            id: 45,
            question: "Aus was besteht ein Lebkuchenhaus?",
            options: ["Aus Ziegelsteinen", "Aus Lebkuchen und Zuckerguss", "Aus Holz", "Aus Pappe"],
            correct: 1
        }
    ],
    // Tag 16 (Fragen 46-48)
    [
        {
            id: 46,
            question: "Was trinkt der Weihnachtsmann gerne dazu?",
            options: ["Milch", "Bier", "Kaffee", "Sprudel"],
            correct: 0
        },
        {
            id: 47,
            question: "Welche Nüsse gibt es oft zu Weihnachten?",
            options: ["Walnüsse und Haselnüsse", "Schrauben", "Kokosnüsse", "Erdnüsse"],
            correct: 0
        },
        {
            id: 48,
            question: "Was für Schokolade gibt es zu Weihnachten besonders oft?",
            options: ["Weihnachtsmann aus Schokolade", "Schokoladenpizza", "Schokoladensuppe", "Schokoladenbrötchen"],
            correct: 0
        }
    ],
    // Tag 17 (Fragen 49-51)
    [
        {
            id: 49,
            question: "Was bringt das Christkind?",
            options: ["Geschenke", "Hausaufgaben", "Blumenkohl", "Nichts"],
            correct: 0
        },
        {
            id: 50,
            question: "Wann feiert man Heiligabend?",
            options: ["Am 1. Januar", "Am 24. Dezember", "Am 31. Oktober", "Jeden Montag"],
            correct: 1
        },
        {
            id: 51,
            question: "Was macht man unter dem Mistelzweig?",
            options: ["Man küsst sich", "Man macht Liegestütze", "Man tanzt Breakdance", "Man schläft"],
            correct: 0
        }
    ],
    // Tag 18 (Fragen 52-54)
    [
        {
            id: 52,
            question: "Wie heißen die drei Weisen aus dem Morgenland?",
            options: ["Tom, Dick und Harry", "Caspar, Melchior und Balthasar", "Huey, Dewey und Louie", "A, B und C"],
            correct: 1
        },
        {
            id: 53,
            question: "Was brachten die drei Weisen dem Jesuskind?",
            options: ["Pizza", "Gold, Weihrauch und Myrrhe", "Spielzeugautos", "Socken"],
            correct: 1
        },
        {
            id: 54,
            question: "In welcher Jahreszeit ist Weihnachten?",
            options: ["Im Sommer", "Im Winter", "Im Frühling", "Im Herbst"],
            correct: 1
        }
    ],
    // Tag 19 (Fragen 55-57)
    [
        {
            id: 55,
            question: "Was wünscht man sich zu Weihnachten?",
            options: ["Frohe Weihnachten!", "Guten Appetit!", "Hals- und Beinbruch!", "Bis bald!"],
            correct: 0
        },
        {
            id: 56,
            question: "Wann beginnt die Adventszeit?",
            options: ["Am 1. Dezember", "Vier Sonntage vor Weihnachten", "Am 24. Dezember", "Im November"],
            correct: 1
        },
        {
            id: 57,
            question: "Was macht man am Heiligen Abend?",
            options: ["Man packt Geschenke aus", "Man geht schwimmen", "Man macht Sport", "Man lernt für die Schule"],
            correct: 0
        }
    ],
    // Tag 20 (Fragen 58-60)
    [
        {
            id: 58,
            question: "Wo wurde Jesus geboren?",
            options: ["In einem Hotel", "In einem Stall", "In einem Schloss", "In einem Krankenhaus"],
            correct: 1
        },
        {
            id: 59,
            question: "Was steht in vielen Wohnzimmern zur Weihnachtszeit?",
            options: ["Ein Trampolin", "Eine Krippe", "Ein Swimmingpool", "Ein Zelt"],
            correct: 1
        },
        {
            id: 60,
            question: "An welchem Tag kommt der Nikolaus?",
            options: ["Am 24. Dezember", "Am 6. Dezember", "Am 1. Januar", "Am 31. Oktober"],
            correct: 1
        }
    ],
    // Tag 21 (Fragen 61-63)
    [
        {
            id: 61,
            question: "Wie sagt man \"Frohe Weihnachten\" auf Englisch?",
            options: ["Happy Halloween", "Merry Christmas", "Happy Birthday", "Good Morning"],
            correct: 1
        },
        {
            id: 62,
            question: "In welchem Land gibt es den Weihnachtsmann \"Santa Claus\"?",
            options: ["Deutschland", "USA und England", "China", "Australien"],
            correct: 1
        },
        {
            id: 63,
            question: "Was feiern die Menschen am 25. Dezember?",
            options: ["Neujahr", "Den ersten Weihnachtsfeiertag", "Halloween", "Ostern"],
            correct: 1
        }
    ],
    // Tag 22 (Fragen 64-66)
    [
        {
            id: 64,
            question: "Welches Tier zieht in manchen Ländern den Schlitten statt Rentieren?",
            options: ["Kängurus (in Australien als Witz)", "Elefanten", "Löwen", "Giraffen"],
            correct: 0
        },
        {
            id: 65,
            question: "Was schmückt man in warmen Ländern, wenn es keine Tannen gibt?",
            options: ["Kakteen", "Palmen", "Steine", "Sand"],
            correct: 1
        },
        {
            id: 66,
            question: "Wann ist Weihnachten in Australien?",
            options: ["Im Winter", "Im Sommer", "Im Herbst", "Im Frühling"],
            correct: 1
        }
    ],
    // Tag 23 (Fragen 67-69)
    [
        {
            id: 67,
            question: "Wie kommt der Weihnachtsmann in Australien manchmal?",
            options: ["Mit dem Schlitten", "Mit dem Surfbrett", "Mit dem Flugzeug", "Mit dem Auto"],
            correct: 1
        },
        {
            id: 68,
            question: "Was ist typisch für Weihnachten in Deutschland?",
            options: ["Weihnachtsmarkt", "Strand", "Schwimmbad", "Sommerfest"],
            correct: 0
        },
        {
            id: 69,
            question: "Welches Land hat den größten Weihnachtsbaum der Welt aufgestellt?",
            options: ["Deutschland", "USA", "Japan", "Island"],
            correct: 1
        }
    ],
    // Tag 24 (Fragen 70-72)
    [
        {
            id: 70,
            question: "In welchem Monat feiern alle Länder Weihnachten?",
            options: ["November", "Dezember", "Januar", "Oktober"],
            correct: 1
        },
        {
            id: 71,
            question: "Was essen Menschen in England traditionell zu Weihnachten?",
            options: ["Truthahn", "Pizza", "Hamburger", "Sushi"],
            correct: 0
        },
        {
            id: 72,
            question: "Welche Farbe hat Schnee zu Weihnachten?",
            options: ["Grün", "Weiß", "Rot", "Blau"],
            correct: 1
        }
    ]
];

// Challenges Data
const challenges = [
    {
        id: 1,
        title: "Weihnachtsoutfit",
        emoji: "📸",
        description: "Schick ein Bild von dir in deinem perfekten Weihnachtsoutfit – je festlicher, desto besser!",
        points: 5
    },
    {
        id: 2,
        title: "Weihnachtsmarkt-Besuch",
        emoji: "🎅",
        description: "Zeig mir ein Foto von dir auf dem Weihnachtsmarkt mit deinem Lieblingsgetränk oder -snack.",
        points: 5
    },
    {
        id: 3,
        title: "Plätzchen-Kunstwerk",
        emoji: "🍪",
        description: "Backe Plätzchen und zeig dein kreativstes Exemplar – Punkte gibt's für Originalität!",
        points: 5
    },
    {
        id: 4,
        title: "Weihnachtsdeko DIY",
        emoji: "✨",
        description: "Bastle eine selbstgemachte Weihnachtsdeko und präsentiere dein Werk.",
        points: 5
    },
    {
        id: 5,
        title: "Geschenkpapier-Meister",
        emoji: "🎁",
        description: "Verpacke ein Geschenk auf besonders kreative Art und weise – zeig dein Ergebnis!",
        points: 5
    },
    {
        id: 6,
        title: "Weihnachtsselfie mit Fremden",
        emoji: "🤳",
        description: "Mache ein freundliches Weihnachtsselfie mit einer fremden Person (mit Erlaubnis natürlich!).",
        points: 5
    },
    {
        id: 7,
        title: "Ugly Christmas Sweater",
        emoji: "🦌",
        description: "Trage den hässlichsten Weihnachtspullover, den du finden kannst, und dokumentiere es.",
        points: 5
    },
    {
        id: 8,
        title: "Weihnachtslied Challenge",
        emoji: "🎵",
        description: "Nimm ein Video auf, wie du ein Weihnachtslied singst oder summst – Kreativität erwünscht!",
        points: 5
    },
    {
        id: 9,
        title: "Adventskalender-Moment",
        emoji: "📅",
        description: "Zeig, wie du dein Adventskalendertürchen öffnest und was sich dahinter verbirgt.",
        points: 5
    },
    {
        id: 10,
        title: "Winterwonderland",
        emoji: "❄️",
        description: "Finde das schönste weihnachtliche Fotomotiv in deiner Stadt und fotografiere es.",
        points: 5
    },
    {
        id: 11,
        title: "Gute Tat",
        emoji: "💝",
        description: "Tue etwas Gutes für jemanden und teile (ohne die Person zu zeigen) was du getan hast.",
        points: 5
    },
    {
        id: 12,
        title: "Weihnachtsstimmung",
        emoji: "🕯️",
        description: "Kreiere die perfekte Weihnachtsatmosphäre bei dir zuhause und zeig uns dein gemütlichstes Setup.",
        points: 5
    }
];

// User Management
let currentUser = null;
let users = JSON.parse(localStorage.getItem('quizUsers') || '[]');
let userAnswers = JSON.parse(localStorage.getItem('quizAnswers') || '{}');
let userChallenges = JSON.parse(localStorage.getItem('quizChallenges') || '{}');
let challengeVotes = JSON.parse(localStorage.getItem('challengeVotes') || '{}'); // {challengeId: {userId: votedForUserId}}

// Initialize Quiz System
function initQuiz() {
    checkAuth();
    renderQuizSection();
}

// Check if user is logged in
function checkAuth() {
    const savedUser = localStorage.getItem('currentQuizUser');
    if (savedUser) {
        const parsedUser = JSON.parse(savedUser);
        // Update user from users array to get latest points
        const updatedUser = users.find(u => u.id === parsedUser.id);
        if (updatedUser) {
            currentUser = updatedUser;
            // Update localStorage with latest user data
            localStorage.setItem('currentQuizUser', JSON.stringify(updatedUser));
        } else {
            currentUser = parsedUser;
        }
        showQuizInterface();
    } else {
        showLoginForm();
    }
}

// Show login/registration form
function showLoginForm() {
    const quizContainer = document.querySelector('.quiz-container');
    if (!quizContainer) return;
    
    quizContainer.innerHTML = `
        <h2 class="quiz-title">🎯 Weihnachtsquiz</h2>
        <div class="quiz-auth">
            <div class="auth-tabs">
                <button class="auth-tab active" data-tab="login">Anmelden</button>
                <button class="auth-tab" data-tab="register">Registrieren</button>
            </div>
            <div class="auth-content">
                <form id="loginForm" class="auth-form active">
                    <h3>Anmelden</h3>
                    <input type="text" id="loginName" placeholder="Dein Name" required>
                    <button type="submit" class="quiz-btn">Anmelden</button>
                </form>
                <form id="registerForm" class="auth-form">
                    <h3>Neues Familienmitglied</h3>
                    <input type="text" id="registerName" placeholder="Dein Name" required>
                    <button type="submit" class="quiz-btn">Registrieren</button>
                </form>
            </div>
        </div>
    `;
    
    // Tab switching
    document.querySelectorAll('.auth-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
            tab.classList.add('active');
            const formId = tab.dataset.tab === 'login' ? 'loginForm' : 'registerForm';
            document.getElementById(formId).classList.add('active');
        });
    });
    
    // Login form
    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('loginName').value.trim();
        const user = users.find(u => u.name.toLowerCase() === name.toLowerCase());
        if (user) {
            currentUser = user;
            // Reload users and answers from localStorage to get latest data
            users = JSON.parse(localStorage.getItem('quizUsers') || '[]');
            userAnswers = JSON.parse(localStorage.getItem('quizAnswers') || '{}');
            const updatedUser = users.find(u => u.id === user.id);
            if (updatedUser) {
                currentUser = updatedUser;
            }
            localStorage.setItem('currentQuizUser', JSON.stringify(currentUser));
            showQuizInterface();
        } else {
            alert('Name nicht gefunden! Bitte registriere dich zuerst.');
        }
    });
    
    // Register form
    document.getElementById('registerForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('registerName').value.trim();
        if (users.find(u => u.name.toLowerCase() === name.toLowerCase())) {
            alert('Dieser Name ist bereits registriert!');
            return;
        }
        const newUser = {
            id: Date.now().toString(),
            name: name,
            totalPoints: 0,
            answers: {}
        };
        users.push(newUser);
        localStorage.setItem('quizUsers', JSON.stringify(users));
        currentUser = newUser;
        localStorage.setItem('currentQuizUser', JSON.stringify(newUser));
        showQuizInterface();
    });
}

// Update points display in header
function updatePointsDisplay() {
    const pointsElement = document.querySelector('.quiz-user-points');
    if (pointsElement && currentUser) {
        // Reload votes
        challengeVotes = JSON.parse(localStorage.getItem('challengeVotes') || '{}');
        
        // Recalculate total points from all answers and challenges
        let totalPoints = 0;
        
        // Points from quiz answers
        if (userAnswers[currentUser.id]) {
            Object.keys(userAnswers[currentUser.id]).forEach(dayKey => {
                totalPoints += userAnswers[currentUser.id][dayKey].points;
            });
        }
        
        // Points from challenge wins (only winners get points)
        challenges.forEach(challenge => {
            const votes = challengeVotes[challenge.id] || {};
            const voteCounts = {};
            
            Object.keys(votes).forEach(voterId => {
                const votedFor = votes[voterId];
                voteCounts[votedFor] = (voteCounts[votedFor] || 0) + 1;
            });
            
            // Find winner
            let maxVotes = 0;
            let winnerId = null;
            Object.keys(voteCounts).forEach(userId => {
                if (voteCounts[userId] > maxVotes) {
                    maxVotes = voteCounts[userId];
                    winnerId = userId;
                }
            });
            
            // Award points to winner
            if (winnerId === currentUser.id && maxVotes > 0) {
                totalPoints += challenge.points;
            }
        });
        
        currentUser.totalPoints = totalPoints;
        pointsElement.textContent = `⭐ ${totalPoints} Punkte`;
        
        // Update in users array
        const userIndex = users.findIndex(u => u.id === currentUser.id);
        if (userIndex !== -1) {
            users[userIndex].totalPoints = totalPoints;
            localStorage.setItem('quizUsers', JSON.stringify(users));
            localStorage.setItem('currentQuizUser', JSON.stringify(currentUser));
        }
    }
}

// Show quiz interface
function showQuizInterface() {
    const quizContainer = document.querySelector('.quiz-container');
    if (!quizContainer) return;
    
    // Reload users and answers to get latest data
    users = JSON.parse(localStorage.getItem('quizUsers') || '[]');
    userAnswers = JSON.parse(localStorage.getItem('quizAnswers') || '{}');
    
    // Reload challenges and votes
    userChallenges = JSON.parse(localStorage.getItem('quizChallenges') || '{}');
    challengeVotes = JSON.parse(localStorage.getItem('challengeVotes') || '{}');
    
    // Recalculate total points
    updateAllUserPoints();
    
    const today = new Date().getDate();
    const currentMonth = new Date().getMonth();
    const maxDay = (currentMonth === 11) ? Math.min(today, 24) : 24;
    const userDayAnswers = userAnswers[currentUser.id] || {};
    
    let html = `
        <div class="quiz-header">
            <h2 class="quiz-title">🎯 Weihnachtsquiz</h2>
            <div class="quiz-user-info">
                <span class="quiz-user-name">👤 ${currentUser.name}</span>
                <span class="quiz-user-points">⭐ ${currentUser.totalPoints || 0} Punkte</span>
                <button class="quiz-logout-btn" onclick="logout()">Abmelden</button>
            </div>
        </div>
        <div class="quiz-nav">
            <button class="quiz-nav-btn" onclick="showRanking()">🏆 Ranking</button>
            <button class="quiz-nav-btn" onclick="showQuizDay()">📝 Quiz</button>
            <button class="quiz-nav-btn" onclick="showChallenges()">⭐ Challenges</button>
        </div>
        <div id="quizContent">
            <!-- Quiz content will be loaded here -->
        </div>
    `;
    
    quizContainer.innerHTML = html;
    
    // Show quiz day selection after rendering
    setTimeout(() => {
        if (currentUser) {
            showQuizDay();
        }
    }, 100);
}

// Render quiz for a specific day
function renderQuizDay(day, userDayAnswers) {
    if (day < 1 || day > 24) {
        return '<p class="quiz-message">Kein Quiz für diesen Tag verfügbar.</p>';
    }
    
    const dayQuestions = quizQuestions[day - 1];
    const dayKey = `day${day}`;
    const answered = userDayAnswers[dayKey];
    
    if (answered) {
        return `
            <div class="quiz-day-completed">
                <h3>Tag ${day} - Abgeschlossen ✅</h3>
                <p>Du hast die Fragen für Tag ${day} bereits beantwortet!</p>
                <p class="quiz-day-points">Punkte: ${answered.points} / 3</p>
                <button class="quiz-btn" onclick="showQuizDay()">Zurück zum Quiz</button>
            </div>
        `;
    }
    
    let html = `
        <div class="quiz-day">
            <h3>Tag ${day} - 3 Fragen</h3>
            <form id="quizForm" onsubmit="submitQuiz(${day}); return false;">
    `;
    
    dayQuestions.forEach((q, qIndex) => {
        html += `
            <div class="quiz-question">
                <h4>Frage ${qIndex + 1}: ${q.question}</h4>
                <div class="quiz-options">
                    ${q.options.map((opt, optIndex) => `
                        <label class="quiz-option">
                            <input type="radio" name="q${q.id}" value="${optIndex}" required>
                            <span>${opt}</span>
                        </label>
                    `).join('')}
                </div>
            </div>
        `;
    });
    
    html += `
                <button type="submit" class="quiz-btn quiz-submit-btn">Antworten absenden</button>
            </form>
        </div>
    `;
    
    return html;
}

// Submit quiz answers
function submitQuiz(day) {
    const form = document.getElementById('quizForm');
    const formData = new FormData(form);
    const dayQuestions = quizQuestions[day - 1];
    const dayKey = `day${day}`;
    
    let points = 0;
    const answers = {};
    
    dayQuestions.forEach(q => {
        const answer = parseInt(formData.get(`q${q.id}`));
        answers[q.id] = answer;
        if (answer === q.correct) {
            points++;
        }
    });
    
    // Save answers
    if (!userAnswers[currentUser.id]) {
        userAnswers[currentUser.id] = {};
    }
    userAnswers[currentUser.id][dayKey] = {
        answers: answers,
        points: points,
        date: new Date().toISOString()
    };
    localStorage.setItem('quizAnswers', JSON.stringify(userAnswers));
    
    // Update points display in header (will recalculate all points)
    updatePointsDisplay();
    
    // Show results
    showQuizResults(day, points, dayQuestions, answers);
}

// Show quiz results
function showQuizResults(day, points, questions, userAnswers) {
    const quizContent = document.getElementById('quizContent');
    let html = `
        <div class="quiz-results">
            <h3>Tag ${day} - Ergebnisse ✅</h3>
            <div class="quiz-results-summary">
                <p class="quiz-results-points">Du hast ${points} von 3 Punkten erreicht!</p>
            </div>
    `;
    
    questions.forEach((q, qIndex) => {
        const userAnswer = userAnswers[q.id];
        const isCorrect = userAnswer === q.correct;
        html += `
            <div class="quiz-result-item ${isCorrect ? 'correct' : 'incorrect'}">
                <h4>Frage ${qIndex + 1}: ${q.question}</h4>
                <p class="quiz-result-answer">Deine Antwort: ${q.options[userAnswer]}</p>
                ${!isCorrect ? `<p class="quiz-result-correct">Richtige Antwort: ${q.options[q.correct]}</p>` : ''}
                <span class="quiz-result-icon">${isCorrect ? '✅' : '❌'}</span>
            </div>
        `;
    });
    
    html += `
            <button class="quiz-btn" onclick="showQuizDay()">Weiter</button>
        </div>
    `;
    
    quizContent.innerHTML = html;
}

// Show ranking
function showRanking() {
    // Reload data
    challengeVotes = JSON.parse(localStorage.getItem('challengeVotes') || '{}');
    
    // Recalculate points for all users
    updateAllUserPoints();
    
    users = JSON.parse(localStorage.getItem('quizUsers') || '[]');
    
    users.forEach(user => {
        let totalPoints = 0;
        
        // Points from quiz answers
        if (userAnswers[user.id]) {
            Object.keys(userAnswers[user.id]).forEach(dayKey => {
                totalPoints += userAnswers[user.id][dayKey].points;
            });
        }
        
        // Points from challenge wins (only winners get points)
        challenges.forEach(challenge => {
            const votes = challengeVotes[challenge.id] || {};
            const voteCounts = {};
            
            Object.keys(votes).forEach(voterId => {
                const votedFor = votes[voterId];
                voteCounts[votedFor] = (voteCounts[votedFor] || 0) + 1;
            });
            
            // Find winner
            let maxVotes = 0;
            let winnerId = null;
            Object.keys(voteCounts).forEach(userId => {
                if (voteCounts[userId] > maxVotes) {
                    maxVotes = voteCounts[userId];
                    winnerId = userId;
                }
            });
            
            // Award points to winner
            if (winnerId === user.id && maxVotes > 0) {
                totalPoints += challenge.points;
            }
        });
        
        user.totalPoints = totalPoints;
    });
    
    localStorage.setItem('quizUsers', JSON.stringify(users));
    
    const sortedUsers = [...users].sort((a, b) => b.totalPoints - a.totalPoints);
    const quizContent = document.getElementById('quizContent');
    
    let html = `
        <div class="quiz-ranking">
            <h3>🏆 Ranking</h3>
            <div class="ranking-list">
    `;
    
    sortedUsers.forEach((user, index) => {
        const medal = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `${index + 1}.`;
        const isCurrentUser = user.id === currentUser.id;
        html += `
            <div class="ranking-item ${isCurrentUser ? 'current-user' : ''}">
                <span class="ranking-position">${medal}</span>
                <span class="ranking-name">${user.name}</span>
                <span class="ranking-points">${user.totalPoints} Punkte</span>
            </div>
        `;
    });
    
    html += `
            </div>
            <button class="quiz-btn" onclick="showQuizDay()">Zurück zum Quiz</button>
        </div>
    `;
    
    quizContent.innerHTML = html;
}

// Show quiz day selection
function showQuizDay() {
    if (!currentUser) {
        console.error('No user logged in');
        return;
    }
    
    const today = new Date().getDate();
    const currentMonth = new Date().getMonth();
    const maxDay = (currentMonth === 11) ? Math.min(today, 24) : 24;
    const userDayAnswers = userAnswers[currentUser.id] || {};
    const quizContent = document.getElementById('quizContent');
    
    if (!quizContent) {
        console.error('Quiz content element not found');
        return;
    }
    
    let html = `
        <div class="quiz-day-selection">
            <h3>Wähle einen Tag</h3>
            <p class="quiz-message">Jeden Tag kannst du 3 Fragen beantworten und Punkte sammeln!</p>
            <div class="quiz-days-grid">
    `;
    
    for (let day = 1; day <= maxDay; day++) {
        const dayKey = `day${day}`;
        const answered = userDayAnswers[dayKey];
        const isToday = day === today && currentMonth === 11;
        
        html += `
            <button class="quiz-day-btn ${answered ? 'answered' : ''} ${isToday ? 'today' : ''}" 
                    onclick="loadQuizDay(${day})" ${answered ? 'disabled' : ''}>
                <span class="quiz-day-number">Tag ${day}</span>
                ${answered ? `<span class="quiz-day-status">✅ ${userDayAnswers[dayKey].points}/3</span>` : '<span class="quiz-day-status">📝 Offen</span>'}
                ${isToday ? '<span class="quiz-day-badge">Heute</span>' : ''}
            </button>
        `;
    }
    
    html += `
            </div>
        </div>
    `;
    
    quizContent.innerHTML = html;
}

// Load quiz for specific day
function loadQuizDay(day) {
    const userDayAnswers = userAnswers[currentUser.id] || {};
    const quizContent = document.getElementById('quizContent');
    quizContent.innerHTML = renderQuizDay(day, userDayAnswers);
}

// Logout
function logout() {
    currentUser = null;
    localStorage.removeItem('currentQuizUser');
    showLoginForm();
}

// Render quiz section
function renderQuizSection() {
    // This will be called when the page loads
    // The quiz section is already in the HTML, we just need to initialize it
    // checkAuth() already handles showing the login form or quiz interface
}

// Auto-initialize when script loads (if DOM is ready)
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        if (typeof initQuiz === 'function') {
            initQuiz();
        }
    });
} else {
    // DOM is already loaded
    if (typeof initQuiz === 'function') {
        initQuiz();
    }
}

// Show challenges
function showChallenges() {
    if (!currentUser) {
        console.error('No user logged in');
        return;
    }
    
    const quizContent = document.getElementById('quizContent');
    if (!quizContent) {
        console.error('Quiz content element not found');
        return;
    }
    
    // Reload data
    userChallenges = JSON.parse(localStorage.getItem('quizChallenges') || '{}');
    challengeVotes = JSON.parse(localStorage.getItem('challengeVotes') || '{}');
    
    const userCompletedChallenges = userChallenges[currentUser.id] || {};
    
    let html = `
        <div class="challenges-container">
            <h3>⭐ Challenges - Extrapunkte sammeln!</h3>
            <p class="quiz-message">Erfülle die Challenges, lade dein Foto hoch und stimme für die besten Fotos ab!</p>
            <div class="challenges-grid">
    `;
    
    challenges.forEach(challenge => {
        const completed = userCompletedChallenges[challenge.id]?.imageData ? true : false;
        const imageData = userCompletedChallenges[challenge.id]?.imageData || null;
        
        // Count submissions for this challenge
        let submissionCount = 0;
        Object.keys(userChallenges).forEach(userId => {
            if (userChallenges[userId][challenge.id]?.imageData) {
                submissionCount++;
            }
        });
        
        html += `
            <div class="challenge-card ${completed ? 'completed' : ''}">
                <div class="challenge-header">
                    <span class="challenge-emoji">${challenge.emoji}</span>
                    <h4 class="challenge-title">${challenge.title}</h4>
                    <span class="challenge-points">+${challenge.points} Punkte</span>
                </div>
                <p class="challenge-description">${challenge.description}</p>
                <div class="challenge-info">
                    <span class="challenge-submissions">📸 ${submissionCount} Einreichungen</span>
                </div>
                ${completed ? `
                    <div class="challenge-completed">
                        <span class="challenge-status">✅ Foto hochgeladen</span>
                    </div>
                ` : `
                    <div class="challenge-upload">
                        <input type="file" id="challenge-${challenge.id}" accept="image/*,video/*" capture="environment" style="display: none;" onchange="handleChallengeUpload(${challenge.id}, this)">
                        <button class="quiz-btn challenge-upload-btn" onclick="document.getElementById('challenge-${challenge.id}').click()">
                            📸 Foto/Video aufnehmen
                        </button>
                    </div>
                `}
                <button class="quiz-btn challenge-gallery-btn" onclick="showChallengeGallery(${challenge.id})">
                    🖼️ Galerie & Abstimmung
                </button>
            </div>
        `;
    });
    
    html += `
            </div>
        </div>
    `;
    
    quizContent.innerHTML = html;
}

// Show challenge gallery with voting
function showChallengeGallery(challengeId) {
    const quizContent = document.getElementById('quizContent');
    if (!quizContent) return;
    
    // Reload data
    userChallenges = JSON.parse(localStorage.getItem('quizChallenges') || '{}');
    challengeVotes = JSON.parse(localStorage.getItem('challengeVotes') || '{}');
    users = JSON.parse(localStorage.getItem('quizUsers') || '[]');
    
    const challenge = challenges.find(c => c.id === challengeId);
    if (!challenge) return;
    
    // Get all submissions for this challenge
    const submissions = [];
    Object.keys(userChallenges).forEach(userId => {
        if (userChallenges[userId][challengeId]?.imageData) {
            const user = users.find(u => u.id === userId);
            submissions.push({
                userId: userId,
                userName: user ? user.name : 'Unbekannt',
                imageData: userChallenges[userId][challengeId].imageData,
                date: userChallenges[userId][challengeId].date
            });
        }
    });
    
    // Get votes for this challenge
    const votes = challengeVotes[challengeId] || {};
    const voteCounts = {};
    Object.keys(votes).forEach(voterId => {
        const votedFor = votes[voterId];
        voteCounts[votedFor] = (voteCounts[votedFor] || 0) + 1;
    });
    
    // Check if current user has voted
    const userVote = votes[currentUser.id];
    
    let html = `
        <div class="challenge-gallery">
            <button class="quiz-btn" onclick="showChallenges()" style="margin-bottom: 1rem;">← Zurück zu Challenges</button>
            <h3>${challenge.emoji} ${challenge.title}</h3>
            <p class="quiz-message">${challenge.description}</p>
            <p class="quiz-message">Stimme für das beste Foto ab! Der Gewinner erhält ${challenge.points} Punkte.</p>
    `;
    
    if (submissions.length === 0) {
        html += `
            <div class="challenge-no-submissions">
                <p>Noch keine Einreichungen für diese Challenge.</p>
            </div>
        `;
    } else {
        html += `
            <div class="gallery-grid">
        `;
        
        submissions.forEach(submission => {
            const voteCount = voteCounts[submission.userId] || 0;
            const isVoted = userVote === submission.userId;
            const canVote = !userVote && submission.userId !== currentUser.id;
            
            html += `
                <div class="gallery-item">
                    <div class="gallery-image-container">
                        <img src="${submission.imageData}" alt="${submission.userName}" class="gallery-image">
                        ${isVoted ? '<span class="vote-badge">✅ Deine Stimme</span>' : ''}
                    </div>
                    <div class="gallery-info">
                        <span class="gallery-user">👤 ${submission.userName}</span>
                        <span class="gallery-votes">👍 ${voteCount} Stimmen</span>
                    </div>
                    ${canVote ? `
                        <button class="quiz-btn vote-btn" onclick="voteForChallenge(${challengeId}, '${submission.userId}')">
                            👍 Für dieses Foto stimmen
                        </button>
                    ` : submission.userId === currentUser.id ? `
                        <span class="vote-status">Dein Foto</span>
                    ` : ''}
                </div>
            `;
        });
        
        html += `
            </div>
        `;
    }
    
    html += `
        </div>
    `;
    
    quizContent.innerHTML = html;
}

// Vote for a challenge submission
function voteForChallenge(challengeId, votedForUserId) {
    if (!challengeVotes[challengeId]) {
        challengeVotes[challengeId] = {};
    }
    
    challengeVotes[challengeId][currentUser.id] = votedForUserId;
    localStorage.setItem('challengeVotes', JSON.stringify(challengeVotes));
    
    // Recalculate points based on votes
    recalculateChallengePoints();
    
    // Refresh gallery
    showChallengeGallery(challengeId);
}

// Recalculate challenge points based on votes
function recalculateChallengePoints() {
    // Reload data
    userChallenges = JSON.parse(localStorage.getItem('quizChallenges') || '[]');
    challengeVotes = JSON.parse(localStorage.getItem('challengeVotes') || '{}');
    users = JSON.parse(localStorage.getItem('quizUsers') || '[]');
    
    // Reset all challenge points
    users.forEach(user => {
        // Remove old challenge points (we'll recalculate)
    });
    
    // Calculate winners for each challenge
    challenges.forEach(challenge => {
        const votes = challengeVotes[challenge.id] || {};
        const voteCounts = {};
        
        Object.keys(votes).forEach(voterId => {
            const votedFor = votes[voterId];
            voteCounts[votedFor] = (voteCounts[votedFor] || 0) + 1;
        });
        
        // Find winner (user with most votes)
        let maxVotes = 0;
        let winnerId = null;
        Object.keys(voteCounts).forEach(userId => {
            if (voteCounts[userId] > maxVotes) {
                maxVotes = voteCounts[userId];
                winnerId = userId;
            }
        });
        
        // Award points to winner
        if (winnerId && maxVotes > 0) {
            const winner = users.find(u => u.id === winnerId);
            if (winner) {
                // Points will be recalculated in updatePointsDisplay
            }
        }
    });
    
    // Update all user points
    updateAllUserPoints();
}

// Update all user points
function updateAllUserPoints() {
    users.forEach(user => {
        let totalPoints = 0;
        
        // Points from quiz answers
        if (userAnswers[user.id]) {
            Object.keys(userAnswers[user.id]).forEach(dayKey => {
                totalPoints += userAnswers[user.id][dayKey].points;
            });
        }
        
        // Points from challenge wins
        challenges.forEach(challenge => {
            const votes = challengeVotes[challenge.id] || {};
            const voteCounts = {};
            
            Object.keys(votes).forEach(voterId => {
                const votedFor = votes[voterId];
                voteCounts[votedFor] = (voteCounts[votedFor] || 0) + 1;
            });
            
            // Find winner
            let maxVotes = 0;
            let winnerId = null;
            Object.keys(voteCounts).forEach(userId => {
                if (voteCounts[userId] > maxVotes) {
                    maxVotes = voteCounts[userId];
                    winnerId = userId;
                }
            });
            
            // Award points to winner
            if (winnerId === user.id && maxVotes > 0) {
                totalPoints += challenge.points;
            }
        });
        
        user.totalPoints = totalPoints;
    });
    
    localStorage.setItem('quizUsers', JSON.stringify(users));
    
    // Update current user if logged in
    if (currentUser) {
        const updatedUser = users.find(u => u.id === currentUser.id);
        if (updatedUser) {
            currentUser = updatedUser;
            localStorage.setItem('currentQuizUser', JSON.stringify(currentUser));
            updatePointsDisplay();
        }
    }
}

// Handle challenge upload
function handleChallengeUpload(challengeId, input) {
    if (!input.files || !input.files[0]) return;
    
    const file = input.files[0];
    const reader = new FileReader();
    
    reader.onload = function(e) {
        const imageData = e.target.result;
        
        // Save challenge submission (no points yet - only winner gets points)
        if (!userChallenges[currentUser.id]) {
            userChallenges[currentUser.id] = {};
        }
        
        userChallenges[currentUser.id][challengeId] = {
            imageData: imageData,
            date: new Date().toISOString()
        };
        
        localStorage.setItem('quizChallenges', JSON.stringify(userChallenges));
        
        // Refresh challenges view
        showChallenges();
    };
    
    reader.readAsDataURL(file);
}

// Make functions globally available
window.logout = logout;
window.showRanking = showRanking;
window.showQuizDay = showQuizDay;
window.loadQuizDay = loadQuizDay;
window.submitQuiz = submitQuiz;
window.showChallenges = showChallenges;
window.handleChallengeUpload = handleChallengeUpload;
window.showChallengeGallery = showChallengeGallery;
window.voteForChallenge = voteForChallenge;

