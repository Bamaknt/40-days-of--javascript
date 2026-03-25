/*
* Let us play number guessing game
* You will ask user for a number between 1 to 10. Once user will enter a
  number , you will tell user the entered number is lower or higher. With 
  this information, user will change the number and finally guess the right
  number. You also need to show the number of attemps made to rach to this
  right guess.
*/

// max number
// min number

// secret number is a random number between min and max

// get the prompt to user as guess 

// create a variable to store the number of attempts

// write the logic to check if the guess and secret number are same.
// If not continue the loop to ask again.

// Inside loop check if hte guess is less than the secret or greater
// than, accordingly tell the guess it low or high

// Give the option to play again


function startSecretNumberGame() {
    console.log('Welcome to the Number Guessing Game!')

    let maxNumber = 10
    let minNumber = 1

    let secretNumber = Math.floor(Math.random() *10) + 1

    let guessNumber
    let attempts = 0

    while (guessNumber !== secretNumber) {
        guessNumber = Number(prompt('Try to guess a number from 1 to 10'))
        attempts++

        if (guessNumber < secretNumber) {
            console.log('Too Low! Try again')
        } else if (guessNumber > secretNumber) {
            console.log('Too High! Try again')
        } else if (guessNumber === secretNumber) {
            console.log(`Congrats! You guessed the number in ${attempts} attempts`)
        } else {
            console.log('Out of range! Try again')
        }
    }     

    const playAgainPrompt = prompt('Do you want to replay ? (yes/no)')
    const playAgain = playAgainPrompt ? playAgainPrompt.toLowerCase() : 'no'

    switch(playAgain) {
        case 'yes':
            startSecretNumberGame()
        case 'no':
            console.log('Thanks for playing! See you Next Time')
      default:
            console.log('Invalid choice')

    }
}
 

// Start the Game
startSecretNumberGame()
