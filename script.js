const wordList = [
  // "geary",
  // "lombard",
  // "hyde",
  "broadway"
  // "columbus",
  // "kearny",
  // "chestnut",
  // "karl",
  // "hella",
  // "octavia",
  // "tenderloin",
  // "polk",
  // "marina",
  // "haight",
  // "castro",
  // "sunset",
  // "mission",
  // "soma",
  // "japantown",
  // "chinatown",
  // "tech",
  // "wharf",
  // "alcatraz",
  // "startup",
  // "uber",
  // "lyft",
  // "giants",
  // "rent",
  // "hyphy",
  // "dank",
  // 'hills',
  // 'presidio',
  // 'parking'
];
let currentWord = "";
let displayWord = "";
let lettersGuessed = [];
let remainingGuesses = 5;
let wins = 0;
let losses = 0;

// Raondomly select word from word list
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// display _ for each letter of currentWord
// for (let i = 0; i < currentWord.length; i++) {
//   displayWord = displayWord += '_ ';
// }

// if remaingingGuesses > 0
// check user guess against currentWord
// if currentWord includes userGuess
// display userGuessed letter in place of _

// else remainingGuesses --

function newWord() {
  // assign selected word to currentWord
  currentWord = wordList[getRandomInt(wordList.length)].split("");
}

newWord();

function handleDomUpdate() {
  //display wins/losses
  document.querySelector("#wins").textContent = wins;
  document.querySelector("#losses").textContent = losses;

  // display _ for letters of current word
  if (lettersGuessed.length === 0) {
    displayWord = currentWord.map(elem => {
      return (elem = "_ ");
    });
  }
  document.querySelector("#currentWord").textContent = displayWord.join(" ");
  // display letters guess
  document.querySelector("#lettersGuessed").textContent = lettersGuessed;

  // display remaining guesses
  document.querySelector("#remainingGuesses").textContent = remainingGuesses;
}

handleDomUpdate();

function resetGuessVars() {
  let lettersGuessed = [];
  let remainingGuesses = 5;
  // display letters guess
  document.querySelector("#lettersGuessed").textContent = lettersGuessed;

  // display remaining guesses
  document.querySelector("#remainingGuesses").textContent = remainingGuesses;
}

function checkUserGuess(userKey) {
  if (currentWord.includes(userKey)) {
    for (let i = 0; i < currentWord.length; i++) {
      if (currentWord[i] === userKey) {
        displayWord[i] = userKey;
      }
    }
    lettersGuessed.push(userKey);
  } else {
    lettersGuessed.push(userKey);
    remainingGuesses--;
  }
  handleDomUpdate();
}

document.getElementById("submit").addEventListener("click", function(event) {
  let userGuess = document
    .querySelector("#input")
    .value.trim()
    .slice(0, 1)
    .toLowerCase();
  document.querySelector("#input").value = "";
  checkUserGuess(userGuess);
});
