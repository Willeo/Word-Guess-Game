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
var simpsons;
var userText;
var hideTxt = word.length;
var answerArray = [];
for (var i = 0; i < word.length; i++) {
  answerArray[i] = "_";
  document.getElementById("answer").innerHTML = answerArray.join(" ");
}

// Take user's input and check if it's in the Array.
while (hideTxt < 0) {
  document.getElementById("answer").innerHTML = answerArray.join(" ");
}

for (var i = 0; i < word.length; i++) {
  if (word[i] === userText) {
    answerArray[i] = userText;
  }
}

confirm("Wanna play??");

// user input selection
var userText = document.getElementById("user-text");
document.onkeyup = function(event) {
  userText.textContent = event.key;
};
