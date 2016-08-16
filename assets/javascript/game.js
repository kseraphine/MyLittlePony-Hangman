
var start; //May not be needed
var wins;
var losses = 1;
var maxGuesses = 6
var wrongLetter = [];
//var counter = 0; //Not sure if needed anymore
var words = ["mane", "tail", "cute", "little", "short", "carrots", "neigh", "adorable", "brony"];
var currentWord = words[Math.floor(Math.random() * words.length)];
console.log(currentWord, currentWord.length);

var letterLineElement = document.getElementById("wordLine");
var lettersGuessedElement = document.getElementById("guessedLine");
var remainingLineElement = document.getElementById("remainingLine");
var lossLineElement = document.getElementById("lossLine");

for (var i = 0; i < currentWord.length; i++) {
    var newDiv = document.createElement("div");
    newDiv.classList.add("letterstyle");
    letterLineElement.appendChild(newDiv);
};

document.onkeypress = function(event){
  var currentGuess = event.key;
  console.log(currentGuess);
  // TODO: fail if not alphabetical character

  var index=currentWord.indexOf(currentGuess);
  if (index == -1) {
    lettersGuessedElement.innerHTML += currentGuess.toUpperCase();
    if (wrongLetter.indexOf(currentGuess) > -1) {
      alert("You've already guessed that letter.  Guess again.");
    }else {
      wrongLetter.push(currentGuess);
      remainingLineElement.innerHTML = (maxGuesses - wrongLetter.length);
    };
    if (maxGuesses == wrongLetter.length) {
      alert("You lost!");
      lossLineElement.innerHTML = (losses++);
      //TODO: restart the game
    };
  } else {
    letterLineElement.childNodes[index].innerHTML = (currentGuess.toUpperCase());
  }

      //TODO: Show wins after word is spelled
};
