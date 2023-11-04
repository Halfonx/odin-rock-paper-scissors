let possibleChoices;
possibleChoices = ["ROCK", "PAPER", "SCISSORS"]; // Value possible for the game, stored in an array
let computerChoice;
computerChoice = Math.floor(Math.random() * 3); // Assign a random value between 0 and 2 to the variable
console.log(possibleChoices[computerChoice]);