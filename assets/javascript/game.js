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
    }
    if (remainingLetters == 0) {
      console.log("congrats you guessed it!!");
      alert("congrats you guessed it!!");
      document.getElementById("loser").innerHTML = "Congrats!!!";
    } // Winning condition
  } // bad guesses being pushed into an array
  if (guess !== word[i]) {
    console.log("strike");
    miss++;
    document.getElementById("loser").innerHTML = missedArray.push(guess);
    document.getElementById("score").innerHTML = miss;
    for (var i = 0; i < missedArray.length; i++) {
      //alert("Game over");
      document.getElementById("loser").innerHTML = missedArray;
    }
    if (miss === 15) {
      alert("Game over");
    }
  }
}; // end onkeyUp function
