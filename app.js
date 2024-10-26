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

const handleClick =(event)=> {
    if (event.key === 'Enter') {
        // Handle guess submission
    } else if (event.key === 'Backspace') {
        // Handle deleting the last character
    } else if (event.key.length === 1 && event.key.match(/[a-z]/i)) {
        // Handle adding a letter to the current guess
        currentWord += event.key;
        for (let i = 0; i < currentWord.length; i++) {
        board[i] = currentWord[i];
        };
    }
    render();
};

const updateBoard = () => {
    board.forEach((element,index) => {
        guessEl[index].innerText = element;
        // console.log(guessEl[index]); 
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
