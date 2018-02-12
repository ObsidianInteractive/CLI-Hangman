// Constructor
function Letter(character) {
	this.letter = character;
	this.guessed = false;
	if(character === ' ') {
		this.guessed = true;
	}
}

Letter.prototype.isLetter = function(guess) {
	if(guess === this.letter) {
		this.guessed = true;
		return true;
	} else {
		return false;
	}
};

Letter.prototype.getLetter = function() {
	if(this.letter === ' ') {
		return ' ';
	} else if(this.guessed) {
		return this.letter;
	} else {
		return '_';
	}
}

Letter.prototype.getGuessed = function() {
	return this.guessed;
}

module.exports =  Letter;