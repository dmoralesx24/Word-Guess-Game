
// nba teams array
var nbaTeams = ["hawks", "celtics", "nets", "hornets", "bulls", "cavaliers", "mavericks", "nuggets", "pistons", "warriors", "rockets", "pacers", "clippers", "lakers", "grizzlies", "heat", "bucks", "timberwolves", "pelicans", "knicks", "thunder", "magic", "sixers", "blazers", "kings", "spurs", "raptors", "jazz"];

// random team picked 
var randomTeam = Math.floor(Math.random() * nbaTeams.length);
var chosenTeam = nbaTeams[randomTeam];
var rightWord = [];
var wrongWord = [];
var underLine = [];

// Dom Manipulation
var docUnderLine = document.getElementsByClassName("underscore");
var docRightGuess = document.getElementsByClassName("rightGuess");
var docWrongGuess = document.getElementsByClassName("wrongGuess");
var docNumber = document.getElementsByClassName("attempts");

// testing
console.log(chosenTeam);

// making lines the length of the team name
let underscore = () => {
    for(var i = 0; i < chosenTeam.length; i++) {
        underLine.push("_");
    }
    return underLine; 
}

//users guess 
document.addEventListener("keypress", (event) => {

    var keyword = String.fromCharCode(event.keyCode);
    if(chosenTeam.indexOf(keyword) > -1) {
     // if user guesses right 
     rightWord.push(keyword);
     underLine[chosenTeam.indexOf(keyword)] = keyword;
     docUnderLine[0].innerHTML = underLine.join(" ");
     docRightGuess[0].innerHTML = rightWord;
        if(underLine.join("") === chosenTeam) {
            alert("YOU WIN!");
        }
     //  if user guesses wrong
    } else {
      wrongWord.push(keyword);
      docWrongGuess[0].innerHTML = wrongWord;
     }
});  

docUnderLine[0].innerHTML = underscore().join(" "); 