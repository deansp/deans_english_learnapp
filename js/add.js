const form = document.getElementById("addForm");
const englishInput = document.getElementById("eng");
const germanInput = document.getElementById("ger");
const englishExampleInput = document.getElementById("englishExample");
const germanExampleInput = document.getElementById("germanExample");
const message = document.getElementById("message");

form.addEventListener("submit", event => {
  event.preventDefault();

  const english = englishInput.value.trim();
  const german = germanInput.value.trim();
  const englishExample = englishExampleInput.value.trim();
  const germanExample = germanExampleInput.value.trim();

  if (!english || !german) {
    message.textContent = "Bitte beide Felder ausfüllen.";
    message.className = "message error";
    return;
  }

  const result = addCard(english, german, englishExample, germanExample);
  message.textContent = result.message;
  message.className = result.ok ? "message success-text" : "message error";

  if (result.ok) {
    form.reset();
    englishInput.focus();
  }
});
