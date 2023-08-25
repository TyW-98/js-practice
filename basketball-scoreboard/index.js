const homeContainer = document.getElementById("home");
const awayContainer = document.getElementById("away");
const homeScore = document.getElementById("home-score");
const awayScore = document.getElementById("away-score");

const homePlusOne = homeContainer.querySelector("#add1-btn");
const homePlusTwo = homeContainer.querySelector("#add2-btn");
const homePlusThree = homeContainer.querySelector("#add3-btn");

const awayPlusOne = awayContainer.querySelector("#add1-btn");
const awayPlusTwo = awayContainer.querySelector("#add2-btn");
const awayPlusThree = awayContainer.querySelector("#add3-btn");

const newGameBtn = document.getElementById("new-game-btn");

let homeScoreTotal = 0;
let awayScoreTotal = 0;

function checkLeader() {
  if (homeScoreTotal > awayScoreTotal) {
    homeScore.classList.add("winning");
    awayScore.classList.remove("winning");
  } else if (homeScoreTotal < awayScoreTotal) {
    awayScore.classList.add("winning");
    homeScore.classList.remove("winning");
  }
}

homePlusOne.addEventListener("click", () => {
  homeScoreTotal += 1;
  homeScore.textContent = homeScoreTotal;
  checkLeader();
});

homePlusTwo.addEventListener("click", () => {
  homeScoreTotal += 2;
  homeScore.textContent = homeScoreTotal;
  checkLeader();
});

homePlusThree.addEventListener("click", () => {
  homeScoreTotal += 3;
  homeScore.textContent = homeScoreTotal;
  checkLeader();
});

awayPlusOne.addEventListener("click", () => {
  awayScoreTotal += 1;
  awayScore.textContent = awayScoreTotal;
  checkLeader();
});

awayPlusTwo.addEventListener("click", () => {
  awayScoreTotal += 2;
  awayScore.textContent = awayScoreTotal;
  checkLeader();
});

awayPlusThree.addEventListener("click", () => {
  awayScoreTotal += 3;
  awayScore.textContent = awayScoreTotal;
  checkLeader();
});

newGameBtn.addEventListener("click", () => {
  homeScoreTotal = 0;
  awayScoreTotal = 0;
  homeScore.textContent = homeScoreTotal;
  awayScore.textContent = awayScoreTotal;
  homeScore.classList.remove("winning");
  awayScore.classList.remove("winning");
});
