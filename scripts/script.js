let humanScore,
  computerScore = 0;

function getComputerChoice() {
  let outcomes = ["rock", "paper", "scissors"];

  // Generate random number between 0 - 2
  let randomNumber = Math.floor(Math.random() * 3);

  // return rock, paper or scissors
  return outcomes[randomNumber];
}

function getHumanChoice() {
  let choice = prompt("Rock, Paper, Scissors").toLowerCase();
  let result;

  if (choice === "rock") {
    result = "rock";
  } else if (choice === "paper") {
    result = "paper";
  } else if (choice === "scissors") {
    result = "scissors";
  } else {
    result = "Invalid";
  }

  return result;
}

function playRound(humanChoice, computerChoice) {
  let result;

  if (humanChoice == "rock" && computerChoice == "rock") {
    result = "It's a tie.";
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    result = "You lose! Paper beats Rock.";
    computerScore++;
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    result = "You win! Rock beats Scissors.";
    humanScore++;
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    result = "You win! Paper beats Rock.";
    humanScore++;
  } else if (humanChoice == "paper" && computerChoice == "paper") {
    result = "It's a tie.";
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    result = "You lose! Scissors beats Paper.";
    computerScore++;
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    result = "You lose! Rock beats Scissors.";
    computerScore++;
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    result = "You win! Scissors beats Paper.";
    humanScore++;
  } else if (humanChoice == "scissors" && computerChoice == "scissors") {
    result = "It's a tie.";
  } else {
    result = "Unexpected error";
  }

  return result;
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(humanSelection, computerSelection));
  }

  if (humanScore > computerScore) {
    console.log("You Win the round");
  } else {
    console.log("You lose the round");
  }
}

playGame();
