//The random words for the game.
var words = [
  "polygon",
  "illustration",
  "concept",
  "sketch",
  "triage",
  "expectant",
  "render"
];

// Pick a random word
var word = words[Math.floor(Math.random() * words.length)];
// Set up the answer array
var answerArray = [];
for (var i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}

// display the "_" on to the page.
var remainingLetters = word.length;
document.getElementById("hits").innerHTML = answerArray.join(" ");

var answerArray = [];
for (var i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}
// User's input or Guess. On key release

var userText = document.getElementById("user-text");
document.onkeyup = function(event) {
  userText.textContent = event.key;
};

// display the remaining letters
var remainingLetters = word.length;
document.getElementById("hits").innerHTML = answerArray.join(" ");

// letters guessed correctly, update the Remaining letters display.
for (var j = 0; j < word.length; j++) {
  if (word[j] === userGuess) {
    answerArray[j] = userGuess;
    remainingLetters--;
  }
}
// if letter wasn't guess correctly, display below.
