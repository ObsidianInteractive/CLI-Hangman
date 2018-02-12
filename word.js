var Letter = require("./letter.js");

// Constructor
function Word(word) {

	this.letters = [word.length]; 

	for(var i = 0; i < word.length; i++) {
		this.letters[i] = new Letter(word.charAt(i));
	}
}

Word.prototype.getWord = function() {
	var toReturn = "";
	for(var i = 0; i < this.letters.length; i++) {
		toReturn += this.letters[i].getLetter() + " ";
	}
	return toReturn.trim();
}

Word.prototype.guess = function(character) {
	var guessed = 0;
	for(var i = 0; i < this.letters.length; i++) {
		if(this.letters[i].isLetter(character)) {
			guessed++;
		}
	}
	return guessed;
}

Word.prototype.isGuessed = function() {
	for(var i = 0; i < this.letters.length; i++) {
		if(!this.letters[i].getGuessed()) {
			return false;
		}
	}
	return true;
}

module.exports = Word;