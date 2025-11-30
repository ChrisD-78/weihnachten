// Story content in 24 parts
const storyParts = [
    {
        day: 1,
        title: "Der Anfang",
        image: "images/tag1.jpg", // Beispiel: Lokales Bild. Setze auf null, wenn kein Bild vorhanden ist.
        content: `Es war Heiligabend, 15 Uhr, und Yvonne stand am Fenster wie ein Wachposten. "Er kommt nicht. ER KOMMT WIEDER NICHT!"

Steffen blätterte seelenruhig in seiner Zeitung. "Schatz, du hast genau die gleichen Worte letztes Jahr gesagt. Und das Jahr davor. Und—"

"ICH WEISS!", schrie Yvonne. "Aber dieses Jahr hab ich ihm um 13 Uhr geschrieben, er soll um 15 Uhr da sein! Das sind zwei Stunden Puffer!"

"Nicht genug", murmelte ihre Tochter Lea vom Sofa aus.`
    },
    {
        day: 2,
        title: "Die Zwillinge",
        image: null,
        content: `"WAS HAST DU GESAGT?"

"Nichts, Mama. Du bist wunderschön, wenn du wütend bist."

Die Zwillinge Anna und Emma kicherten in ihr Handy.

"Was ist so lustig?", fragte Yvonne misstrauisch.

"Nichts", sagten beide gleichzeitig, viel zu unschuldig.`
    },
    {
        day: 3,
        title: "Der Wettpool",
        image: null,
        content: `"Zeigt her!" Yvonne schnappte sich Annas Handy. Auf dem Display war eine WhatsApp-Gruppe namens "Onkel Thomas Unpünktlichkeits-Wettpool".

"Ihr habt WETTEN abgeschlossen, wann euer Onkel kommt?!"

"Tante Ina ist auch dabei", verteidigte sich Emma. "Sie hat auf 17:30 Uhr getippt."

"Seine eigene FRAU wettet gegen ihn?!"

"Sie kennt ihn halt", zuckte Anna mit den Schultern.`
    },
    {
        day: 4,
        title: "Christof kommt",
        image: "images/tag4.jpg", // Beispiel: Lokales Bild. Setze auf null, wenn kein Bild vorhanden ist.
        content: `In diesem Moment klingelte es. Christof stand vor der Tür mit einem Grinsen und sechs – SECHS – riesigen Einkaufstaschen.

"FROHE WEIHNACHTEN! Macht Platz, der Meisterkoch ist da!"

"Christof, wir sind acht Leute. Warum hast du so viel—"

"NEUN Leute! Kirstin ist im Auto, die holt noch ihre Sachen!" Er drängelte sich an Yvonne vorbei. "Wo ist meine Küche? Ich meine, DEINE Küche, aber ab jetzt für drei Stunden MEINE Küche!"`
    },
    {
        day: 5,
        title: "Der Ofen",
        image: null,
        content: `"Hinten links, wie jeden—"

Aber Christof war bereits verschwunden. Sekunden später hörte man: "YVONNE! WARUM IST DEIN OFEN SO KLEIN?!"

"ER IST EIN NORMALER OFEN!"

"FÜR HOBBITS VIELLEICHT!"

Kirstin kam herein, beladen mit Tüten. "Hallo zusammen! Tut mir leid wegen ihm. Wenn er kocht, wird er ein bisschen... speziell."`
    },
    {
        day: 6,
        title: "Die Messer",
        image: null,
        content: `"Ein bisschen?", aus der Küche: "ICH BRAUCHE EINEN GRÖSSEREN TOPF! UND WO SIND DIE GUTEN MESSER?!"

"Die sind in der—" begann Yvonne.

"DIESE MESSER SIND EINE BELEIDIGUNG FÜR JEDEN KOCH! DAMIT KÖNNTE ICH HÖCHSTENS BUTTER STREICHEN! WEICHE BUTTER!"

Steffen flüsterte Kirstin zu: "Ist er immer so?"

"Nur an Weihnachten. Und Ostern. Und Geburtstagen. Und Dienstagen."`
    },
    {
        day: 7,
        title: "Das Küchenchaos",
        image: null,
        content: `"WER HAT HIER GEFLÜSTERT?! ICH HÖRE ALLES!", brüllte Christof aus der Küche.

Eine Stunde verging. Aus der Küche kamen Geräusche wie aus einem Action-Film: Töpfe knallten, Wasser zischte, dann ein lauter Fluch ("NEIN NEIN NEIN, DU DUMME SOSSE, NICHT ANBRENNEN!"), gefolgt von erleichtertem Seufzen.

Yvonne stand wieder am Fenster. "16:15 Uhr. SECHZEHN UHR FÜNFZEHN!"`
    },
    {
        day: 8,
        title: "Der Anruf",
        image: null,
        content: `"Mama, du musst dich entspannen", sagte Lea.

"WIE BITTE?!"

Das Telefon klingelte. Yvonne riss es ans Ohr. "THOMAS!"

"Hallo Schwesterherz! Wir sind fast—"

"WO SEID IHR?!"

"Äh... kennst du die Tankstelle bei der—"

"DIE IST FÜNF MINUTEN VON HIER!"`
    },
    {
        day: 9,
        title: "Die Ausrede",
        image: null,
        content: `"Genau! Also sind wir gleich da!"

"WARUM WARST DU AN DER TANKSTELLE?! DU WUSSTEST SEIT DREI WOCHEN, DASS HEUTE WEIHNACHTEN IST!"

"Ja, aber Ben wollte noch Fußball spielen, und dann musste ich tanken, und Ina konnte ihren Lippenstift nicht finden—"

"IHREN WAS?!"

"Ihren Lieblingslippenstift! Kannst du dir vorstellen, wie die Stimmung im Auto war, als—"`

    },
    {
        day: 10,
        title: "Die Drohung",
        image: null,
        content: `"THOMAS, ICH ERWARTE EUCH IN ZEHN MINUTEN. NICHT ELF. NICHT FÜNFZEHN. ZEHN!"

"Versprochen!"

Es wurden fünfunddreißig Minuten.

Als es endlich klingelte, riss Yvonne die Tür so heftig auf, dass sie fast aus den Angeln flog.`
    },
    {
        day: 11,
        title: "Thomas kommt an",
        image: null,
        content: `"THOMAS FRIEDRICH Drost"
(Sein zweiter Name war nicht Friedrich, aber das machte es dramatischer.)

Thomas stand da mit seinem typischen "Ich-weiß-ich-hab-Mist-gebaut-aber-ich-bin-so-charmant" Grinsen. "Schwesterherz! Frohe Weihnachten!"

"ES IST FAST SIEBZEHN UHR!"

"Ich hab Geschenke!", versuchte Thomas abzulenken.`
    },
    {
        day: 12,
        title: "Der Gewinner",
        image: null,
        content: `"Ich hab auf 17:30 getippt, verdammt!", rief Ina hinter ihm und schaute auf ihr Handy. "Emma gewinnt!"

"IHR WETTET IMMER NOCH?!", Yvonne war fassungslos.

"Die Familie muss doch zusammenhalten", grinste Ina und umarmte Yvonne. "Frohe Weihnachten! Zeig mir, was ich retten kann."

Ben schob sich an allen vorbei, das Fußballtrikot gut sichtbar unter seiner Jacke.`
    },
    {
        day: 13,
        title: "Ben und das Derby",
        image: null,
        content: `"Hey Yvonne! Gibt's WLAN? Das Derby läuft gleich!"

"BEN! WEIHNACHTEN!", zischte Ina.

"Aber Mama, es ist das DERBY! Das ist wichtiger als— ich meine, genauso wichtig wie— ich meine..." Ben merkte, dass er sich vergrub.

"Weiter", sagte Ina mit verschränkten Armen.

"...ich meine, Weihnachten ist natürlich das Wichtigste, aber theoretisch könnte ich beides—"

"Nein."`
    },
    {
        day: 14,
        title: "Geschwisterstreit",
        image: null,
        content: `"Aber—"

"NEIN."

Chrissy verdrehte die Augen. "Ben, du bist so peinlich."

"Du hast drei Stunden gebraucht, um dein Outfit auszusuchen!"

"Weil ich GUT aussehen wollte!"

"Du siehst aus wie—"

"KINDER!", unterbrach Thomas. "Wir sind bei Familie! Benehmt euch!"`
    },
    {
        day: 15,
        title: "Christofs Küche",
        image: null,
        content: `Aus der Küche brüllte Christof: "THOMAS, BIST DU DAS?! KOMMST DU IN MEINE KÜCHE, SCHMEIS ICH DICH MIT EINER PFANNE RAUS!"

"Ich wollte nur—"

"RAUS!"

"Aber ich hab doch noch gar nichts—"

Ein Holzlöffel flog durch die Tür und verfehlte Thomas nur knapp.

"Okay, okay! Ich bleibe hier!"`
    },
    {
        day: 16,
        title: "Der TikTok-Streit",
        image: null,
        content: `Lea, Anna und Emma beäugten Ben kritisch. "Fußball schauen an Weihnachten?", fragte Anna abschätzig.

"Das ist asozial", ergänzte Emma.

"Ihr schaut doch die ganze Zeit auf eure Handys!", verteidigte sich Ben.

"Ja, aber wir gucken nichts Langweiliges wie Fußball."

"LANGWEILIG?! Fußball ist—" Ben holte tief Luft. "Wisst ihr was? Ich diskutiere nicht mit Menschen, die denken, TikTok sei Content."`
    },
    {
        day: 17,
        title: "Die Kampfansage",
        image: null,
        content: `"OH NEIN, ER HAT ES GEWAGT!", Anna sprang auf.

"KAMPFANSAGE!", rief Emma.

"Mädchen, Ben, RUHE!", Yvonne massierte ihre Schläfen. "Steffen, hast du irgendwo Schmerztabletten?"

"In der Küche."

"Ich geh da nicht rein. Christof könnte mich mit einem Schneebesen angreifen."`
    },
    {
        day: 18,
        title: "Inas Dekoration",
        image: null,
        content: `Ina hatte sich bereits ans Werk gemacht. Mit der Effizienz einer Spezialeinheit verwandelte sie das Esszimmer. Goldene Bänder wirbelten durch die Luft, Kerzen erschienen wie durch Magie, Tannenzweige wurden kunstvoll drapiert.

"Ina, kannst du auch Wunder?", fragte Steffen bewundernd.

"Nur mit Dekoration. Wenn ich Thomas pünktlich kriegen könnte, würde ich den Friedensnobelpreis bekommen."

"Ich hab dich gehört!", rief Thomas aus dem Wohnzimmer.

"Gut!", rief Ina zurück.`
    },
    {
        day: 19,
        title: "Kirstins Gesang",
        image: null,
        content: `Kirstin hatte sich aufs Sofa gesetzt und summte leise vor sich hin. Thomas setzte sich neben sie.

"Kirstin, singst du uns später was?"

"Vielleicht", lächelte sie.

"Sie singt wie ein Engel", schwärmte Christof aus der Küche. "Hab ich euch das schon erzählt?"

"ZEHNMAL!", riefen alle gleichzeitig.

"Nur weil es wahr ist!"`
    },
    {
        day: 20,
        title: "Der Knall",
        image: null,
        content: `Plötzlich ein lauter Knall aus der Küche. Alle erstarrten.

"Christof?", fragte Yvonne vorsichtig. "Alles okay?"

Stille.

"CHRISTOF?!"

"Alles... bestens!" Christofs Stimme klang verdächtig.

"Was ist passiert?"

"NICHTS! Gar nichts! Absolut nichts! Die Gans ist perfekt! Die Soße ist gerettet! Alles unter Kontrolle!"

"Das klingt nicht nach 'unter Kontrolle'", flüsterte Steffen.`
    },
    {
        day: 21,
        title: "Bens Handy",
        image: null,
        content: `"ICH HÖRE EUCH IMMER NOCH!"

Ben hatte heimlich sein Handy gezückt und streamte das Spiel. Mit der Lautstärke auf stumm saß er in der Ecke und starrte auf den Bildschirm.

Aber Ina hatte Mutterradar. Ohne hinzuschauen: "Ben, Handy weg."

"Aber Mama, ich—"

"WEG."

"Nur noch zwei—"

"BEN!"

Ben wusste, das war ernst. Seufzend legte er das Handy weg.`
    },
    {
        day: 22,
        title: "Das Essen ist fertig",
        image: "images/tag22.jpg", // Beispiel: Lokales Bild. Setze auf null, wenn kein Bild vorhanden ist.
        content: `Endlich, nach dramatischen drei Stunden, verkündete Christof: "DAS ESSEN IST FERTIG! Und es ist PERFEKT! Wie ICH!"

"Bescheiden bist du auch noch", murmelte Thomas.

"Was hast du gesagt?"

"Dass du WUNDERBAR bist!"

"Das dachte ich mir."

Alle versammelten sich am Tisch. Das Essen sah tatsächlich aus wie aus einem Hochglanzmagazin. Inas Dekoration gepaart mit Christofs Meisterwerk ergab einen Tisch, den man in Lifestyle-Magazinen erwarten würde.

"Boah", machte Ben beeindruckt.`
    },
    {
        day: 23,
        title: "Kirstin singt",
        image: null,
        content: `Nach dem Essen – und Christofs Schokoladen-Soufflé, das Steffen beinahe zum Weinen brachte – räusperte sich Kirstin.

"Ich könnte... vielleicht... ein Lied singen?"

"JAAAAA!", schrien die Kinder.

Sie stand auf, schloss die Augen, und begann: "Stille Nacht..."

Ihre Stimme war so schön, dass alle verstummten. Sogar Ben legte sein Handy weg (freiwillig!). Sogar Lea hörte auf zu scrollen. Die Zwillinge saßen mit offenem Mund da.

Als das Lied endete, war es einen Moment totenstill.

Dann sagte Ben: "Okay, das war... wow."`
    },
    {
        day: 24,
        title: "Das Ende",
        image: "images/tag24.jpg", // Beispiel: Lokales Bild. Setze auf null, wenn kein Bild vorhanden ist.
        content: `Spät am Abend, als die Kinder in ihre Zimmer verzogen hatten (Ben natürlich, um das Spiel nachzuholen), saßen die Erwachsenen zusammen.

"Thomas", sagte Yvonne ernst.

"Ja?"

"Du warst einundvierzig Minuten zu spät."

"Aber—"

"ABER", fuhr sie fort und grinste, "es war trotzdem das beste Weihnachten."

Thomas lächelte erleichtert. "Wirklich?"

"Es war wegen uns allen", sagte Steffen weise.

Yvonne hob ihr Glas: "Auf die Familie! Auf unpünktliche Brüder, kochende Brüder, singende Freundinnen, deko-geniale Schwägerinnen, und darauf, dass wir nächstes Jahr—"

"—das Gleiche machen!", beendeten alle den Satz.

**Ende**

*Und die Moral von der Geschicht: Familie ist laut, chaotisch, nervig und unpünktlich – und genau deswegen lieben wir sie!*`
    }
];

