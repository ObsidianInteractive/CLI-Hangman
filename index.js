
var inquirer = require("inquirer");

var Word = require('./Word.js');

// Initialize word list
var avengerList = [
"Black Panther",
"Hulk",
"Thor",
"Falcon",
"Captain America",
"Black Widow",
"Vision",
"Iron Man"
];

// Select a hero from list
var guessAnAvenger = avengerList[Math.floor(Math.random() * avengerList.length)].toUpperCase();
var currentHero = new Word(guessAnAvenger);
var guessesRemaining = 9;

// Initializes new game, resets values
var newGame = function() {
	guessAnAvenger = avengerList[Math.floor(Math.random() * avengerList.length)].toUpperCase();
  	currentHero = new Word(guessAnAvenger);
	guessesRemaining = 9;
}

// Guess prompt
var promptUser = function() {
	
	inquirer.prompt([
	  {
	    name: "userGuess",
	    message: "Which Avenger is it? "
	  }
	]).then(function(response) {
	  if(currentHero.guess(response.userGuess.toUpperCase()) > 0) {
	  	console.log("YESS!!!");
	  	console.log(currentHero.getWord());
	  } else {
	  	console.log("NAW BRUH!!!");
	  	guessesRemaining--;
	  	console.log(guessesRemaining + " guesses remaining!");
	  }
	  // Checks if all letters guessed
	  if(currentHero.isGuessed()) {
	  	console.log("You're a hero! Guess another.\n");
	  	newGame();
	  }

	  // Checks if user lost
	  if(guessesRemaining === 0) {
	  	console.log("Wrong! The Earth is destroyed!.\n");
	  	newGame();
	  }

	  promptUser();
	});
}

// Restarts game
promptUser();