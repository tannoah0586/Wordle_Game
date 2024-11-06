## Screenshot/Logo 
![alt text](image.png)



## user stories

As a user, I want to start a new game so that I can play Wordle from the beginning.
As a user, I want to input a word so that I can try to guess the word.
As a user, I want to see feedback on my guess so that I know which letters are correct and in the correct position, which are correct but in the wrong position, and which are incorrect.
As a user, I want to see the number of remaining attempts so that I know how many guesses I have left.
As a user, I want to see a message when I win or lose so that I know the outcome of the game.
As a user, I want to reset the game so that I can play again without refreshing the page.


## high level MVC scope + ## pseudoCode

**Model:**
store the target word
store the current state of game 

**View:**
Display the current state of the game to user
provide input fields

**Controller:**
handle user input
update model based on user input
Update the view based on the changes in the model

## wireframe:

use figma for CSS && wireframe

1. Define any variables used to track the state of the game:

   ## state variables

   let targetWord; //the word the player is trying to guess from a constant list
   let currentGuess;  
    let guesses; //an array to store all the guesses
   let maxAttempt; //max guesses allowed
   let gameStatus; //win status, currently playing status and lost status --> when reached the limit of 6 tries

2. Define the required constants:

   ## constant variables

   const listOfWords //array of 5 letter words []

3. Handle a player clicking a button
   when player starts off by entering 5 letters and clicks enter button
   guess is stored into array called guesses

4. Handle handleEnterPress 
      Loop through the words: Compare each character in currentWord with targetWord.  (done)
      Check for exact matches: If characters match and are in the same position, mark them (e.g., change the div color to green). (done)
      Check for partial matches: If characters match but are in different positions, mark them differently (e.g., change the div color to yellow). (done)
      Update the board: Use your render function to update the board with the new colors. (done)
      when enter keydown is activated, row 1 is locked and player focuses on row 2, game repeats 


5. Compare the player choice to the computer choice, and check for a winner
   gameStatus is updated if maxAttempt is not met

6. Render a win/lose/tie message to the player
   gamneStatus will show either win lose (if max Attempt is hit and currentGuess !== targetWord)

