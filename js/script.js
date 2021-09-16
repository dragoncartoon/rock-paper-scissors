/*
TODO: 
x Random Robot choose. 
- Human choose by click button (later). 
-  Click Rock button, show 'rock'. Then run playRound()
x Compare Human choose vs Robot. Rules Rock < Paper < Scissors < Rock.
x   If Robot or Human win, +1 score with some display text about winner.
x When score reach 5, display the winner.
- Reset game button and function

Game step break
1. User choose Rock OR Paper OR scissors by click button.
2. Compare user choose and system choose.
3. If user win, user score +1 & win text. If system win, +1 score + win text. If tie, show tie.
4. Whoever score reach 5. Game stop, display winner.
5. User can click Reset button to reset. 

*/

const gameButton = document.querySelectorAll(".game-button");
const rockBtn = document.getElementsByClassName("rock");
const paperBtn = document.getElementsByClassName("paper");
const scissorsBtn = document.getElementsByClassName("scissors");

let humanScore = 0;
let robotScore = 0;
// let roundWinner = '';

// UI
const playerScore = document.getElementById("playerScore");
const machineScore = document.getElementById("robotScore");
const robotChoose = document.getElementById("robotChoose");
const round = document.getElementById("round");
const playAgainBtn = document.querySelector(".play-again");

function robotPlay() {
  const items = ["rock", "paper", "scissors"];
  const robotSelection = items[Math.floor(Math.random() * items.length)];
  return robotSelection;
}

rockBtn[0].addEventListener("click", () => handleClick("rock"));
paperBtn[0].addEventListener("click", () => handleClick("paper"));
scissorsBtn[0].addEventListener("click", () => handleClick("scissors"));

// Need some way to repeat playRound()

function playRound(humanSelection, robotSelection) {
  console.log(humanSelection, robotSelection);

  if (humanSelection === robotSelection) {
    round.innerText = "So close";
  } else if (
    (humanSelection === "rock" && robotSelection === "paper") ||
    (humanSelection === "paper" && robotSelection === "scissors") ||
    (humanSelection === "scissors" && robotSelection === "rock")
  ) {
    // roundWinner = 'robot';
    robotScore++;
    round.innerText = "Argh, one more";
  } else if (
    (robotSelection === "rock" && humanSelection === "paper") ||
    (robotSelection === "paper" && humanSelection === "scissors") ||
    (robotSelection === "scissors" && humanSelection === "rock")
  ) {
    // roundWinner = 'human';
    humanScore++;
    round.innerText = "You win this round";
  }
}

function disableGameButton() {
  gameButton.forEach((btn) => {
    btn.disabled = true;
  });
}

function handleClick(humanSelect) {
  // console.log(`${humanSelect}, ${humanScore} `)
  robotSelection = robotPlay();
  humanSelection = humanSelect;
  playRound(humanSelection, robotSelection);
  checkScore();
}

// TODO: Function check score here
function winnerAnnouncement(winner) {
  if ((winner = "human")) {
    round.innerText = "You saved the world";
    resetGame();
  } else {
    round.innerText = "It's the end";
    resetGame();
  }
}

function checkScore() {
  if (humanScore === 5) {
    winnerAnnouncement("human");
    disableGameButton();
    playAgainBtn.style.visibility = "visible";
    
  } else if (robotScore === 5) {
    winnerAnnouncement("robot");
    disableGameButton();
    playAgainBtn.style.visibility = "visible";
  } else {
    updateUI();
  }
}

function updateUI() {
  playerScore.textContent = `The last hope: ${humanScore}`;
  machineScore.textContent = `The Robot: ${robotScore}`;
  robotChoose.textContent = `Robot choose: ${robotSelection}`;
}

function resetGame() {
  
  playAgainBtn.addEventListener("click", () => {
    window.location.reload();
  });

}
