function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  switch (random) {
    case 0:
      return "rock";
    case 1:
      return "scissor";
    case 2:
      return "paper";
  }
}

function getHumanChoice() {
  let choice;
  do {
    choice = prompt("Choose: rock, paper, or scissor").toLowerCase();
  } while (!["rock", "paper", "scissor"].includes(choice));
  return choice;
}

let winScorePlayer = 0;
let winScoreComputer = 0;

function playRound() {
  let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();
  console.log(`Player: ${humanChoice} vs Computer: ${computerChoice}`);

  if (humanChoice === computerChoice) {
    console.log("Draw!");
  } else if (
    (humanChoice == "rock" && computerChoice == "scissor") ||
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "scissor" && computerChoice == "paper")
  ) {
    console.log("Player is the winner!");
    winScorePlayer++;
  } else {
    console.log("Computer is the winner!");
    winScoreComputer++;
  }
}

function startMatch() {
  for (let i = 0; i < 5; i++) {
    playRound();
    console.log(`Score: Player - ${winScorePlayer}, Computer - ${winScoreComputer}`);
  }

  if (winScorePlayer > winScoreComputer) {
    console.log("Final Winner: Player!");
  } else if (winScoreComputer > winScorePlayer) {
    console.log("Final Winner: Computer!");
  } else {
    console.log("It's a Draw!");
  }
}

startMatch();
