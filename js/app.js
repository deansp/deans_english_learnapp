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
  brainStatus.textContent = `${currentBrainStats.total} in Deans Brain`;
}

addBrainCards.addEventListener("click", () => {
  const result = addRandomCardsToBrain(3);
  updateBrainStatus();

  if (result.added === 0) {
    brainStatus.textContent = "Alle Vokabeln sind schon drin.";
  } else {
    brainStatus.textContent = `+${result.added} hinzugefügt, ${result.total} in Deans Brain`;
  }
});

if (brainStats.total === 0) {
  brainStatus.textContent = "Noch leer";
} else {
  updateBrainStatus();
}