// Initialize calendar
function initCalendar() {
    const doorsGrid = document.getElementById('doorsGrid');
    const today = new Date().getDate();
    const currentMonth = new Date().getMonth();
    
    // Only show calendar in December
    const maxDay = (currentMonth === 11) ? Math.min(today, 24) : 24;
    
    // Get opened doors from localStorage
    const openedDoors = JSON.parse(localStorage.getItem('openedDoors') || '[]');
    
    for (let i = 1; i <= 24; i++) {
        const door = document.createElement('div');
        door.className = 'door';
        door.dataset.day = i;
        
        const isOpen = openedDoors.includes(i);
        const canOpen = i <= maxDay;
        
        if (isOpen) {
            door.classList.add('open');
        } else if (!canOpen) {
            door.classList.add('locked');
        }
        
        // Alternating red and green doors
        const isRed = i % 2 === 1;
        if (isRed) {
            door.classList.add('door-red');
        } else {
            door.classList.add('door-green');
        }
        
        const story = storyParts.find(s => s.day === i);
        const previewText = story ? story.content.substring(0, 100) + '...' : '';
        
        door.innerHTML = `
            <div class="door-front">
                <div class="door-number">${i}</div>
                <div class="door-icon">${getDoorIcon(i)}</div>
            </div>
            <div class="door-back">
                <div class="door-content">
                    ${isOpen ? `
                        <div class="door-preview">
                            <div class="door-preview-title">${story ? story.title : `Tag ${i}`}</div>
                            <div class="door-preview-text">${previewText}</div>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
        
        if (canOpen) {
            door.addEventListener('click', () => {
                if (isOpen) {
                    // If already open, show full content in modal
                    showStoryContent(i);
                } else {
                    // If closed, open it
                    openDoor(i);
                }
            });
        }
        
        doorsGrid.appendChild(door);
    }
}

