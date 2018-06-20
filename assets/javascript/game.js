var words = [
  "bart",
  "milhouse",
  "maggie",
  "nelson",
  "barnie",
  "patty",
  "flanders"
];
var word = words[Math.floor(Math.random() * words.length)];

var score = 0;

var userText;

// select the word and created the answer array / underscores as required
var answerArray = [];
for (var i = 0; i < word.length; i++) {
  answerArray[i] = "_";

  // making the string and sending to the page
  s = answerArray.join(" ");
  document.getElementById("answer").innerHTML;
}

if (userText === answerArray) {
  for (var i = 0; i < word.length; i++) {
    answerArray[i] = textContent;
  }

  document.getElementById("answer").innerHTML = answerArray.join(" ");
}

// Start the game confirmation
confirm("Wanna play??");

// user input selection
var userText = document.getElementById("user-text");
document.onkeyup = function(event) {
  userText.textContent = event.key;
};
