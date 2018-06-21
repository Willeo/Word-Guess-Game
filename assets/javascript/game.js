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
var hideTxt = word.length;

var answerArray = [];
for (var i = 0; i < word.length; i++) {
  console.log(answerArray);
  answerArray[i] = "_";
  document.getElementById("answer").innerHTML = answerArray.join(" ");
}

// Take user's input and check if it's in the Array.

for (var i = 0; i < word.length; i++) {
  if (userText === word[i]) {
    answerArray[i] = guess;
  }
}

confirm("Wanna play??");
// user input selection
var userText = document.getElementById("user-text");
document.onkeyup = function(event) {
  userText.textContent = event.key;
};
