/* ----- VARIABLES ----- */
let playerSelection; // Variable to store the player selection
let computerSelection; // Variable to store the computer selection
let possibleChoices = ["ROCK", "PAPER", "SCISSORS"]; // An array with all the choices the computer can have
let randomIndex = Math.floor(Math.random() * 3); // Generate a random number between 0 and 2
let result = "";
let playerScore = 0; // Initialising the player score
let computerScore = 0; // Initialising the computer score
const divResult = document.querySelector('#result');
const buttons = document.querySelectorAll('.button');
const rockButton = document.querySelector('#rock-button');
const paperButton = document.querySelector('#paper-button');
const scissorsButton = document.querySelector('#scissors-button');
const resetButton = document.querySelector('#reset-button');


/* ----- FUNCTIONS ----- */
function getComputerChoice() { // Function to get the computer selection
     computerSelection = possibleChoices[randomIndex];
     return computerSelection;
}

function changeRandomIndex() { // Function to reset the index used for the computerSelection without refreshing the window
    randomIndex = "";
    randomIndex = Math.floor(Math.random() * 3);
}

function playRound() { // Function who compares the player selection to the computer selection once and tells the winner
    getComputerChoice();
    let computer = computerSelection;
    let player = playerSelection;
    player = player.toUpperCase();
    if (player === computer) { // Cases for when the two parameters are equal
        result = `Player: ${player} | Computer: ${computer}
        It's a tie! Nobody wins!`;
    } else if (player === "ROCK" && computer === "SCISSORS" || player === "PAPER" && computer === "ROCK" || player === "SCISSORS" && computer === "PAPER") { // Cases when the player wins
        result = `Player: ${player} | Computer: ${computer}
        Player wins! ${player} beats ${computer}!`;
        playerScore++;
        playerScore = playerScore; // Setting the new value to playerScore
    } else { // Cases when the computer wins
        result = `Player: ${player} | Computer: ${computer}
        Computer wins! ${computer} beats ${player}!`;
        computerScore++;
        computerScore = computerScore; // Setting the new value to computerScore
    }
    return result;
}

function endGame(playerScore, computerScore) {
    if (playerScore >= 5 || computerScore >= 5) {
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        if (playerScore == 5) {
            divResult.textContent = `${result}
            Score : Player ${playerScore} | Computer ${computerScore}
            Player won!`;
        };
        if (computerScore == 5) {
            divResult.textContent = `${result}
            Score : Player ${playerScore} | Computer ${computerScore}
            Computer won!`;
        }
    }
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
        };
        changeRandomIndex();
        playRound();
        divResult.textContent = `${result}
        Score : Player ${playerScore} | Computer ${computerScore}`;
        endGame(playerScore, computerScore); // Calling this function here at every click disable the 3 buttons when one score reaches 5
    });
})

resetButton.addEventListener('click', () => {
    divResult.textContent = "";
    playerScore = 0;
    computerScore = 0;
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
})