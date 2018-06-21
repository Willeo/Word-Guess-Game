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
var hideTxt = word.length;
var answerArray = [];
for (var i = 0; i < word.length; i++) {
  answerArray[i] = "_";
  document.getElementById("answer").innerHTML = answerArray.join(" ");
}
var guess = userText;
// Take user's input and check if it's in the Array.

for (var i = 0; i < word.length; i++) {
  if (userText === word[i]) {
    answerArray[i] = guess;
  }
  else (guess !== word[i]) {
    score++;
    document.getElementById("score").innerHTML = score;
  }
}

confirm("Wanna play??");
// user input selection
var userText = document.getElementById("user-text");
document.onkeyup = function(event) {
  userText.textContent = event.key;
};
