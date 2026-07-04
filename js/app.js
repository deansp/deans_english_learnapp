const stats = getStats();
const brainStats = getBrainStats();
const totalCards = document.getElementById("totalCards");
const openCards = document.getElementById("openCards");
const knownCards = document.getElementById("knownCards");
const addBrainCards = document.getElementById("addBrainCards");
const brainStatus = document.getElementById("brainStatus");

totalCards.textContent = stats.total;
openCards.textContent = stats.open;
knownCards.textContent = stats.known;

function updateBrainStatus() {
  const currentBrainStats = getBrainStats();
  brainStatus.textContent = `Aktiv werden ${currentBrainStats.total} Vokabeln gelernt`;
}

addBrainCards.addEventListener("click", () => {
  const result = addRandomCardsToBrain(3);
  updateBrainStatus();

  if (result.added === 0) {
    brainStatus.textContent = "Alle Vokabeln sind schon drin.";
  } else {
    brainStatus.textContent = `Aktiv werden ${result.total} Vokabeln gelernt`;
  }
});

if (brainStats.total === 0) {
  brainStatus.textContent = "Aktiv werden 0 Vokabeln gelernt";
} else {
  updateBrainStatus();
}
