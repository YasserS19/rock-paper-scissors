const selections = ["rock", "paper", "scissors"];
const emojis = {
  rock: "👊",
  paper: "✋",
  scissors: "✌️",
};
let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
const computerHand = document.querySelector(".computer-hand");
const playerScoreboard = document.querySelector(".player-score");
const computerScoreboard = document.querySelector(".computer-score");
const facts = document.querySelector(".facts");
const ComputerChoice = document.querySelector("div.computer-choice p");

let playerSelection;
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    switch (button.className) {
      case "rock":
        playerSelection = "rock";
        break;
      case "paper":
        playerSelection = "paper";
        break;
      case "scissors":
        playerSelection = "scissors";
        break;
      default:
        console.error("idk tf happened xd");
    }

    let computerSelection = getComputerChoice();
    computerHand.textContent = emojis[computerSelection];
    ComputerChoice.textContent = `Computer plays ${computerSelection.toUpperCase()}.`;

    playRound(playerSelection, computerSelection);
    if (playerScore == 3 || computerScore == 3) {
      endGame();
    }
  });
});

function getComputerChoice() {
  return selections[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    facts.textContent = "This round a draw!";
  }
  if (playerSelection == "paper" && computerSelection == "rock") {
    facts.textContent = "Player plays PAPER and wins this round!";
    playerScore += 1;
    playerScoreboard.textContent = playerScore;
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    facts.textContent = "Player plays ROCK and loses this round!";
    computerScore += 1;
    computerScoreboard.textContent = computerScore;
  }

  if (playerSelection == "rock" && computerSelection == "scissors") {
    facts.textContent = "Player plays ROCK and wins this round!";
    playerScore += 1;
    playerScoreboard.textContent = playerScore;
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    facts.textContent = "Player plays SCISSORS and loses this round!";
    computerScore += 1;
    computerScoreboard.textContent = computerScore;
  }

  if (playerSelection == "scissors" && computerSelection == "paper") {
    facts.textContent = "Player plays SCISSORS and wins this round!";
    playerScore += 1;
    playerScoreboard.textContent = playerScore;
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    facts.textContent = "Player plays PAPER and loses this round!";
    computerScore += 1;
    computerScoreboard.textContent = computerScore;
  }
}

function endGame() {
  let response;
  if (playerScore > computerScore) {
    response = confirm(`Player wins the game! Play again?`);
  } else {
    response = confirm(`Computer wins the game! Play again?`);
  }
  if (response) {
    facts.textContent = "Your turn, please choose a hand.";
    ComputerChoice.textContent = "Computer plays...";
    playerScore, (computerScore = 0);
    playerScoreboard.textContent, (computerScoreboard.textContent = 0);
  } else {
    alert("Thanks for playing!");
  }
}
