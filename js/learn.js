let currentCard = null;
let pointerStartX = 0;
let pointerStartY = 0;
let pointerCurrentX = 0;
let pointerStartTime = 0;
let isDragging = false;
let isAnimating = false;
let sessionQueue = [];
let sessionStartedWithCards = false;
let completionShown = false;

const SWIPE_DISTANCE = 58;
const SWIPE_VELOCITY = 0.38;
const HINT_DISTANCE = 20;
const TAP_DISTANCE = 12;
const MIN_CARD_TEXT_SIZE = 20;
const deckMode = new URLSearchParams(window.location.search).get("deck");
const isBrainMode = deckMode === "brain";
const isLearnedMode = deckMode === "learned";
const isSessionMode = isBrainMode || isLearnedMode;

const flipCard = document.getElementById("flipCard");
const word = document.getElementById("word");
const answer = document.getElementById("answer");
const frontExample = document.getElementById("frontExample");
const backExample = document.getElementById("backExample");
const languageToggle = document.getElementById("languageToggle");
const stageLabel = document.getElementById("stageLabel");
const counterLabel = document.getElementById("counterLabel");
const swipeHint = document.getElementById("swipeHint");
const completionModal = document.getElementById("completionModal");
const infoButton = document.getElementById("infoButton");
const infoPanel = document.getElementById("infoPanel");
const closeInfo = document.getElementById("closeInfo");
const practiceExamples = document.getElementById("practiceExamples");

function setControlsEnabled(enabled) {
  flipCard.disabled = !enabled;

  if (infoButton) {
    infoButton.disabled = !enabled;
  }
}

function setHint(text) {
  if (swipeHint) {
    swipeHint.textContent = text;
  }
}

function getFrontLanguage() {
  return languageToggle && !languageToggle.checked ? "de" : "en";
}

function setExample(element, text) {
  if (!element) return;
  element.textContent = text || "";
  element.hidden = !text;
}

function fitCardText(element) {
  if (!element) return;

  element.style.fontSize = "";
  let fontSize = parseFloat(window.getComputedStyle(element).fontSize);
  if (!Number.isFinite(fontSize) || element.clientWidth === 0) return;

  while (element.scrollWidth > element.clientWidth && fontSize > MIN_CARD_TEXT_SIZE) {
    fontSize -= 1;
    element.style.fontSize = `${fontSize}px`;
  }
}

function fitVisibleCardText() {
  window.requestAnimationFrame(() => {
    fitCardText(word);
    fitCardText(answer);
  });
}

function closeInfoPanel() {
  if (!infoPanel || !infoButton) return;
  infoPanel.hidden = true;
  infoButton.setAttribute("aria-expanded", "false");
}

function renderPracticeExamples(card) {
  if (!practiceExamples) return;

  practiceExamples.innerHTML = "";

  const examples = card && Array.isArray(card.practiceExamples)
    ? card.practiceExamples
    : [];
  const sentences = examples.length ? examples : ["Für diese Vokabel gibt es noch keine extra Beispielsätze."];

  sentences.forEach(sentence => {
    const item = document.createElement("p");
    item.textContent = sentence;
    practiceExamples.appendChild(item);
  });
}

function toggleInfoPanel() {
  if (!currentCard || !infoPanel || !infoButton) return;

  const shouldOpen = infoPanel.hidden;
  if (shouldOpen) {
    renderPracticeExamples(currentCard);
  }

  infoPanel.hidden = !shouldOpen;
  infoButton.setAttribute("aria-expanded", String(shouldOpen));
}

function loadFrontLanguage() {
  const savedLanguage = localStorage.getItem("english-cards-front-language");

  if (languageToggle) {
    languageToggle.checked = savedLanguage !== "de";
  }
}

function saveFrontLanguage() {
  localStorage.setItem("english-cards-front-language", getFrontLanguage());
}

function resetCardPosition() {
  flipCard.style.transform = "";
  flipCard.classList.remove(
    "is-flipped",
    "swipe-left",
    "swipe-right",
    "is-empty",
    "is-dragging",
    "is-pulling-left",
    "is-pulling-right",
    "is-returning"
  );
}

