let playerSelection; // Variable to store the player selection
let computerSelection; // Variable to store the computer selection
let possibleChoices = ["ROCK", "PAPER", "SCISSORS"]; // An array with all the choices the computer can have
let randomIndex = Math.floor(Math.random() * 3); // Generate a random number between 0 and 2

function getComputerChoice() { // Function to get the computer selection
     computerSelection = possibleChoices[randomIndex];
     return computerSelection;
}

function resetComputerChoice() {
    computerSelection = "";
}

function playRound() { // Function who compares the player selection to the computer selection once and tells the winner
    let result = ""; // New variable to store the result
    getComputerChoice();
    let computer = computerSelection;
    playerSelection = prompt("Choose between ROCK, PAPER or SCISSORS");
    let player = playerSelection;
    if (player === computer) {
        return "It's a tie! Nobody wins!";
    } else if (player === "ROCK") { // Treating all possibilities against rock
        switch (computer) {
            case "PAPER":
                result = "Computer wins! Paper beats rock!";
                break;
            case "SCISSORS":
                result = "Player wins! Rock beats scissors!";
                break;
        }
    } else if (player === "PAPER") { // Treating all possibilities against paper
        switch (computer) {
            case "ROCK":
                result = "Player wins! Paper beats rock!";
                break;
            case "SCISSORS":
                result = "Computer wins! Scissors beats paper!";
                break;
        }
    } else if (player === "SCISSORS") { // Treating all possibilities against scissors
        switch (computer) {
            case "ROCK":
                result = "Computer wins! Rock beats scissors";
                break;
            case "PAPER":
                result = "Player wins! Scissors beats paper!";
                break;
        }
    } else { // Display this in cause of an error
        result = "If you are here, you entered a incorrect value. Please try again.";
    }
    return result;
}