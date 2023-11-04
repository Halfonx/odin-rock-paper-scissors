let possibleChoices;
possibleChoices = ["ROCK", "PAPER", "SCISSORS"]; // Value possible for the game, stored in an array
let computerChoice;
computerChoice = Math.floor(Math.random() * 3); // Assign a random value between 0 and 2 to the variable
function getComputerChoice() {
    return possibleChoices[computerChoice];
}
console.log(getComputerChoice()); // Display the computer's choice

let playerChoice;
playerChoice = prompt("Choose between ROCK, PAPER or SCISSORS"); // Ask to the player the enter a value
playerChoice =  playerChoice.toUpperCase(); // Set the player input to upper case
console.log(playerChoice); // Display the player's choice

function displayIncorrectValueMessage() { // Display a message to ask for a correct value
    return "You entered an incorrect value. Please reload the page and enter a correct value";
}

if (playerChoice !== "ROCK" && playerChoice !== "PAPER" && playerChoice !== "SCISSORS") { // Check if the player entered a correct value before continuing the game
    console.log(displayIncorrectValueMessage());
} else {
    console.log("Yeah");
}