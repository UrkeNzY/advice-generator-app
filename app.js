const adviceIdElement = document.getElementById("advice-id");
const adviceTextElement = document.getElementById("advice-text");

const diceButtonElement = document.getElementById("dice-button");

diceButtonElement.addEventListener("click", getAdvice);

window.onload = getAdvice();

function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      return response.json();
    })
    .then((adviceData) => {
      const adviceObj = adviceData.slip;
      adviceIdElement.textContent = "ADVICE #" + adviceObj.id;
      adviceTextElement.textContent = '"' + adviceObj.advice + '"';
    })
    .catch((error) => {
      console.log(error);
    });
}
