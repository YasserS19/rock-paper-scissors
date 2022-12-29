const selections = ["rock", "paper", "scissors"];
let play_again = "y";
let playerScore = 0;
let cpuScore = 0;
while (play_again !== "n") {
  const rounds = parseInt(prompt("How many rounds would you like to play?"));
  const playerSelection = prompt(
    "Choose your hand: Rock, Paper or Scissors."
  ).toLowerCase();
  const cpuSelection = getComputerChoice();

  if (!selections.includes(playerSelection)) {
    console.log("Invalid move, moves are: Rock, Paper or Scissors.");
    continue;
  }
  console.log(`Player choose: ${playerSelection}`);
  console.log(`CPU choose: ${cpuSelection}`);
  playRound(playerSelection.toLowerCase(), cpuSelection, rounds);

  if (playerScore > cpuScore) {
    console.log("Player wins the game!");
  } else if (playerScore < cpuScore) {
    console.log("CPU wins the game!");
  } else {
    console.log("The game is a draw!");
  }
  play_again = prompt("Play again ? [y/n]:").toLowerCase();
}

function getComputerChoice() {
  return selections[Math.floor(Math.random() * 3)];
}
function playRound(playerSelection, cpuSelection, rounds) {
  for (let _ = 0; _ < rounds; _++) {
    if (playerSelection === cpuSelection) {
      console.log("This round a draw!");
    }
    if (playerSelection == "paper" && cpuSelection == "rock") {
      console.log("Player wins this round!");
      playerScore += 1;
    } else if (playerSelection == "rock" && cpuSelection == "paper") {
      console.log("CPU wins this round!");
      cpuScore += 1;
    }

    if (playerSelection == "rock" && cpuSelection == "scissors") {
      console.log("Player wins this round!");
      playerScore += 1;
    } else if (playerSelection == "scissors" && cpuSelection == "rock") {
      console.log("CPU wins this round!");
      cpuScore += 1;
    }

    if (playerSelection == "scissors" && cpuSelection == "paper") {
      console.log("Player wins this round!");
      playerScore += 1;
    } else if (playerSelection == "paper" && cpuSelection == "scissors") {
      console.log("CPU wins this round!");
      cpuScore += 1;
    }
  }
}
