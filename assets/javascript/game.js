
var start;

var wins;
var losses;
var maxGuesses = 6
var wrongLetter = [];
var counter = 0;
var words = ["mane", "tail", "cute", "little", "short", "carrots", "neigh", "adorable", "brony"];
var currentWord = words[Math.floor(Math.random() * words.length)];
console.log(currentWord, currentWord.length);

var letterLineElement = document.getElementById("wordLine");
var lettersGuessedElement = document.getElementById("guessedLine");
var remainingLineElement = document.getElementById("remainingLine");
//console.log("1" + letterLine);
//};
console.log("Begin for loop for empty spaces")
for (var i = 0; i < currentWord.length; i++) {
    var newDiv = document.createElement("div");
    newDiv.classList.add("letterstyle");
    letterLineElement.appendChild(newDiv);
};

document.onkeypress = function(event){
  var currentGuess = event.key;
  // todo: fail if not alphabetical character

  var index=currentWord.indexOf(currentGuess);
  if (index == -1)
  {
    // letter not found in currentword
    console.log(letterLine.childNodes[index]); //this is the node to add the correct guess to
    // add not found letter to fail div
    lettersGuessedElement.innerHTML += currentGuess;

    // display number of guesses remaining
    remainingLineElement.innerHTML = (maxGuesses - wrongLetter.length);
  }
  else {
    // letter found!!
  }


  console.log(letterLine);

  counter += 1;
};
