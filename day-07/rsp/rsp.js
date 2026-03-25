/*
* The Rock, Paper and Scissor Game
* This game is between computer and human. Once human will select R, P or S and
  in the next turn, the computer will select R, P or S.
* The winner will be selected based on these rules:
* - R can break S => R wins
* - P can wrap R => P wins
* - S can cut P => S wins
* Ask the input from user and randomly select a copmputer selection to continue
  the game
*/
// Assumptions
// 1. We have to prompt the user to get their input
// 2. The computer selection will be random
// 3. We have to compare user and computer choices 
// 4. We need to announce the winner
// 5. After the winner annoucement, we may want to ask the user to play again or 
//    quit from the game.



function rockPaperScissorGame() {
    console .log('Getting started with the Rock, Paper and Scissors Game')

    const userChoicePrompt = prompt('Enter Rock, Paper, Scissors')
    const userChoice = userChoicePrompt.toLowerCase()

    let computerChoice
    const randomNumber = Math.floor(Math.random() * 3) + 1

    if (randomNumber === 1) {
        computerChoice = 'rock'
    } else if (randomNumber === 2) {
        computerChoice = 'paper'
    } else {
        computerChoice = 'scissors'
    }

    console.log('User selected', userChoice)
    console.log('Compter selected', computerChoice)

    switch(true) {
        case  userChoice === 'rock' && computerChoice === 'scissors': 
        case  userChoice === 'paper' &&  computerChoice === 'rock': 
        case  userChoice === 'scissors' && computerChoice === 'paper':
            console.log('You the User WIN, yay!!!')
            break
        case userChoice === computerChoice:
            console.log('The Game is a Tie')
            break
        case  userChoice === 'rock' && computerChoice === 'paper': 
        case  userChoice === 'paper' && computerChoice === 'scissors':
        case  userChoice === 'scissors' && computerChoice === 'rock':
            console.log('Oh Ho... Computer Wins!!!')
            break
        default:
            console.log('Please check the input, to fix your choice')

    }

    const playAgainPrompt = prompt('Do you want to play again ? (yes/no}')
    const playAgain = playAgainPrompt ? playAgainPrompt.toLocaleLowerCase() : 'no'

    switch(playAgain) {
        case 'yes':
            rockPaperScissorGame()
            break
        case 'no':
            console.log('Thanks for playing! See you Next Time')
    }
   
}
rockPaperScissorGame()