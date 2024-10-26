/*-------------------------------- Constants --------------------------------*/
const wordLength = 5;
const maxAttempt = 1;
const targetWord = 'hello';

/*---------------------------- Variables (state) ----------------------------*/
    // let guesses = [];
    let currentWord = '';
    let winner = false; // not won yet
    let board = [
        '','','','','',
    ]
/*------------------------ Cached Element References ------------------------*/

const guessEl = document.querySelectorAll('.guesses');
    // console.log(guessEl);

const messageEL = document.querySelector('#message');
    // console.dir(messageEL);

/*-------------------------------- Functions --------------------------------*/

const handleClick = (event) => {
    if (event.key === 'Enter') {
        handleEnterPress();
    } else if (event.key === 'Backspace') {
        currentWord = currentWord.slice(0, -1);
        console.log(currentWord);
    } else if (event.key.length === 1 && event.key.match(/[a-z]/i)) {
        currentWord += event.key;
    }
    board = ['', '', '', '', ''];                   // need to clear the board array inorder to update the new currentWord.
    for (let i = 0; i < currentWord.length; i++) {  // Update the board array with 'new' currentWord
        board[i] = currentWord[i];
    }
    render();
};

const handleEnterPress = () => {
    if(currentWord===targetWord) {
        winner = true;
    } else {

    };
};


const updateBoard = () => {
    board.forEach((element,index) => {
        guessEl[index].innerText = element;
    });
};

const updateMessage = () => {
    if(winner === true) {
        messageEL.textContent = `You guess correctly!`;
    };
};

const render = () => {
    updateMessage();
    updateBoard();
};

const init = () => {
    render();
    console.log('Initialization tasks are being performed.');
};
init();

/*----------------------------- Event Listeners -----------------------------*/
guessEl.forEach(guess=> {
    guess.addEventListener("keydown", function(event) {
     handleClick(event);
    });
 })
