const alphabet = "abcdefghijklmnopqrstuvwxyz";

const algorithm = (objective) => {
  const messageLetters = document.getElementById("message").value.split("");

  const alphabetLetters = alphabet.split("");

  const resultCrypted = messageLetters.map((letter) => {
    if (letter === " ") return " ";
    if (/^\d+$/.test(letter)) return letter;

    let index;

    if (objective === "encrypt") {
      index = alphabetLetters.indexOf(letter.toLowerCase()) + 3;

      while (index > 25) {
        index = index - 26;
      }

      return alphabetLetters[index];
    }

    index = alphabetLetters.indexOf(letter.toLowerCase()) - 3;

    while (index < 0) {
      index = index + 26;
    }

    return alphabetLetters[index];
  });

  const textResult = document.getElementById("result");

  textResult.innerText = resultCrypted.join("");
};

document
  .getElementById("encrypt")
  .addEventListener("click", () => algorithm("encrypt"));
document
  .getElementById("decrypt")
  .addEventListener("click", () => algorithm("decrypt"));
