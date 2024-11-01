/*-------------------------------- Constants --------------------------------*/
const wordLength = 5;
const maxAttempt = 2;
const targetWord = 'hello';
/*---------------------------- Variables (state) ----------------------------*/
    // let guesses = [];
    let currentWord = '';
    let winner = false; // not won yet
    let board = [
        '','','','','',
        '','','','','',
    ];
    let rowNumber = 0;
/*------------------------ Cached Element References ------------------------*/

const guessEl = document.querySelectorAll('.guesses');
    // console.dir(guessEl); 

const messageEL = document.querySelector('#message');
    // console.dir(messageEL);

/*-------------------------------- Functions --------------------------------*/

const handleClick = (event) => {
    if (event.key === 'Enter') {
        handleEnterPress();  
        isEnterPressed = true;                                           //important Enter keydown function...
    } else if (event.key === 'Backspace') {
        if (!isEnterPressed && rowNumber === 0) {                        //locks in currentWord and prevents backspace() once 5 letters and enter is pressed
            handleBackspacePress();  
        }                                       
    } else if (event.key.length === 1 && event.key.match(/[a-zA-Z]/)) { //https://stackoverflow.com/questions/38955573/how-to-check-keyboardevent-key-in-specific-range-in-javascript + https://stackoverflow.com/questions/12745930/javascript-regex-uppercase-and-lowercase-and-mixed
        currentWord += event.key;
    }
    // board = [                                                              // need to clear the board array inorder to update the new currentWord.
    //     '', '', '', '', '',
    //     '', '', '', '', '',
    // ];                     
    if (currentWord.length > 0) {
        startingIndex = rowNumber * 5;
        for (let i = 0; i < currentWord.length; i++) {                      // Update the board array with 'new' currentWord
            board[i+startingIndex] = currentWord[i];
        };
        console.log(board)
    };


    // console.log(`current word length: ${currentWord.length}`)
    // console.log(`starting index: ${startingIndex}`)
    render();
};

const handleEnterPress = () => { 
    if(currentWord.length === 5) {
        if (targetWord !== currentWord) {
                getSameLetters(targetWord,currentWord);                 //compare target and current word function
                updateGeeen(sameCorrectLocation);                       //arrays are passed to the fuctions to avoid using global arrays which contributes to code smell
                updateYellow(sameButDifferentLocation);                 //arrays are passed to the fuctions to avoid using global arrays which contributes to code smell  
                rowNumber +=1;              
                currentWord = '';                                       //resets currentWord for new line
            } else {
                winner = true;
                }
                    console.log(`board: ${board}`)
    }; 
};

const handleBackspacePress = () => {
    currentWord = currentWord.slice(0, -1);                             //slice() works...
    const startingIndex = rowNumber *5;
    board[startingIndex+currentWord.length] = '';
}

const getSameLetters = (targetWord,currentWord) => {
    for (let i = 0; i < targetWord.length; i++) {
        if(targetWord[i] === currentWord[i]) {
            sameCorrectLocation.push(i);                            //https://stackoverflow.com/questions/70040227/how-do-you-check-two-strings-in-js-and-determine-if-any-letters-in-each-is-place
        } else if (targetWord.includes(currentWord[i]) && targetWord[i] !== currentWord[i]) {
            sameButDifferentLocation.push(i);
            // console.log(sameButDifferentLocation)            //array is correct
        }
    }
    return;
}

const updateGeeen = (sameCorrectLocation) => {
    const startingIndex = rowNumber * 5;
    for (let i = 0; i < guessEl.length; i++) {
        if(sameCorrectLocation.includes(i)) {
            document.getElementById(guessEl[startingIndex + i].id).style.backgroundColor = 'rgb(144, 238, 144)';  
        }
    }  
};

const updateYellow = (sameButDifferentLocation) => {
    const startingIndex = rowNumber * 5;
    for (let i = 0; i < guessEl.length; i++) {
        if(sameButDifferentLocation.includes(i)) {
            document.getElementById(guessEl[startingIndex + i].id).style.backgroundColor = 'rgb(255, 255, 0)'; 
        }
    }  
};

const updateBoard = () => {
    startingIndex = rowNumber * 5;
    board.forEach((element,index) => {
        if(index < guessEl.length) {                                //restriction condition to prevent undefined guessEl.innertext
            guessEl[index].innerText = element;
        };
    });
};

const updateMessage = () => {
    if(winner === true) {
        messageEL.textContent = `You guess the word correctly!`;
    };
};

const render = () => {
    updateMessage();
    updateBoard();
};

const init = () => {
    render();
    console.log('Initialization tasks are being performed.');
    sameButDifferentLocation =[];
    sameCorrectLocation =[];
    isEnterPressed = false;   
};
init();

/*----------------------------- Event Listeners -----------------------------*/
guessEl.forEach(guess=> {
    guess.addEventListener("keydown", function(event) {
     handleClick(event);
    });
 })
