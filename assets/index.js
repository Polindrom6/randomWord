function generateRandomWord() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let randomWord = "";

  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    randomWord += alphabet[randomIndex];
  }
  return randomWord;
}

document.addEventListener("DOMContentLoaded", () => {
  const worldElement = document.createElement("p");
  worldElement.textContent = "Случайное слово: " + generateRandomWord();
  document.body.appendChild(worldElement);
});
