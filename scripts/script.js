let playerSelection; // Variable to store the player selection
let computerSelection; // Variable to store the computer selection
let possibleChoices = ["ROCK", "PAPER", "SCISSORS"]; // An array with all the choices the computer can have
let randomIndex = Math.floor(Math.random() * 3); // Generate a random number between 0 and 2

function getComputerChoice() { // Function to get the computer selection
     computerSelection = possibleChoices[randomIndex];
}

function playRound(player, computer) { // Function who compares the player selection to the computer selection once and tells the winner
    if (player !== "ROCK" && player !== "PAPER" && player !== "SCISSORS") { // Display an error message if the user don't enter a correct value
        return "Please enter a correct value. Reload the page";
    } else {
        if (computer !== undefined && computer !== "ROCK" && computer !== "PAPER" && computer !== "SCISSORS") { // Display an error message if the computer value is not correct
            return "The computer value is not valid. Please enter a correct value or leave it empty. Reload the page";
        } else {
            player = player.toUpperCase();
            if (computer === undefined) { // If the computer selection is undefined, it calls the computer choice function and assign the value to the parameter
                getComputerChoice();
                computer = computerSelection;
            } else { // Do this if the computer value is defined
                
            }
        }
    }
}