function setStageTheme(stage) {
  document.body.classList.remove("stage-one", "stage-two", "stage-three", "stage-done");

  if (stage === 1) {
    document.body.classList.add("stage-one");
  } else if (stage === 2) {
    document.body.classList.add("stage-two");
  } else if (stage >= 3) {
    document.body.classList.add("stage-three");
  } else {
    document.body.classList.add("stage-done");
  }
}

function startBrainSession() {
  if (isBrainMode) {
    sessionQueue = getBrainCards().map(card => card.id);
  }

  if (isLearnedMode) {
    sessionQueue = getLearnedCards().map(card => card.id);
  }

  sessionStartedWithCards = sessionQueue.length > 0;
}

function getSessionCard() {
  if (!sessionQueue.length) return null;

  const sessionCards = isLearnedMode ? getLearnedCards() : getBrainCards();
  const cardsById = new Map(sessionCards.map(card => [card.id, card]));
  sessionQueue = sessionQueue.filter(id => cardsById.has(id));

  return sessionQueue.length ? cardsById.get(sessionQueue[0]) : null;
}

function showCompletion() {
  if (completionShown || !completionModal) return;
  completionShown = true;
  completionModal.hidden = false;
}

function loadCard(excludeId = null) {
  const stats = isLearnedMode ? getLearnedStats() : (isBrainMode ? getBrainStats() : getStats());
  currentCard = isSessionMode ? getSessionCard() : getNextCard(excludeId);
  if (counterLabel) {
    counterLabel.textContent = `${stats.open} offen`;
  }
  resetCardPosition();
  closeInfoPanel();

  if (!currentCard) {
    setStageTheme(0);
    word.textContent = stats.total === 0
      ? (isLearnedMode ? "Noch keine gelernten Vokabeln" : (isBrainMode ? "Deans Brain ist leer" : "Noch keine Vokabeln"))
      : "Alles gelernt";
    answer.textContent = stats.total === 0
      ? (isLearnedMode ? "Lerne erst ein paar Wörter fertig." : (isBrainMode ? "Füge auf der Startseite drei Vokabeln hinzu." : "Füge zuerst eine Vokabel hinzu."))
      : "Setze Karten im Wörterbuch zurück, wenn du weiter üben möchtest.";
    setExample(frontExample, "");
    setExample(backExample, "");
    if (stageLabel) {
      stageLabel.textContent = "Bereit";
    }
    setHint("Keine aktive Karte");
    flipCard.classList.add("is-flipped", "is-empty");
    setControlsEnabled(false);
    if (isSessionMode && sessionStartedWithCards) {
      showCompletion();
    }
    return;
  }

  setStageTheme(currentCard.stage);
  const startsWithEnglish = getFrontLanguage() === "en";

  word.textContent = startsWithEnglish ? currentCard.english : currentCard.german;
  answer.textContent = startsWithEnglish ? currentCard.german : currentCard.english;
  setExample(frontExample, startsWithEnglish ? currentCard.englishExample : currentCard.germanExample);
  setExample(backExample, startsWithEnglish ? currentCard.germanExample : currentCard.englishExample);
  renderPracticeExamples(currentCard);
  fitVisibleCardText();
  if (stageLabel) {
    stageLabel.textContent = `Stufe ${currentCard.stage} von ${MAX_STAGE}`;
  }
  setHint("Tippen zum Umdrehen");
  setControlsEnabled(true);
}

function flipCurrentCard() {
  if (!currentCard || isAnimating) return;
  flipCard.classList.toggle("is-flipped");
  setHint(flipCard.classList.contains("is-flipped")
    ? "Links falsch, rechts richtig"
    : "Tippen zum Umdrehen");
}

function answerCard(wasCorrect) {
  if (!currentCard || isAnimating) return;

  const answeredCardId = currentCard.id;
  isAnimating = true;
  flipCard.style.transform = "";
  flipCard.classList.add(wasCorrect ? "swipe-right" : "swipe-left");
  setHint(wasCorrect ? "Richtig" : "Falsch");

  window.setTimeout(() => {
    try {
      updateCard({
        ...currentCard,
        stage: isLearnedMode && wasCorrect ? DONE_STAGE : (wasCorrect ? Math.min(DONE_STAGE, currentCard.stage + 1) : 1)
      });
      if (isSessionMode) {
        const [firstCardId, ...remainingIds] = sessionQueue;
        sessionQueue = isLearnedMode || wasCorrect ? remainingIds : [...remainingIds, firstCardId];
      }
    } finally {
      isAnimating = false;
      loadCard(isSessionMode ? null : answeredCardId);
    }
  }, 260);
}

