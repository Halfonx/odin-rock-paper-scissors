let playerSelection; // Variable to store the player selection
let computerSelection; // Variable to store the computer selection
let possibleChoices = ["ROCK", "PAPER", "SCISSORS"]; // An array with all the choices the computer can have
let randomIndex = Math.floor(Math.random() * 3); // Generate a random number between 0 and 2

function getComputerChoice() { // Function to get the computer selection
     computerSelection = possibleChoices[randomIndex];
     return computerSelection;
}

function playRound() { // Function who compares the player selection to the computer selection once and tells the winner
    let result = ""; // New variable to store the result
    getComputerChoice();
    let computer = computerSelection;
    playerSelection = prompt("Choose between ROCK, PAPER or SCISSORS");
    let player = playerSelection;
    if (player === computer) {
        return "It's a tie! Nobody wins!";
    } else if (player === "ROCK" && computer === "SCISSORS" || player === "PAPER" && computer === "ROCK" || player === "SCISSORS" && computer === "PAPER") {
        return `Player wins! ${player} beats ${computer}!`;
    }
    return result;
}