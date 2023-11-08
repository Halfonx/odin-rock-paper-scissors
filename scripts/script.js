let playerSelection; // Variable to store the player selection
let computerSelection; // Variable to store the computer selection
let possibleChoices = ["ROCK", "PAPER", "SCISSORS"]; // An array with all the choices the computer can have
let randomIndex = Math.floor(Math.random() * 3); // Generate a random number between 0 and 2
let result = "";
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() { // Function to get the computer selection
     computerSelection = possibleChoices[randomIndex];
     return computerSelection;
}

function changeRandomIndex() {
    randomIndex = "";
    randomIndex = Math.floor(Math.random() * 3);
}

function askPlayerChoice() {
    playerSelection = prompt("Choose between ROCK, PAPER and SCISSORS");
}

function playRound() { // Function who compares the player selection to the computer selection once and tells the winner
    getComputerChoice();
    askPlayerChoice();
    let computer = computerSelection;
    let player = playerSelection;
    if (player === computer) { // Cases for when the two parameters are equal
        result = "It's a tie! Nobody wins!";
        return result;
    } else if (player === "ROCK" && computer === "SCISSORS" || player === "PAPER" && computer === "ROCK" || player === "SCISSORS" && computer === "PAPER") { // Cases when the player wins
        result = `Player wins! ${player} beats ${computer}!`;
        playerScore++;
        playerScore = playerScore;
        return result;
    } else { // Cases when the computer wins
        result = `Computer wins! ${computer} beats ${player}!`;
        computerScore++;
        computerScore = computerScore;
        return result;
    }
}

function game() {
    for (i = 0; i <= 4; i++) {
        changeRandomIndex();
        playRound();
        console.log(result);
        console.log(`Score: Player ${playerScore} | Computer ${computerScore}`);
    }
}