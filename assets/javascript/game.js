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

var s;
var count = 0;
var answerArray = [];
var userText;

// select the word and created the answer array / underscores as required
function startUp() {
  for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
  }

  // making the string and sending to the page
  s = answerArray.join(" ");
  document.getElementById("answer").innerHTML = s;
}

// on key release run function to see if letter is in the array
function letter() {
  var letter = document.getElementById("userText");

  if (userText > 0) {
    for (var i = 0; i < word.length; i++) {
      answerArray[i] = userText;
    }
    count++;
    document.getElementById("counter").innerHTML = "No of clicks: " + count;
    document.getElementById("answer").innerHTML = answerArray.join(" ");
  }
  if (count > 10) {
    document.getElementById("stat").innerHTML = "tsk tsk tsk..";
  }
}
// Start the game confirmation
confirm("Wanna play");

// user input selection
var userText = document.getElementById("user-text");
document.onkeyup = function(event) {
  userText.textContent = event.key;
};

document.onkeypress = letter();
