const STORAGE_KEY = "english-cards";
const DEFAULT_SEED_KEY = "english-cards-b1-defaults-added";
const BRAIN_KEY = "deans-brain-card-ids";
const MAX_STAGE = 3;
const DONE_STAGE = MAX_STAGE + 1;

const DEFAULT_B1_CARDS = [
  {
    english: "achieve",
    german: "erreichen",
    englishExample: "She worked hard to achieve her goal.",
    germanExample: "Sie arbeitete hart, um ihr Ziel zu erreichen."
  },
  {
    english: "avoid",
    german: "vermeiden",
    englishExample: "Try to avoid making the same mistake again.",
    germanExample: "Versuche, denselben Fehler noch einmal zu vermeiden."
  },
  {
    english: "behaviour",
    german: "Verhalten",
    englishExample: "His behaviour changed after the meeting.",
    germanExample: "Sein Verhalten änderte sich nach dem Treffen."
  },
  {
    english: "benefit",
    german: "Vorteil",
    englishExample: "One benefit of learning English is easier travel.",
    germanExample: "Ein Vorteil des Englischlernens ist leichteres Reisen."
  },
  {
    english: "challenge",
    german: "Herausforderung",
    englishExample: "Speaking in public is a challenge for many people.",
    germanExample: "Vor Publikum zu sprechen ist für viele Menschen eine Herausforderung."
  },
  {
    english: "compare",
    german: "vergleichen",
    englishExample: "We compared the prices before buying the tickets.",
    germanExample: "Wir verglichen die Preise, bevor wir die Tickets kauften."
  },
  {
    english: "confident",
    german: "selbstbewusst",
    englishExample: "She felt confident before the interview.",
    germanExample: "Sie fühlte sich vor dem Vorstellungsgespräch selbstbewusst."
  },
  {
    english: "consider",
    german: "in Betracht ziehen",
    englishExample: "You should consider taking a short break.",
    germanExample: "Du solltest in Betracht ziehen, eine kurze Pause zu machen."
  },
  {
    english: "create",
    german: "erschaffen",
    englishExample: "They want to create a better learning app.",
    germanExample: "Sie möchten eine bessere Lern-App erschaffen."
  },
  {
    english: "decision",
    german: "Entscheidung",
    englishExample: "It was a difficult decision for the whole team.",
    germanExample: "Es war eine schwierige Entscheidung für das ganze Team."
  },
  {
    english: "describe",
    german: "beschreiben",
    englishExample: "Can you describe the picture in English?",
    germanExample: "Kannst du das Bild auf Englisch beschreiben?"
  },
  {
    english: "develop",
    german: "entwickeln",
    englishExample: "He wants to develop better speaking skills.",
    germanExample: "Er möchte bessere Sprechfähigkeiten entwickeln."
  },
  {
    english: "effort",
    german: "Anstrengung",
    englishExample: "Learning a language takes time and effort.",
    germanExample: "Eine Sprache zu lernen braucht Zeit und Anstrengung."
  },
  {
    english: "environment",
    german: "Umgebung",
    englishExample: "A quiet environment helps me study.",
    germanExample: "Eine ruhige Umgebung hilft mir beim Lernen."
  },
  {
    english: "experience",
    german: "Erfahrung",
    englishExample: "Travelling alone was a useful experience.",
    germanExample: "Allein zu reisen war eine nützliche Erfahrung."
  },
  {
    english: "explain",
    german: "erklären",
    englishExample: "Could you explain the rule again?",
    germanExample: "Könntest du die Regel noch einmal erklären?"
  },
  {
    english: "focus",
    german: "sich konzentrieren",
    englishExample: "I need to focus on one task at a time.",
    germanExample: "Ich muss mich jeweils auf eine Aufgabe konzentrieren."
  },
  {
    english: "improve",
    german: "verbessern",
    englishExample: "Daily practice can improve your pronunciation.",
    germanExample: "Tägliches Üben kann deine Aussprache verbessern."
  },
  {
    english: "include",
    german: "einschließen",
    englishExample: "The price includes breakfast.",
    germanExample: "Der Preis schließt das Frühstück ein."
  },
  {
    english: "increase",
    german: "erhöhen",
    englishExample: "Regular reading can increase your vocabulary.",
    germanExample: "Regelmäßiges Lesen kann deinen Wortschatz erhöhen."
  },
  {
    english: "instead",
    german: "stattdessen",
    englishExample: "I stayed home instead of going out.",
    germanExample: "Ich blieb stattdessen zu Hause, anstatt auszugehen."
  },
  {
    english: "knowledge",
    german: "Wissen",
    englishExample: "She has a lot of knowledge about history.",
    germanExample: "Sie hat viel Wissen über Geschichte."
  },
  {
    english: "manage",
    german: "bewältigen",
    englishExample: "He managed to finish the project on time.",
    germanExample: "Er schaffte es, das Projekt rechtzeitig zu bewältigen."
  },
  {
    english: "mention",
    german: "erwähnen",
    englishExample: "She forgot to mention the meeting.",
    germanExample: "Sie vergaß, das Treffen zu erwähnen."
  },
  {
    english: "necessary",
    german: "notwendig",
    englishExample: "It is necessary to bring your passport.",
    germanExample: "Es ist notwendig, deinen Reisepass mitzubringen."
  },
  {
    english: "opportunity",
    german: "Gelegenheit",
    englishExample: "This course is a good opportunity to practise.",
    germanExample: "Dieser Kurs ist eine gute Gelegenheit zum Üben."
  },
  {
    english: "ordinary",
    german: "gewöhnlich",
    englishExample: "It was just an ordinary Monday morning.",
    germanExample: "Es war nur ein gewöhnlicher Montagmorgen."
  },
  {
    english: "participate",
    german: "teilnehmen",
    englishExample: "Everyone can participate in the discussion.",
    germanExample: "Alle können an der Diskussion teilnehmen."
  },
  {
    english: "prefer",
    german: "bevorzugen",
    englishExample: "I prefer tea to coffee in the evening.",
    germanExample: "Ich bevorzuge abends Tee gegenüber Kaffee."
  },
  {
    english: "prepare",
    german: "vorbereiten",
    englishExample: "We need to prepare for the exam.",
    germanExample: "Wir müssen uns auf die Prüfung vorbereiten."
  },
  {
    english: "provide",
    german: "bereitstellen",
    englishExample: "The hotel provides towels for all guests.",
    germanExample: "Das Hotel stellt Handtücher für alle Gäste bereit."
  },
  {
    english: "purpose",
    german: "Zweck",
    englishExample: "What is the purpose of this exercise?",
    germanExample: "Was ist der Zweck dieser Übung?"
  },
  {
    english: "realise",
    german: "erkennen",
    englishExample: "I realised that I had forgotten my keys.",
    germanExample: "Ich erkannte, dass ich meine Schlüssel vergessen hatte."
  },
  {
    english: "reason",
    german: "Grund",
    englishExample: "There is a good reason for this change.",
    germanExample: "Es gibt einen guten Grund für diese Änderung."
  },
  {
    english: "reduce",
    german: "verringern",
    englishExample: "Walking more can reduce stress.",
    germanExample: "Mehr zu Fuß zu gehen kann Stress verringern."
  },
  {
    english: "relationship",
    german: "Beziehung",
    englishExample: "They have a close relationship with their neighbours.",
    germanExample: "Sie haben eine enge Beziehung zu ihren Nachbarn."
  },
  {
    english: "require",
    german: "erfordern",
    englishExample: "This job requires good communication skills.",
    germanExample: "Diese Arbeit erfordert gute Kommunikationsfähigkeiten."
  },
  {
    english: "research",
    german: "Forschung",
    englishExample: "The research shows interesting results.",
    germanExample: "Die Forschung zeigt interessante Ergebnisse."
  },
  {
    english: "responsible",
    german: "verantwortlich",
    englishExample: "She is responsible for planning the event.",
    germanExample: "Sie ist für die Planung der Veranstaltung verantwortlich."
  },
  {
    english: "result",
    german: "Ergebnis",
    englishExample: "The result was better than expected.",
    germanExample: "Das Ergebnis war besser als erwartet."
  },
  {
    english: "serious",
    german: "ernst",
    englishExample: "This is a serious problem for the company.",
    germanExample: "Das ist ein ernstes Problem für das Unternehmen."
  },
  {
    english: "similar",
    german: "ähnlich",
    englishExample: "Our ideas are quite similar.",
    germanExample: "Unsere Ideen sind ziemlich ähnlich."
  },
  {
    english: "solution",
    german: "Lösung",
    englishExample: "We need to find a simple solution.",
    germanExample: "Wir müssen eine einfache Lösung finden."
  },
  {
    english: "support",
    german: "unterstützen",
    englishExample: "My friends support me when I study.",
    germanExample: "Meine Freunde unterstützen mich beim Lernen."
  },
  {
    english: "suggest",
    german: "vorschlagen",
    englishExample: "I suggest meeting at eight o'clock.",
    germanExample: "Ich schlage vor, uns um acht Uhr zu treffen."
  },
  {
    english: "suitable",
    german: "geeignet",
    englishExample: "This book is suitable for B1 learners.",
    germanExample: "Dieses Buch ist für Lernende auf B1-Niveau geeignet."
  },
  {
    english: "successful",
    german: "erfolgreich",
    englishExample: "The presentation was very successful.",
    germanExample: "Die Präsentation war sehr erfolgreich."
  },
  {
    english: "therefore",
    german: "deshalb",
    englishExample: "It was raining; therefore, we stayed inside.",
    germanExample: "Es regnete; deshalb blieben wir drinnen."
  },
  {
    english: "various",
    german: "verschiedene",
    englishExample: "There are various ways to learn new words.",
    germanExample: "Es gibt verschiedene Möglichkeiten, neue Wörter zu lernen."
  },
  {
    english: "wonder",
    german: "sich fragen",
    englishExample: "I wonder why the train is late.",
    germanExample: "Ich frage mich, warum der Zug Verspätung hat."
  }
];

