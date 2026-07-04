const list = document.getElementById("list");
const search = document.getElementById("search");
const emptyState = document.getElementById("emptyState");
const resetAll = document.getElementById("resetAll");

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function render() {
  const query = search.value.trim().toLowerCase();
  const cards = getCards();
  const filteredCards = cards.filter(card => {
    const searchable = `${card.english} ${card.german} ${card.englishExample} ${card.germanExample}`.toLowerCase();
    return searchable.includes(query);
  });

  list.innerHTML = "";
  emptyState.hidden = cards.length !== 0;
  resetAll.disabled = cards.length === 0;

  if (cards.length !== 0 && filteredCards.length === 0) {
    list.innerHTML = '<p class="empty">Keine passende Vokabel gefunden.</p>';
    return;
  }

  filteredCards.forEach(card => {
    const element = document.createElement("article");
    element.className = "word-row";
    element.innerHTML = `
      <div>
        <strong>${escapeHtml(card.english)}</strong>
        <span>${escapeHtml(card.german)}</span>
        ${card.englishExample ? `<em>${escapeHtml(card.englishExample)}</em>` : ""}
        ${card.germanExample ? `<em>${escapeHtml(card.germanExample)}</em>` : ""}
        <small>${card.stage > MAX_STAGE ? "Gelernt" : `Stufe ${card.stage} von ${MAX_STAGE}`}</small>
      </div>
      <div class="row-actions">
        <button class="btn secondary compact" type="button" data-action="reset" data-id="${card.id}">Zurücksetzen</button>
        <button class="btn danger compact" type="button" data-action="delete" data-id="${card.id}">Löschen</button>
      </div>
    `;
    list.appendChild(element);
  });
}

search.addEventListener("input", render);

resetAll.addEventListener("click", () => {
  resetAllCards();
  render();
});

list.addEventListener("click", event => {
  const button = event.target.closest("button");
  if (!button) return;

  if (button.dataset.action === "reset") {
    resetCard(button.dataset.id);
  }

  if (button.dataset.action === "delete") {
    deleteCard(button.dataset.id);
  }

  render();
});

render();