function getDoorIcon(day) {
    const icons = ['🎄', '🎅', '❄️', '🎁', '🦌', '🕯️', '🌟', '🎄', '🎅', '❄️', '🎁', '🦌', '🕯️', '🌟', '🎄', '🎅', '❄️', '🎁', '🦌', '🕯️', '🌟', '🎄', '🎅', '🎄'];
    return icons[day - 1] || '🎄';
}

function openDoor(day) {
    const door = document.querySelector(`.door[data-day="${day}"]`);
    if (!door || door.classList.contains('open')) return;
    
    door.classList.add('opening');
    
    setTimeout(() => {
        door.classList.add('open');
        door.classList.remove('opening');
        
        // Save to localStorage
        const openedDoors = JSON.parse(localStorage.getItem('openedDoors') || '[]');
        if (!openedDoors.includes(day)) {
            openedDoors.push(day);
            localStorage.setItem('openedDoors', JSON.stringify(openedDoors));
        }
        
        // Show story content
        showStoryContent(day);
    }, 600);
}

function showStoryContent(day) {
    const story = storyParts.find(s => s.day === day);
    if (!story) return;
    
    const modal = document.getElementById('modalOverlay');
    const modalTitle = document.getElementById('modalTitle');
    const modalDay = document.getElementById('modalDay');
    const modalBody = document.getElementById('modalBody');
    
    modalTitle.textContent = story.title;
    modalDay.textContent = `Tag ${day}`;
    
    // Build content with optional image
    let contentHTML = '';
    if (story.image) {
        contentHTML += `<div class="story-image-container"><img src="${story.image}" alt="${story.title}" class="story-image" onerror="this.style.display='none'"></div>`;
    }
    contentHTML += story.content.split('\n\n').map(p => `<p>${p}</p>`).join('');
    
    modalBody.innerHTML = contentHTML;
    
    modal.classList.add('active');
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('modalOverlay');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Smooth scroll to story section - make it global
window.scrollToStory = function() {
    const storySection = document.getElementById('geschichte');
    if (!storySection) {
        console.error('Story section not found');
        return false;
    }
    
    const header = document.querySelector('.header');
    const headerHeight = header ? header.offsetHeight : 80;
    
    // Get the position of the element
    const rect = storySection.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const targetPosition = rect.top + scrollTop - headerHeight;

    // Scroll to the position
    window.scrollTo({
        top: Math.max(0, targetPosition),
        behavior: 'smooth'
    });
    
    return true;
};

// Also keep the function name for backwards compatibility
function scrollToStory() {
    return window.scrollToStory();
}

// Add scroll effect to header
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 30px rgba(255, 23, 68, 0.4)';
    } else {
        header.style.boxShadow = '0 4px 30px rgba(255, 23, 68, 0.3)';
    }
    
    lastScroll = currentScroll;
});