function createId() {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function readStoredCards(key) {
  try {
    const value = localStorage.getItem(key);
    if (!value) return [];

    const cards = JSON.parse(value);
    return Array.isArray(cards) ? cards : [];
  } catch {
    return [];
  }
}

function normalizeCard(card = {}) {
  const stage = Number(card.stage || 1);

  return {
    id: card.id || createId(),
    english: card.english || card.q || "",
    german: card.german || card.a || "",
    englishExample: card.englishExample || card.example || "",
    germanExample: card.germanExample || "",
    stage: Number.isFinite(stage) ? Math.max(1, Math.min(DONE_STAGE, stage)) : 1,
    createdAt: card.createdAt || new Date().toISOString(),
    updatedAt: card.updatedAt || new Date().toISOString()
  };
}

function mergeDefaultCards(cards) {
  if (localStorage.getItem(DEFAULT_SEED_KEY)) {
    return cards;
  }

  const existingKeys = new Set(cards.map(card => card.english.toLowerCase()));
  const missingCards = DEFAULT_B1_CARDS
    .filter(card => !existingKeys.has(card.english.toLowerCase()))
    .map(card => normalizeCard({ ...card, stage: 1 }));

  localStorage.setItem(DEFAULT_SEED_KEY, "true");
  return [...cards, ...missingCards];
}

function loadCards() {
  const modernCards = readStoredCards(STORAGE_KEY);
  const oldCards = readStoredCards("cards");
  const source = modernCards.length ? modernCards : oldCards;
  const cards = source
    .filter(card => card && typeof card === "object")
    .map(normalizeCard)
    .filter(card => card.english && card.german);

  const mergedCards = mergeDefaultCards(cards);

  if (mergedCards.length !== cards.length || (!modernCards.length && oldCards.length)) {
    saveCards(mergedCards);
  }

  return mergedCards;
}

function saveCards(cards) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cards.map(normalizeCard)));
}

