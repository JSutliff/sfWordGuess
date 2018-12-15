const wordList = [
  "geary",
  "lombard",
  "hyde",
  "broadway",
  "columbus",
  "kearny",
  "chestnut",
  "karl",
  "hella",
  "octavia",
  "tenderloin",
  "polk",
  "marina",
  "haight",
  "castro",
  "sunset",
  "mission",
  "soma",
  "japantown",
  "chinatown",
  "tech",
  "wharf",
  "alcatraz",
  "startup",
  "uber",
  "lyft",
  "giants",
  "rent",
  "hyphy",
  "dank",
  "hills",
  "presidio",
  "parking",
  "fillmore",
  "balboa",
  "anza"
];
let currentWord = "";
let displayWord = "";
let lettersGuessed = [];
let remainingGuesses = 5;
let wins = 0;
let losses = 0;
let wordLength;

// Raondomly select word from word list
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function newWord() {
  // assign selected word to currentWord
  currentWord = wordList[getRandomInt(wordList.length)].split("");
  lettersGuessed = [];
  remainingGuesses = 5;
  wordLength = currentWord.length;
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
  // display length of current word
  document.getElementById('length').textContent = wordLength;

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

function checkWin() {
  if (remainingGuesses === 0) {
    document.getElementById("scroreBoard").innerHTML = `<h2>You Lose!</h2> 
    <h3>The word was: ${currentWord.join("")}</h3>`;
    losses++;
    document.getElementById("losses").textContent = losses;
    setTimeout(function() {
      document.getElementById(
        "scroreBoard"
      ).innerHTML = `<p>Current Word: <span id="currentWord"></span></p>
      <p>Letters Guessed: <span id="lettersGuessed"></span></p>
      <p>Remaining Guesses: <span id="remainingGuesses"></span></p>`;
      handleDomUpdate();
    }, 3000);
    newWord();
  } else if (remainingGuesses > 0 && !displayWord.includes("_ ")) {
    wins++;
    document.getElementById("scroreBoard").innerHTML = `<h2>You Win!</h2> 
    <h3>The word was: ${currentWord.join("")}</h3>`;
    document.getElementById("wins").textContent = wins;
    setTimeout(function() {
      document.getElementById(
        "scroreBoard"
      ).innerHTML = `<p>Current Word: <span id="currentWord"></span></p>
      <p>Letters Guessed: <span id="lettersGuessed"></span></p>
      <p>Remaining Guesses: <span id="remainingGuesses"></span></p>`;
      handleDomUpdate();
    }, 3000);
    newWord();
  }
}

document.getElementById("submit").addEventListener("click", function(event) {
  let userGuess = document
    .querySelector("#input")
    .value.trim()
    .slice(0, 1)
    .toLowerCase();
  document.querySelector("#input").value = "";

  checkUserGuess(userGuess);
  checkWin();
});
