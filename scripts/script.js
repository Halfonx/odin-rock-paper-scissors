let possibleChoices;
possibleChoices = ["ROCK", "PAPER", "SCISSORS"]; // Value possible for the game, stored in an array
let computerChoice;
computerChoice = Math.floor(Math.random() * 3); // Assign a random value between 0 and 2 to the variable
console.log(possibleChoices[computerChoice]); // Display the computer's choice

let playerChoice;
playerChoice = prompt("Choose between ROCK, PAPER or SCISSORS"); // Ask to the player the enter a value
playerChoice =  playerChoice.toUpperCase(); // Set the player input to upper case
console.log(playerChoice);