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

const PRACTICE_EXAMPLES = {
  achieve: [
    "I can achieve my plan today.",
    "She wants to achieve a good result.",
    "We can achieve more together.",
    "He worked hard to achieve success.",
    "You will achieve your goal soon."
  ],
  avoid: [
    "I avoid loud places when I study.",
    "Please avoid this small mistake.",
    "She tries to avoid stress.",
    "We should avoid the busy road.",
    "He avoids sugar in the evening."
  ],
  behaviour: [
    "His behaviour was very kind.",
    "Good behaviour helps the whole class.",
    "Her behaviour changed today.",
    "This behaviour is not helpful.",
    "I noticed his calm behaviour."
  ],
  benefit: [
    "This app has one clear benefit.",
    "Fresh air is a real benefit.",
    "The main benefit is more practice.",
    "I see the benefit now.",
    "Sleep has a big benefit for learning."
  ],
  challenge: [
    "This exercise is a small challenge.",
    "Speaking English is a good challenge.",
    "I like a new challenge.",
    "The test was a fair challenge.",
    "We can solve this challenge."
  ],
  compare: [
    "I compare two answers.",
    "She compares the prices.",
    "We compare our ideas.",
    "Please compare these sentences.",
    "He compares the two pictures."
  ],
  confident: [
    "I feel confident today.",
    "She sounds confident in English.",
    "Be confident and speak slowly.",
    "He became more confident.",
    "A short practice makes me confident."
  ],
  consider: [
    "Please consider this idea.",
    "I consider taking a break.",
    "We should consider another plan.",
    "She will consider the offer.",
    "Consider your answer carefully."
  ],
  create: [
    "I create a new sentence.",
    "She creates a simple plan.",
    "We create a nice app.",
    "He wants to create music.",
    "You can create your own example."
  ],
  decision: [
    "This is a good decision.",
    "I made a quick decision.",
    "Her decision was brave.",
    "We need one decision today.",
    "The decision feels right."
  ],
  describe: [
    "Please describe your room.",
    "I can describe the picture.",
    "She describes her weekend.",
    "He describes the problem clearly.",
    "Describe it in three words."
  ],
  develop: [
    "I develop better habits.",
    "She develops her English skills.",
    "We develop a simple idea.",
    "He wants to develop confidence.",
    "Practice helps you develop fluency."
  ],
  effort: [
    "Learning needs effort.",
    "Your effort is important.",
    "She made a big effort.",
    "Small effort every day helps.",
    "I can see your effort."
  ],
  environment: [
    "I need a quiet environment.",
    "This environment feels calm.",
    "A good environment helps me learn.",
    "The classroom is a friendly environment.",
    "Music changes the environment."
  ],
  experience: [
    "It was a nice experience.",
    "I learned from this experience.",
    "She has travel experience.",
    "This experience helped me grow.",
    "Tell me about your experience."
  ],
  explain: [
    "Can you explain this word?",
    "I explain my answer slowly.",
    "She explains the rule.",
    "He can explain it again.",
    "Please explain your idea."
  ],
  focus: [
    "I focus on one word.",
    "She needs time to focus.",
    "We focus on speaking today.",
    "He cannot focus with noise.",
    "Focus on the easy part first."
  ],
  improve: [
    "I improve with daily practice.",
    "She wants to improve her English.",
    "This exercise can improve memory.",
    "We improve step by step.",
    "Reading helps me improve."
  ],
  include: [
    "Please include your name.",
    "The price can include breakfast.",
    "I include one example.",
    "This list should include everyone.",
    "We include five sentences."
  ],
  increase: [
    "I want to increase my vocabulary.",
    "Prices increase every year.",
    "Reading can increase confidence.",
    "We increase the number slowly.",
    "Practice can increase speed."
  ],
  instead: [
    "I drink tea instead.",
    "She walks instead of driving.",
    "We stayed home instead.",
    "Use this word instead.",
    "He smiled instead of speaking."
  ],
  knowledge: [
    "Knowledge grows with practice.",
    "She has good knowledge of English.",
    "This book gives useful knowledge.",
    "I want more knowledge.",
    "His knowledge helped the team."
  ],
  manage: [
    "I can manage this task.",
    "She manages her time well.",
    "We manage the problem together.",
    "He managed to stay calm.",
    "Can you manage three words today?"
  ],
  mention: [
    "Please mention your idea.",
    "She did not mention the time.",
    "I mention this word often.",
    "He forgot to mention the plan.",
    "Mention one example, please."
  ],
  necessary: [
    "Water is necessary.",
    "It is necessary to practise.",
    "A ticket is necessary here.",
    "Sleep is necessary for learning.",
    "This step is not necessary."
  ],
  opportunity: [
    "This is a good opportunity.",
    "I have an opportunity to speak.",
    "She used the opportunity well.",
    "Every lesson is an opportunity.",
    "Take the opportunity today."
  ],
  ordinary: [
    "It was an ordinary day.",
    "This is an ordinary bag.",
    "He had an ordinary breakfast.",
    "The room looks ordinary.",
    "Nothing special, just ordinary."
  ],
  participate: [
    "I participate in the lesson.",
    "She wants to participate more.",
    "Everyone can participate.",
    "He participates in the game.",
    "Please participate if you can."
  ],
  prefer: [
    "I prefer tea.",
    "She prefers quiet music.",
    "We prefer simple examples.",
    "He prefers learning in the morning.",
    "Do you prefer coffee or tea?"
  ],
  prepare: [
    "I prepare for the test.",
    "She prepares dinner.",
    "We prepare our questions.",
    "He prepares a short speech.",
    "Prepare your bag tonight."
  ],
  provide: [
    "The app provides examples.",
    "They provide free water.",
    "Can you provide an answer?",
    "This hotel provides towels.",
    "We provide help when needed."
  ],
  purpose: [
    "What is the purpose?",
    "The purpose is practice.",
    "This tool has one purpose.",
    "I understand the purpose now.",
    "The purpose of this is learning."
  ],
  realise: [
    "I realise my mistake.",
    "She realised the answer.",
    "We realise it is late.",
    "He realised the word was easy.",
    "You will realise it soon."
  ],
  reason: [
    "What is the reason?",
    "I know the reason.",
    "She gave a clear reason.",
    "There is no reason to worry.",
    "This is the main reason."
  ],
  reduce: [
    "Walking can reduce stress.",
    "I reduce my screen time.",
    "We reduce the noise.",
    "Sleep can reduce mistakes.",
    "This plan may reduce costs."
  ],
  relationship: [
    "They have a good relationship.",
    "Our relationship is friendly.",
    "This relationship is important.",
    "She has a close relationship with her sister.",
    "Trust helps a relationship."
  ],
  require: [
    "This job requires patience.",
    "The task requires time.",
    "Good writing requires practice.",
    "The form requires your name.",
    "Learning requires small steps."
  ],
  research: [
    "The research is interesting.",
    "I read new research.",
    "Her research takes time.",
    "Research can answer questions.",
    "This research is useful."
  ],
  responsible: [
    "I am responsible for my bag.",
    "She is responsible at work.",
    "He feels responsible for the team.",
    "Be responsible with your time.",
    "Who is responsible today?"
  ],
  result: [
    "The result is good.",
    "I like the result.",
    "Her result was better.",
    "We wait for the result.",
    "Practice gives a better result."
  ],
  serious: [
    "This is a serious question.",
    "He looks serious today.",
    "It was a serious problem.",
    "She gave a serious answer.",
    "Do not make a serious mistake."
  ],
  similar: [
    "These words are similar.",
    "Our ideas are similar.",
    "The two pictures look similar.",
    "This sentence is similar.",
    "My bag is similar to yours."
  ],
  solution: [
    "We need a solution.",
    "This solution is simple.",
    "She found the solution.",
    "A calm talk can be a solution.",
    "The solution helped everyone."
  ],
  support: [
    "I support my friend.",
    "She supports the team.",
    "We support each other.",
    "This chair gives good support.",
    "Your family can support you."
  ],
  suggest: [
    "I suggest a short break.",
    "She suggests a new plan.",
    "Can you suggest a word?",
    "He suggested meeting later.",
    "I suggest practising now."
  ],
  suitable: [
    "This book is suitable for me.",
    "The room is suitable for study.",
    "This example is suitable.",
    "Is this time suitable?",
    "The course is suitable for B1."
  ],
  successful: [
    "The meeting was successful.",
    "She is a successful student.",
    "Our plan was successful.",
    "He had a successful day.",
    "Small practice can be successful."
  ],
  therefore: [
    "It rained; therefore, we stayed home.",
    "I was tired; therefore, I slept.",
    "She studied; therefore, she improved.",
    "The shop was closed; therefore, we left.",
    "It is late; therefore, we hurry."
  ],
  various: [
    "There are various answers.",
    "I know various words.",
    "She tried various ideas.",
    "We used various examples.",
    "Various people joined the class."
  ],
  wonder: [
    "I wonder about the answer.",
    "She wonders why he is late.",
    "We wonder what happens next.",
    "He wonders about the weather.",
    "Do you ever wonder about words?"
  ]
};

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
  const practiceExamples = Array.isArray(card.practiceExamples)
    ? card.practiceExamples
    : PRACTICE_EXAMPLES[(card.english || card.q || "").toLowerCase()] || [];

  return {
    id: card.id || createId(),
    english: card.english || card.q || "",
    german: card.german || card.a || "",
    englishExample: card.englishExample || card.example || "",
    germanExample: card.germanExample || "",
    practiceExamples,
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

function removeFromBrain(id) {
  saveBrainIds(getBrainIds().filter(brainId => brainId !== id));
}

function getBrainCards() {
  const cards = loadCards();
  const cardsById = new Map(cards.map(card => [card.id, card]));
  const activeBrainIds = getBrainIds().filter(id => {
    const card = cardsById.get(id);
    return card && card.stage <= MAX_STAGE;
  });

  saveBrainIds(activeBrainIds);
  const brainIds = new Set(activeBrainIds);
  return cards.filter(card => brainIds.has(card.id));
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
  const availableCards = cards.filter(card => card.stage <= MAX_STAGE && !brainIdSet.has(card.id));
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
    const normalizedCard = {
      ...normalizeCard(updatedCard),
      updatedAt: new Date().toISOString()
    };
    cards[index] = normalizedCard;
    saveCards(cards);

    if (normalizedCard.stage > MAX_STAGE) {
      removeFromBrain(normalizedCard.id);
    }
  }
}

function deleteCard(id) {
  saveCards(loadCards().filter(card => card.id !== id));
  removeFromBrain(id);
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

function getLearnedCards() {
  return loadCards().filter(card => card.stage > MAX_STAGE);
}

function getLearnedStats() {
  const cards = getLearnedCards();
  return {
    total: cards.length,
    open: cards.length,
    known: cards.length
  };
}

function getStats() {
  const cards = loadCards();
  return {
    total: cards.length,
    open: cards.filter(card => card.stage <= MAX_STAGE).length,
    known: cards.filter(card => card.stage > MAX_STAGE).length
  };
}