function getBrainIds() {
  try {
    const ids = JSON.parse(localStorage.getItem(BRAIN_KEY) || "[]");
    return Array.isArray(ids) ? ids : [];
  } catch {
    return [];
  }
}

function saveBrainIds(ids) {
  localStorage.setItem(BRAIN_KEY, JSON.stringify([...new Set(ids)]));
}

function getBrainCards() {
  const brainIds = new Set(getBrainIds());
  return loadCards().filter(card => brainIds.has(card.id));
}

function getBrainStats() {
  const cards = getBrainCards();
  return {
    total: cards.length,
    open: cards.filter(card => card.stage <= MAX_STAGE).length,
    known: cards.filter(card => card.stage > MAX_STAGE).length
  };
}

function addRandomCardsToBrain(count = 3) {
  const cards = loadCards();
  const brainIds = getBrainIds();
  const brainIdSet = new Set(brainIds);
  const availableCards = cards.filter(card => !brainIdSet.has(card.id));
  const shuffledCards = [...availableCards].sort(() => Math.random() - 0.5);
  const selectedCards = shuffledCards.slice(0, count);

  saveBrainIds([...brainIds, ...selectedCards.map(card => card.id)]);

  return {
    added: selectedCards.length,
    total: getBrainCards().length
  };
}

