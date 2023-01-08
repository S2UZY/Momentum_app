const gameForm = document.querySelector("#game-form");
const maxNumber = gameForm.querySelector("#maxNumber");
const guessNumber = gameForm.querySelector("#guessNumber");
const resultDiv = document.querySelector("#result");

console.log(maxNumber.value);

function onPlaySubmit(evnet) {
    evnet.preventDefault();
  console.log(evnet);

}

gameForm.addEventListener("submit", onPlaySubmit);
