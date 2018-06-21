var words = [
  "Bart",
  "Milhouse",
  "Maggie",
  "Nelson",
  "Barney",
  "Patty",
  "Lisa",
  "Willy",
  "Chief Wiggum",
  "Flanders"
];
var word = words[Math.floor(Math.random() * words.length)];
var miss = 0;
var missedArray = [];
var remainingLetters = word.length;
var answerArray = [];
confirm("Wanna play??");
// selecting the name
for (var i = 0; i < word.length; i++) {
  answerArray[i] = "_";
  document.getElementById("answer").innerHTML = answerArray.join(" ");
}

// user input selection
var userText = document.getElementById("user-text");
document.onkeyup = function(event) {
  userText.textContent = event.key;
  // console.log(userText.textContent);
  // console.log(word);
  // console.log(answerArray);
  // console.log(missedArray);
  var guess = userText.textContent;

  for (var i = 0; i < word.length; i++) {
    if (guess === word[i]) {
      answerArray[i] = guess;
      remainingLetters--;
      document.getElementById("answer").innerHTML = answerArray.join(" ");
    } // Winning condition
    if (remainingLetters == 0) {
      console.log("congrats you guessed it!!");
      document.getElementById("loser").innerHTML = "Congrats!!!";
    }
  } // bad guesses being pushed into an array
  if (guess !== word[i]) {
    console.log("strike");
    document.getElementById("loser").innerHTML = missedArray.push(guess);
    for (var i = 0; i < missedArray.length; i++) {
      document.getElementById("loser").innerHTML = missedArray;
    }
  }
}; // end onkeyUp function
