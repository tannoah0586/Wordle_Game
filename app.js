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
        // console.log(currentWord);                                       //slice() works...
    } else if (event.key.length === 1 && event.key.match(/[a-zA-Z]/)) { //https://stackoverflow.com/questions/38955573/how-to-check-keyboardevent-key-in-specific-range-in-javascript + https://stackoverflow.com/questions/12745930/javascript-regex-uppercase-and-lowercase-and-mixed
        currentWord += event.key;
    }
    board = ['', '', '', '', ''];                                       // need to clear the board array inorder to update the new currentWord.
    for (let i = 0; i < currentWord.length; i++) {                      // Update the board array with 'new' currentWord
        board[i] = currentWord[i];
    }
    render();
};

const handleEnterPress = () => {                
    if(currentWord===targetWord) {
        winner = true;
    } else {
        const getSameLetters = (targetWord,currentWord) => {
            const minLength = Math.min(targetWord.length,currentWord.length);
            const sameLetters = []
            for (let i = 0; i < minLength; i++) {
                if(targetWord[i] === currentWord[i]) {
                    sameLetters.push({i,letter: targetWord[i]});  //https://stackoverflow.com/questions/70040227/how-do-you-check-two-strings-in-js-and-determine-if-any-letters-in-each-is-place
                }
            }
            return sameLetters;
        }
        console.log(getSameLetters(targetWord,currentWord));
        }
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