// Create global snowflakes
function createGlobalSnowflakes() {
    const container = document.getElementById('globalSnowflakes');
    if (!container) {
        console.error('Global snowflakes container not found');
        return;
    }
    
    // Clear any existing snowflakes
    container.innerHTML = '';
    
    const snowflakeCount = 20; // Weniger Schneeflocken
    const snowflakeIcons = ['❄', '❅', '❆', '❄', '❅'];
    const viewportHeight = window.innerHeight || 1000;
    
    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'global-snowflake';
        snowflake.textContent = snowflakeIcons[i % snowflakeIcons.length];
        
        // Random position and properties
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = 8 + Math.random() * 12; // 8-20 seconds
        const size = 1 + Math.random() * 1.5; // 1-2.5rem
        const horizontalDrift = -30 + Math.random() * 60; // -30px to 30px
        
        // Set base styles
        snowflake.style.left = `${left}%`;
        snowflake.style.fontSize = `${size}rem`;
        snowflake.style.opacity = (0.6 + Math.random() * 0.4).toString();
        
        // Create unique animation for each snowflake using top property
        const animationName = `snowfall-${i}`;
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ${animationName} {
                0% {
                    top: -50px;
                    left: ${left}%;
                    transform: translateX(0px) rotate(0deg);
                    opacity: 0;
                }
                5% {
                    opacity: 0.8;
                }
                90% {
                    opacity: 0.8;
                }
                100% {
                    top: ${viewportHeight + 50}px;
                    left: ${left}%;
                    transform: translateX(${horizontalDrift}px) rotate(360deg);
                    opacity: 0;
                }
            }
            .global-snowflake[data-index="${i}"] {
                animation: ${animationName} ${duration}s linear infinite, sparkle 3s ease-in-out infinite !important;
                animation-delay: ${delay}s !important;
            }
        `;
        document.head.appendChild(style);
        
        snowflake.setAttribute('data-index', i);
        container.appendChild(snowflake);
    }
    
    console.log(`Created ${snowflakeCount} global snowflakes with animations`);
}

// Handle navigation links
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    const headerHeight = document.querySelector('.header')?.offsetHeight || 80;
                    const elementPosition = targetSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Prevent automatic scroll on page load
function handleInitialScroll() {
    // Always start at top, ignore hash on initial load
    window.scrollTo(0, 0);
}

// Modal close handlers
document.addEventListener('DOMContentLoaded', () => {
    // Force page to top on load
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    initCalendar();
    createGlobalSnowflakes();
    setupNavigation();
    
    // Initialize quiz system - wait a bit for quiz.js to load
    setTimeout(() => {
        if (typeof initQuiz === 'function') {
            initQuiz();
        } else {
            // If quiz.js hasn't loaded yet, try again
            setTimeout(() => {
                if (typeof initQuiz === 'function') {
                    initQuiz();
                }
            }, 500);
        }
    }, 100);
    
    // Ensure we stay at top
    setTimeout(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }, 10);
    
    // Enable smooth scrolling after page is fully loaded
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 500);
    
    // Add event listener to scroll button as fallback
    const scrollBtn = document.querySelector('.scroll-btn');
    if (scrollBtn) {
        scrollBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollToStory();
        });
    }
    
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = document.getElementById('modalOverlay');
    
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });
    }
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
});

// Also prevent scroll on window load
window.addEventListener('load', () => {
    if (!window.location.hash) {
        window.scrollTo(0, 0);
    }
});

// Add touch-friendly interactions for mobile
if ('ontouchstart' in window) {
    document.body.classList.add('touch-device');
}
