let playerSelection; // Variable to store the player selection
let computerSelection; // Variable to store the computer selection
let possibleChoices = ["ROCK", "PAPER", "SCISSORS"]; // An array with all the choices the computer can have
let randomIndex = Math.floor(Math.random() * 3); // Generate a random number between 0 and 2

function getComputerChoice() { // Function to get the computer selection
     computerSelection = possibleChoices[randomIndex];
     return computerSelection;
}

function playRound(player, computer) { // Function who compares the player selection to the computer selection once and tells the winner
    let result = "";
    if (player === computer) {
        return "It's a tie! Nobody wins!";
    } else if (player === "ROCK") {
        switch (computer) {
            case "PAPER":
                result = "Computer wins! Paper beats rock!";
                break;
            case "SCISSORS":
                result = "Player wins! Rock beats scissors!";
                break;
        }
    } else if (player === "PAPER") {
        switch (computer) {
            case "ROCK":
                result = "Player wins! Paper beats rock!";
                break;
            case "SCISSORS":
                result = "Computer wins! Scissors beats paper!";
                break;
        }
    } else if (player === "SCISSORS") {
        switch (computer) {
            case "ROCK":
                result = "Computer wins! Rock beats scissors";
                break;
            case "PAPER":
                result = "Player wins! Scissors beats paper!";
                break;
        }
    } else {
        result = "If you are here, you entered a incorrect value. Please try again.";
    }
    return result;
}

console.log(getComputerChoice());
console.log(playRound("ROCK"));
console.log(playRound("ROCK", "ROCK"));
console.log(playRound("ROCK", "PAPER"));
console.log(playRound("ROCK", "SCISSORS"));
console.log(playRound("PAPER", "ROCK"));
console.log(playRound("PAPER", "SCISSORS"));
console.log(playRound("SCISSORS", "ROCK"));
console.log(playRound("SCISSORS", "PAPER"));