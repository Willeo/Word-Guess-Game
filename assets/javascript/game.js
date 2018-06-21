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
var remainingLetters = word.length;
var answerArray = [];
for (var i = 0; i < word.length; i++) {
  answerArray[i] = "_";
  document.getElementById("answer").innerHTML = answerArray.join(" ");
}

// Take user's input and check if it's in the Array.

confirm("Wanna play??");
// user input selection
var userText = document.getElementById("user-text");
document.onkeyup = function(event) {
  userText.textContent = event.key;
  console.log(userText.textContent);
  console.log(word);
  console.log(answerArray);
  var guess = userText.textContent;

  for (var i = 0; i < word.length; i++) {
    if (guess === word[i]) {
      answerArray[i] = guess;
      remainingLetters--;
      document.getElementById("answer").innerHTML = answerArray.join(" ");
    }
  }
};

//here the user guesses and the array should print on the screen
