let playerSelection; // Variable to store the player selection
let computerSelection; // Variable to store the computer selection
let possibleChoices = ["ROCK", "PAPER", "SCISSORS"]; // An array with all the choices the computer can have
let randomIndex = Math.floor(Math.random() * 3); // Generate a random number between 0 and 2
let result = "";

function getComputerChoice() { // Function to get the computer selection
     computerSelection = possibleChoices[randomIndex];
     return computerSelection;
}

function changeRandomIndex() {
    console.log(randomIndex);
    randomIndex = "";
    randomIndex = Math.floor(Math.random() * 3);
    console.log(randomIndex);
}

function playRound(player, computer) { // Function who compares the player selection to the computer selection once and tells the winner
    getComputerChoice();
    computer = computerSelection;
    if (player === computer) {
        result = "It's a tie! Nobody wins!";
    } else if (player === "ROCK" && computer === "SCISSORS" || player === "PAPER" && computer === "ROCK" || player === "SCISSORS" && computer === "PAPER") {
        result = `Player wins! ${player} beats ${computer}!`;
    } else {
        result = `Computer wins! ${computer} beats ${player}!`;
    }
    return result;
}