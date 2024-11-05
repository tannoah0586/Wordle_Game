/*-------------------------------- Constants --------------------------------*/
const wordLength = 5;
const maxAttempt = 6;
const targetArray = ["kiasu", "bojio", "makan", "aiyah", "shiok","aiyoh", "boleh","cheem", "chope", "lepak", "dabao"];
const getRandomInt = (max) => {
  return Math.floor(Math.random() * max); //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
};
const targetWord = targetArray[getRandomInt(targetArray.length)];
console.log(targetWord); //random word generator works

/*---------------------------- Variables (state) ----------------------------*/
// let guesses = [];
let currentWord = "";
let winner = false; // not won yet
let board = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];
let rowNumber = 0;
let attepmt = 0;
/*------------------------ Cached Element References ------------------------*/

const guessEl = document.querySelectorAll(".guesses");
// console.dir(guessEl);

const messageEL = document.querySelector("#message");
// console.dir(messageEL);

/*-------------------------------- Functions --------------------------------*/

const handleClick = (event) => {
  if (event.key === "Enter") {
    handleEnterPress();
    isEnterPressed = true; //important Enter keydown function...
  } else if (event.key === "Backspace") {
    // if (!isEnterPressed && rowNumber !== 0) {                        //locks in currentWord and prevents backspace() once 5 letters and enter is pressed
    handleBackspacePress();
    // }
  } else if (event.key.length === 1 && event.key.match(/[a-z]/)) { //https://stackoverflow.com/questions/38955573/how-to-check-keyboardevent-key-in-specific-range-in-javascript + https://stackoverflow.com/questions/12745930/javascript-regex-uppercase-and-lowercase-and-mixed
    currentWord += event.key;
  }
  if (currentWord.length > 0) 
    displayBoard();
    render();
};

const displayBoard=() =>{
     startingIndex = rowNumber * 5;
    for (let i = 0; i < currentWord.length; i++) {              // Update the board array with 'new' currentWord
      board[i + startingIndex] = currentWord[i];
    }
    // console.log(board)
  };

  // console.log(`current word length: ${currentWord.length}`)
  // console.log(`starting index: ${startingIndex}`)

const handleEnterPress = () => {
  if (currentWord.length === 5) {
    if (targetWord !== currentWord) {
      getSameLetters(targetWord, currentWord); //compare target and current word function
      updateGeeen(sameCorrectLocation); //arrays are passed to the fuctions to avoid using global arrays which contributes to code smell
      updateYellow(sameButDifferentLocation); //arrays are passed to the fuctions to avoid using global arrays which contributes to code smell
      rowNumber += 1;
      attepmt += 1;
      currentWord = ""; //resets currentWord for new row
    } else {
      winner = true;
    }
    // console.log(`board array: ${board}`)
  }
};

const handleBackspacePress = () => {
  currentWord = currentWord.slice(0, -1); //slice() works...
  board[currentWord.length] = "";
};

const getSameLetters = (targetWord, currentWord) => {
  //this function is to build the 2 arrays to update board with color codes
  const startingIndex = rowNumber * 5;
  for (let i = 0; i < targetWord.length; i++) {
    if (targetWord[i] === currentWord[i]) {             //conditions for green color
      sameCorrectLocation.push(i + startingIndex); //https://stackoverflow.com/questions/70040227/how-do-you-check-two-strings-in-js-and-determine-if-any-letters-in-each-is-place
    } else if (
      targetWord.includes(currentWord[i]) &&            //conditions for yellow color 
      targetWord[i] !== currentWord[i]
    ) {
      sameButDifferentLocation.push(i + startingIndex);
    }
  }
  console.log(
    `correct letter but different location: ${sameButDifferentLocation}`
  ); //array is okay
  console.log(`correct letter correct location: ${sameCorrectLocation}`); //array is okay
};

const updateGeeen = (sameCorrectLocation) => {
  for (let i = 0; i < guessEl.length; i++) {
    if (sameCorrectLocation.includes(i)) {
      document.getElementById(guessEl[i].id).style.backgroundColor =
        "rgb(144, 238, 144)";
    }
  }
};

const updateYellow = (sameButDifferentLocation) => {
  for (let i = 0; i < guessEl.length; i++) {
    if (sameButDifferentLocation.includes(i)) {
      document.getElementById(guessEl[i].id).style.backgroundColor =
        "rgb(255, 255, 0)";
    }
  }
};

const updateBoard = () => {
  board.forEach((element, index) => {
    if (index < guessEl.length) {
      //restriction condition to prevent undefined guessEl.innertext
      guessEl[index].innerText = element;
    }
  });
};

const updateMessage = () => {
  if (winner === true) {
    messageEL.textContent = `Wah lau eh, you win liao lor!`;
  }
  if (attepmt === maxAttempt && winner === false) {
    messageEL.textContent = "You lose, use your brain lah!";
  }
};

const render = () => {
  updateMessage();
  updateBoard();
};

const init = () => {
  console.log("Initialization tasks are being performed.");
  sameButDifferentLocation = []; //global array
  sameCorrectLocation = [];     //global array
  isEnterPressed = false;
};
init();

/*----------------------------- Event Listeners -----------------------------*/
guessEl.forEach((guess) => {
  guess.addEventListener("keydown", function (event) {
    handleClick(event);
  });
});