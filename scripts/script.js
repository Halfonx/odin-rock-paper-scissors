let playerSelection; // Variable to store the player selection
let computerSelection; // Variable to store the computer selection
let possibleChoices = ["ROCK", "PAPER", "SCISSORS"]; // An array with all the choices the computer can have
let randomIndex = Math.floor(Math.random() * 3); // Generate a random number between 0 and 2
let result = "";
let playerScore = 0; // Initialising the player score
let computerScore = 0; // Initialising the computer score

function getComputerChoice() { // Function to get the computer selection
     computerSelection = possibleChoices[randomIndex];
     return computerSelection;
}

function changeRandomIndex() { // Function to reset the index used for the computerSelection without refreshing the window
    randomIndex = "";
    randomIndex = Math.floor(Math.random() * 3);
}

function askPlayerChoice() { // Function to ask the playerSelection and store the result in a variable used after
    playerSelection = prompt("Choose between ROCK, PAPER and SCISSORS");
}

function playRound() { // Function who compares the player selection to the computer selection once and tells the winner
    getComputerChoice();
    askPlayerChoice();
    let computer = computerSelection;
    let player = playerSelection;
    if (player === computer) { // Cases for when the two parameters are equal
        result = `Player: ${player} | Computer: ${computer} | It's a tie! Nobody wins!`;
    } else if (player === "ROCK" && computer === "SCISSORS" || player === "PAPER" && computer === "ROCK" || player === "SCISSORS" && computer === "PAPER") { // Cases when the player wins
        result = `Player: ${player} | Computer: ${computer} | Player wins! ${player} beats ${computer}!`;
        playerScore++;
        playerScore = playerScore; // Setting the new value to playerScore
    } else { // Cases when the computer wins
        result = `Player: ${player} | Computer: ${computer} | Computer wins! ${computer} beats ${player}!`;
        computerScore++;
        computerScore = computerScore; // Setting the new value to computerScore
    }
    return result;
}

function game() { // Function to play 5 rounds in a row and display the winner
    for (i = 0; i <= 4; i++) {
        changeRandomIndex(); // Reseting the computerSelection at each new round
        playRound();
        console.log(result);
        console.log(`Score: Player ${playerScore} | Computer ${computerScore}`);
    }
    let finalScore;
    if (playerScore === computerScore) {
        finalScore = `It's a tie game! Congratulations both!`;
    } else if (playerScore > computerScore) {
        finalScore = `Player wins the game!`;
    } else {
        finalScore = `Computer wins the game!`;
    }
    return finalScore;
}