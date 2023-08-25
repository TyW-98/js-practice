const homeContainer = document.getElementById("home");
const awayContainer = document.getElementById("away");
const homeScore = document.getElementById("home-score");
const awayScore = document.getElementById("away-score");

const newGameBtn = document.getElementById("new-game-btn");

const teams = [
  {
    teamContainer: homeContainer,
    totalScore: 0,
    scoreEl: homeScore,
  },
  {
    teamContainer: awayContainer,
    totalScore: 0,
    scoreEl: awayScore,
  },
];

function updateScore(team, points) {
  team.totalScore += points;
  team.scoreEl.textContent = team.totalScore;
  checkLeader();
}

function addEvntListener(team) {
  const buttonList = ["add1-btn", "add2-btn", "add3-btn"];
  const buttons = buttonList.map((btn) => {
    return team.teamContainer.querySelector(`#${btn}`);
  });

  buttons.map((btn, index) => {
    btn.addEventListener("click", () => {
      updateScore(team, index + 1);
    });
  });
}

function checkLeader() {
  teams.map((team) => team.scoreEl.classList.remove("winning"));
  let highestScore = 0;
  let winningTeam = null;
  teams.forEach((team) => {
    if (team.totalScore > highestScore) {
      highestScore = team.totalScore;
      winningTeam = team;
    }
  });

  if (winningTeam) {
    winningTeam.scoreEl.classList.add("winning");
  }
}

teams.map((team) => addEvntListener(team));

newGameBtn.addEventListener("click", () => {
  teams.map((team) => {
    team.totalScore = 0;
    team.scoreEl.textContent = team.totalScore;
    team.scoreEl.classList.remove("winning");
  });
});
