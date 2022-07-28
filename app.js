let play_again = "y";
let selections = ["rock", "paper", "scissors"];
let playerScore = 0;
let cpuScore = 0;
while (play_again !== "n") {
  let rounds = parseInt(prompt("How many rounds would you like to play?"));
  for (let i = 0; i < rounds; i++) {
    let playerSelection = prompt("Choose your hand: Rock, Paper or Scissors.");
    const cpuSelection = selections[Math.floor(Math.random() * 3)];
    alert(`Player choose: ${playerSelection}`);

    if (!selections.includes(playerSelection)) {
      alert("Invalid move, moves are: Rock, Paper or Scissors.");
      playerSelection = prompt(
        "Choose your hand again: Rock, Paper or Scissors."
      );
    } else {
      alert(`CPU choose: ${cpuSelection}`);
    }

    if (playerSelection == cpuSelection) {
      alert("This round a draw!");
    }

    if (playerSelection == "paper" && cpuSelection == "rock") {
      alert("Player wins this round!");
      playerScore += 1;
    } else if (playerSelection == "rock" && cpuSelection == "paper") {
      alert("CPU wins this round!");
      cpuScore += 1;
    }

    if (playerSelection == "rock" && cpuSelection == "scissors") {
      alert("Player wins this round!");
      playerScore += 1;
    } else if (playerSelection == "scissors" && cpuSelection == "rock") {
      alert("CPU wins this round!");
      cpuScore += 1;
    }

    if (playerSelection == "scissors" && cpuSelection == "paper") {
      alert("Player wins this round!");
      playerScore += 1;
    } else if (playerSelection == "paper" && cpuSelection == "scissors") {
      alert("CPU wins this round!");
      cpuScore += 1;
    }
  }
  if (playerScore > cpuScore) {
    alert("Player wins the game!");
  } else if (playerScore < cpuScore) {
    alert("CPU wins the game!");
  } else {
    alert("The game is a draw!");
  }
  play_again = prompt("Play again ? [y/n]:");
}
