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

const divResult = document.querySelector('#result');
const buttons = document.querySelectorAll('.button');

function playRound() { // Function who compares the player selection to the computer selection once and tells the winner
    getComputerChoice();
    let computer = computerSelection;
    let player = playerSelection;
    player = player.toUpperCase();
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

buttons.forEach((button) => { // This part is needed when you want to use the same event listener to multiples elements
    button.addEventListener('click', function(event) {
        switch (event.target.value) {
            case 'rock' :
                playerSelection = 'ROCK';
                break;
            case 'paper' :
                playerSelection = 'PAPER';
                break;
            case 'scissors' :
                playerSelection = 'SCISSORS';
                break;
            default :
                break;    
        }
        changeRandomIndex();
        playRound();
        divResult.textContent = `${result} Score : Player ${playerScore} | Computer ${computerScore}`;
    });
})

/*
function game() { // Function to play 5 rounds in a row and display the winner
    for (i = 0; i <= 4; i++) {
        changeRandomIndex(); // Reseting the computerSelection at each new round
        playRound();
        if (playerSelection !== "ROCK" && playerSelection !== "PAPER" && playerSelection !== "SCISSORS") { // Catch incorrect values and stop the game
            return`You entered an incorrect value. Please reload the page`;
        } else {
            console.log(result); // Display the result of each round in the console
            console.log(`Score: Player ${playerScore} | Computer ${computerScore}`); // Display the score of both at each round
        } 
    }
    let finalScore; // New variable to store the final result
    if (playerScore === computerScore) { // When tie game
        finalScore = `It's a tie game! Congratulations both!`;
    } else if (playerScore > computerScore) { // When player wins
        finalScore = `Player wins the game!`;
    } else { // When computer wins
        finalScore = `Computer wins the game!`;
    }
    return finalScore;
}
*/