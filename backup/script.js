// Your game will be played against the computer. You will write a function that randomly returns “rock”, “paper” or “scissors”.

function getComputerChoice() {
  let choice = ["rock", "paper", "scissors"];
  let random = Math.floor(Math.random() * (2 - 0 + 1) + 0);
  document.querySelector(
    "#computer-choice"
  ).src = `./images/${e.target.id}.svg`;
  return choice[random];
}

function getHumanChoice() {
  let choice;

  document.querySelector("#rock").addEventListener("click", (e) => {
    choice = "rock";
  });
  document.querySelector("#human-choice").src = `../images/${choice}.svg`;

  return choice;
}

document.querySelectorAll(".btn").forEach((item) => {
  item.addEventListener("click", (e) => {
    document.querySelector("#human-choice").src = `./images/${e.target.id}.svg`;
  });
});

// document.querySelector("#rock").addEventListener("click", (e) => {
//   console.log("It works");
// });

// document.querySelector("#paper").addEventListener("click", (e) => {
//   console.log("It works");
// });

// document.querySelector("#scissors").addEventListener("click", (e) => {
//   console.log("It works");
// });
// button.addEventListener("click", (e) => {
//   output.src = `../images/${getComputerChoice()}.svg`;
// });

//     Create a new function named getHumanChoice.
//     Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.
//         Hint: Use the prompt method to get the user’s input.
//     Test what your function returns by using console.log.

// Step 4: Declare the players score variables

// Your game will keep track of the players score. You will write variables to keep track of the players score.

//     Create two new variables named humanScore and computerScore in the global scope.
//     Initialize those variables with the value of 0.

// Step 5: Write the logic to play a single round

// Your game will be played round by round. You will write a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.

//     Create a new function named playRound.
//     Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
//     Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
//     Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
//     Increment the humanScore or computerScore variable based on the round winner.

// Example code:

// function playRound(humanChoice, computerChoice) {
//   // your code here!
// }

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);

// Step 6: Write the logic to play the entire game

// Your game will play 5 rounds. You will write a function named playGame that calls playRound to play 5 rounds, keeps track of the scores and declares a winner at the end.

//     Create a new function named playGame.
//     Move your playRound function and score variables so that they’re declared inside of the new playGame function
//     Play 5 rounds by calling playRound 5 times.
//         Hint: When you assign a function call to a variable, the return value of that function is assigned to the variable. Accessing the variable afterward will only provide the assigned value; it doesn’t recall the function. You need to recall the choice functions to get new choices for each round.
//         Re-work your previous functions or create more helper functions if necessary. Specifically, you may want to change the return values to something more useful.
//         If you already know about loops, you can use them. If not, don’t worry! Loops will be covered in the next lesson.
