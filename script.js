const wordList = [
  'geary',
  'lombard',
  'hyde',
  'broadway',
  'columbus',
  'kearny',
  'chestnut',
  'karl',
  'hella', 
  'octavia', 
  'tenderloin', 
  'polk', 
  'marina',
  'haight',
  'castro',
  'sunset',
  'mission',
  'soma',
  'japantown',
  'chinatown',
  'tech',
  'wharf',
  'alcatraz',
  'startup',
  'uber',
  'lyft',
  'giants',
  'rent',
  'hyphy',
  'dank'
];
let currentWord = '';
let displayWord = ''
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

function handleDomUpdate() {

  //display wins/losses
  document.querySelector('#wins').textContent = wins;
  document.querySelector('#losses').textContent = losses;

  // assign selected word to currentWord
  currentWord = wordList[getRandomInt(wordList.length)];

  // display _ for letters of current word
  document.querySelector('#currentWord').textContent = currentWord.split('').map(elem => {
    return elem = '_ ';
  }).join(' ');
}

handleDomUpdate();