function addCard(english, german, englishExample = "", germanExample = "") {
  try {
    const cards = loadCards();
    const cleanEnglish = english.trim();
    const cleanGerman = german.trim();
    const cleanEnglishExample = englishExample.trim();
    const cleanGermanExample = germanExample.trim();
    const exists = cards.some(card =>
      card.english.toLowerCase() === cleanEnglish.toLowerCase() &&
      card.german.toLowerCase() === cleanGerman.toLowerCase()
    );

    if (exists) {
      return { ok: false, message: "Diese Vokabel gibt es schon." };
    }

    cards.push(normalizeCard({
      english: cleanEnglish,
      german: cleanGerman,
      englishExample: cleanEnglishExample,
      germanExample: cleanGermanExample,
      stage: 1
    }));

    saveCards(cards);
    return { ok: true, message: "Gespeichert." };
  } catch {
    return { ok: false, message: "Speichern ist gerade blockiert. Bitte lade die Seite neu." };
  }
}

function updateCard(updatedCard) {
  const cards = loadCards();
  const index = cards.findIndex(card => card.id === updatedCard.id);

  if (index !== -1) {
    cards[index] = {
      ...normalizeCard(updatedCard),
      updatedAt: new Date().toISOString()
    };
    saveCards(cards);
  }
}

function deleteCard(id) {
  saveCards(loadCards().filter(card => card.id !== id));
}

function resetCard(id) {
  const card = loadCards().find(item => item.id === id);
  if (!card) return;
  updateCard({ ...card, stage: 1 });
}

function resetAllCards() {
  saveCards(loadCards().map(card => ({ ...card, stage: 1 })));
}

function getCards() {
  return loadCards();
}

function pickNextFromActiveCards(activeCards, excludeId) {
  if (activeCards.length === 0) return null;

  const cardsToUse = activeCards.length > 1
    ? activeCards.filter(card => card.id !== excludeId)
    : activeCards;

  cardsToUse.sort((a, b) => a.stage - b.stage);
  const easiestActiveStage = cardsToUse[0].stage;
  const dueCards = cardsToUse.filter(card => card.stage === easiestActiveStage);

  return dueCards[Math.floor(Math.random() * dueCards.length)];
}

function getNextCard(excludeId = null) {
  const active = loadCards().filter(card => card.stage <= MAX_STAGE);
  return pickNextFromActiveCards(active, excludeId);
}

function getNextBrainCard(excludeId = null) {
  const active = getBrainCards().filter(card => card.stage <= MAX_STAGE);
  return pickNextFromActiveCards(active, excludeId);
}

function getStats() {
  const cards = loadCards();
  return {
    total: cards.length,
    open: cards.filter(card => card.stage <= MAX_STAGE).length,
    known: cards.filter(card => card.stage > MAX_STAGE).length
  };
}
