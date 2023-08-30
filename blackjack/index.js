function randomNumber() {
  return Math.floor(Math.random() * (7 - 2) + 2);
}

const firstCard = randomNumber();
const secondCard = randomNumber();
const cardsDrawn = [firstCard, secondCard];

let sum = firstCard + secondCard;
let gameStatus = "playing";
let message;

const startGameBtn = document.getElementById("start-game-btn");
const messageEl = document.getElementById("message-el");
const sumEl = document.getElementById("sum-el");
const cardEl = document.getElementById("card-el");

function renderGame() {
  if (sum <= 20) {
    message = "Do you want to draw a new sets of cards? 🙂";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳";
    gameStatus = "won";
  } else {
    message = "You're out of the game! 😭";
    gameStatus = "bust";
  }
  sumEl.textContent = `Sum: ${sum}`;
  cardEl.textContent = `Cards: ${cardsDrawn.map((card) => card).join(", ")}`;
  messageEl.textContent = message;
}

function newGame() {
  renderGame();
}

startGameBtn.addEventListener("click", newGame);

const newCardBtn = document.getElementById("new-card-btn");

function newCard() {
  const newCard = randomNumber();
  sum += newCard;
  cardsDrawn.push(newCard);
  renderGame();
}

newCardBtn.addEventListener("click", newCard);
