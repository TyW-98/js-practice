function randomNumber() {
  let newCardNumber = Math.floor(Math.random() * 13) + 1;
  if (newCardNumber === 1) {
    newCardNumber = 11;
  } else if (newCardNumber > 10) {
    newCardNumber = 10;
  }

  return newCardNumber;
}

const cardsDrawn = [];

let sum = 0;
let message;
let gameStatus;

const startGameBtn = document.getElementById("start-game-btn");
const messageEl = document.getElementById("message-el");
const sumEl = document.getElementById("sum-el");
const cardEl = document.getElementById("card-el");
const playerElement = document.getElementById("player-el");
const startingAmount = 500;

const playerDetails = {
  name: "Test User",
  chipsLeft: startingAmount,
};

playerElement.textContent = `${playerDetails.name} : $ ${playerDetails.chipsLeft}`;

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
  const firstCard = randomNumber();
  const secondCard = randomNumber();
  cardsDrawn.push(firstCard, secondCard);
  sum = firstCard + secondCard;
  gameStatus = "playing";
  renderGame();
}

startGameBtn.addEventListener("click", newGame);

const newCardBtn = document.getElementById("new-card-btn");

function newCard() {
  if (gameStatus == "playing" && sum < 21) {
    const newCard = randomNumber();
    sum += newCard;
    cardsDrawn.push(newCard);
    renderGame();
  }
}

newCardBtn.addEventListener("click", newCard);
