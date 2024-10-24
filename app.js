/*-------------------------------- Constants --------------------------------*/
const wordLength = 5;
const maxAttempt = 6;
const targetWord = 'loves';

/*---------------------------- Variables (state) ----------------------------*/

let guesses = [];
let currentWord = '';
/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/

const init = () => {
    console.log('Initialization tasks are being performed.');
};
function updateWord(word) {
    const boxes = document.querySelectorAll('.guesses .letter-box');
    for (let i = 0; i < word.length; i++) {
      boxes[i].innerText = word[i];
    };
};


/*----------------------------- Event Listeners -----------------------------*/

document.addEventListener('keydown', function(event){
    const key = event.key;
    if (key.length === 1 && key.match(/[a-z]/i)) // and keypress single character and ensure only letters 
    currentWord += key;
    updateWord(currentWord);
})