flipCard.addEventListener("pointerdown", event => {
  if (!currentCard || isAnimating) return;
  pointerStartX = event.clientX;
  pointerStartY = event.clientY;
  pointerCurrentX = event.clientX;
  pointerStartTime = Date.now();
  isDragging = true;
  flipCard.classList.add("is-dragging");
  flipCard.classList.remove("is-returning");

  if (flipCard.setPointerCapture) {
    flipCard.setPointerCapture(event.pointerId);
  }
});

if (infoButton) {
  infoButton.addEventListener("click", event => {
    event.stopPropagation();
    toggleInfoPanel();
  });
}

if (closeInfo) {
  closeInfo.addEventListener("click", event => {
    event.stopPropagation();
    closeInfoPanel();
    infoButton?.focus();
  });
}

if (infoPanel) {
  infoPanel.addEventListener("click", event => {
    event.stopPropagation();
  });
}

flipCard.addEventListener("pointermove", event => {
  if (!isDragging || !currentCard || isAnimating) return;

  pointerCurrentX = event.clientX;
  const deltaX = pointerCurrentX - pointerStartX;
  const deltaY = event.clientY - pointerStartY;
  const pullX = deltaX * 1.08;
  const rotation = Math.max(-13, Math.min(13, deltaX / 15));

  if (Math.abs(deltaX) > Math.abs(deltaY)) {
    event.preventDefault();
  }

  flipCard.style.transform = `translateX(${pullX}px) rotate(${rotation}deg)`;
  flipCard.classList.toggle("is-pulling-right", deltaX > HINT_DISTANCE);
  flipCard.classList.toggle("is-pulling-left", deltaX < -HINT_DISTANCE);
  setHint(deltaX > HINT_DISTANCE
    ? "Loslassen: richtig"
    : deltaX < -HINT_DISTANCE
      ? "Loslassen: falsch"
      : "Tippen oder wischen");
});

flipCard.addEventListener("pointerup", event => {
  if (!isDragging || !currentCard || isAnimating) return;

  const deltaX = event.clientX - pointerStartX;
  const deltaY = event.clientY - pointerStartY;
  const elapsed = Math.max(1, Date.now() - pointerStartTime);
  const velocity = Math.abs(deltaX) / elapsed;
  const isHorizontal = Math.abs(deltaX) > Math.abs(deltaY) * 1.15;

  isDragging = false;
  flipCard.classList.remove("is-dragging", "is-pulling-left", "is-pulling-right");
  if (flipCard.releasePointerCapture) {
    flipCard.releasePointerCapture(event.pointerId);
  }

  if (isHorizontal && (Math.abs(deltaX) > SWIPE_DISTANCE || velocity > SWIPE_VELOCITY)) {
    answerCard(deltaX > 0);
    return;
  }

  flipCard.classList.add("is-returning");
  flipCard.style.transform = "";

  if (Math.abs(deltaX) < TAP_DISTANCE && Math.abs(deltaY) < TAP_DISTANCE) {
    flipCurrentCard();
  } else {
    setHint(flipCard.classList.contains("is-flipped")
      ? "Links falsch, rechts richtig"
      : "Tippen zum Umdrehen");
  }

  window.setTimeout(() => {
    flipCard.classList.remove("is-returning");
  }, 180);
});

flipCard.addEventListener("pointercancel", () => {
  isDragging = false;
  flipCard.classList.add("is-returning");
  flipCard.style.transform = "";
  flipCard.classList.remove("is-dragging", "is-pulling-left", "is-pulling-right");
  window.setTimeout(() => {
    flipCard.classList.remove("is-returning");
  }, 180);
});

if (languageToggle) {
  loadFrontLanguage();
  languageToggle.addEventListener("change", () => {
    saveFrontLanguage();

    if (currentCard) {
      loadCard();
    }
  });
}

startBrainSession();
loadCard();
