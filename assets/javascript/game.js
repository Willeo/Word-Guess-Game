
//The random words for the game.
var words = ["polygon",
            "illustration" ,
            "concept", 
            "sketch", 
            "triage",
            "expectant",
            "render" ];

var word = words[Math.floor(Math.random() * words.lenth)];


//player guess
var player_guess = 0;

var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

var remainingLetters = word.length;

//check if the guess is correct
while (remainingLetters > 0) {
         answerArray.join(" ");
}

var guess = prompt("Guess a letter, or click Cancel to stop playing.");
    if (guess === null) {
// Exit the game loop
        break;
}  else if (guess.length !== 1) {
alert("Please enter a single letter.");
} else {
// Update the game state with the guess
for (var j = 0; j < word.length; j++) {
if (word[j] === guess) {
answerArray[j] = guess;
remainingLetters--;
}
}
}
alert(answerArray.join(" "));
alert("Good job! The answer was " + word);




