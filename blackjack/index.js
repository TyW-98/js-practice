function randomNumber() {
  return Math.floor(Math.random() * (7 - 2) + 2);
}

const firstCard = randomNumber();
const secondCard = randomNumber();

const sum = firstCard + secondCard;
let gameStatus = "playing";
let message;

const startGameBtn = document.getElementById("start-game-btn");

startGameBtn.addEventListener("click", () => {
  if (sum <= 20) {
    message = "Do you want to draw a new sets of cards? 🙂";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳";
    gameStatus = "won";
  } else {
    message = "You're out of the game! 😭";
    gameStatus = "bust";
  }

  console.log(message);
});
