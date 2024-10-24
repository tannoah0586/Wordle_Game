/*-------------------------------- Constants --------------------------------*/
const wordLength = 5;
const maxAttempt = 6;
const targetWord = 'hello';

/*---------------------------- Variables (state) ----------------------------*/
    let guesses = [];
    let currentWord = ' ';
    let winner = false; // not won yet
    let board = [
        '','','','','',
        '','','','',''
    ]
/*------------------------ Cached Element References ------------------------*/

const guessEl = document.querySelectorAll('.guesses');
    console.log(guessEl);

const messageEL = document.querySelector

/*-------------------------------- Functions --------------------------------*/

// function updateWord(word) {
//     const boxes = document.querySelectorAll('.guesses');
//     for (let i = 0; i < word.length; i++) {
//       boxes[i].innerText = word[i];
//     };
// };

const render = () => {
};

const updateBoard = () => {

};

/*----------------------------- Event Listeners -----------------------------*/
// guessEl.forEach(guesses => {
//     guesses.addEventListener('keydown', function(event){
//         const key = event.key;
//         if (key.length === 1 && key.match(/[a-z]/i)) // and keypress single character and ensure only letters 
//         currentWord += key;
//         updateWord(currentWord);
//     })
// })
// console.log(currentWord);
