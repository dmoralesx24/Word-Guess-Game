
// nba teams array
var nbaTeams = ["hawks", "celtics", "nets", "hornets", "bulls", "cavaliers", "mavericks", "nuggets", "pistons", "warriors", "rockets", "pacers", "clippers", "lakers", "grizzlies", "heat", "bucks", "timberwolves", "pelicans", "knicks", "thunder", "magic", "sixers", "blazers", "kings", "spurs", "raptors", "jazz"];

// Data holder for the game
var selectedWord = "";
var lettersInWord  = [];
var numBlanks = 0; 
var wrongLetters= [];
var blankAndSuccesses = [];

// Game Counters
var numOfTries = 12;
var winCount = 0;
var loseCount = 0;

// Dom Manipulati



// the start of the game functionality 
function startGame() {

    selectedWord = nbaTeams[Math.floor(Math.random() * nbaTeams.length)];
    lettersInWord = selectedWord.split("");
    numBlanks = lettersInWord.length;

    numOfTries = 12;
    wrongLetters = [];
    blankAndSuccesses = [];

    for(var i = 0; i < numBlanks; i++) {
        blankAndSuccesses.push("_");
    };

    document.getElementById("underscore").innerHTML = blankAndSuccesses.join(" ");
    document.getElementById("attempts").innerHTML = numOfTries;
    document.getElementById("wins").innerHTML = winCount;
    document.getElementById("losses").innerHTML = loseCount;
};

function checkLetters(letter) {

    var isLetterInWord = false;

    for(var i = 0; i < numBlanks; i++) {
        if(selectedWord[i] == letter) {
            isLetterInWord = true;
        }
    }
    
    if(isLetterInWord) {
     for(var i = 0; i < numBlanks; i++) {
        if(selectedWord[i] == letter) {
            blankAndSuccesses[i] = letter;
        };
     };
    }
    else {
     wrongLetters.push(letter);
     numOfTries--
    };
};

function roundComplete() {

    document.getElementById("attempts").innerHTML = numOfTries;
    var answer = document.getElementById("underscore").innerHTML = blankAndSuccesses.join(" ");
    document.getElementById("wrongGuess").innerHTML = wrongLetters.join(" ");

    if(lettersInWord.toString() == blankAndSuccesses.toString()) {
        winCount++;
        alert(`You WON!! Answer: ${answer}`);

        document.getElementById("wins").innerHTML = winCount;

        startGame();
    }
    else if(numOfTries == 0){
        loseCount++;
        alert(`You Lost :(`);

        document.getElementById("losses").innerHTML = loseCount;

        startGame();
    }
}



startGame();

document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();
};



