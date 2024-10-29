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
   if (targetWord !== currentWord) {
        const getSameLetters = (targetWord,currentWord) => {
            const sameCorrectLocation = []
            const sameButDifferentLocation = []
            for (let i = 0; i < targetWord.length; i++) {
                if(targetWord[i] === currentWord[i]) {
                    sameCorrectLocation.push(i);                            //https://stackoverflow.com/questions/70040227/how-do-you-check-two-strings-in-js-and-determine-if-any-letters-in-each-is-place
                } else if (targetWord.includes(currentWord[i]) && targetWord[i] !== currentWord[i]) {
                    sameButDifferentLocation.push(i);
                    // console.log(sameButDifferentLocation)            code works
                }
            }
            return sameCorrectLocation;
        }
        
        testing = getSameLetters(targetWord,currentWord);
            updateGeeen();
            updateYellow();
        } else {
            winner = true;
    };
};

const updateGeeen = () => {
    for (let i = 0; i < guessEl.length; i++) {
        if(testing.includes(i)) {
            document.getElementById(guessEl[i].id).style.backgroundColor = 'rgb(144, 238, 144)';
        }
    } 
};

const updateYellow = () => {
    for (let i = 0; i < guessEl.length; i++) {
        if(testing.includes(i)) {
            document.getElementById(guessEl[i].id).style.backgroundColor = 'rgb(255, 255, 0)';
        }
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
    // updateGreen();
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
