// creating a rock paper scissors game
// iterates over the three possible moves Comp can make
const moves = ["Rock","Paper","Scissors"];
let playerScore = 0;
let computerScore = 0;
function computerPlay(){
  return moves[Math.floor(Math.random() * 3)];
}
computerPlay()

function playRound(playerSelection, computerSelection) {
  // return a string stating who won the round ie "You lost! Paper beats Rock!"
  if (playerSelection == 'rock' && computerSelection == 'Scissors' || playerSelection == 'paper' && computerSelection == 'Rock') {
    playerScore = playerScore + 1;
    return 'You win! You had: ' + playerSelection + ' beats ' + computerSelection.toLowerCase();
  } 
  else if (playerSelection == 'rock' && computerSelection == 'Paper' || playerSelection == 'paper' && computerSelection == 'Scissors' || playerSelection == 'scissors' && computerSelection == 'Rock') {
    computerScore = computerScore + 1;
    return 'You lose. Computer had: ' + computerSelection.toLowerCase() + ' beats ' + playerSelection;
  } 
  else (playerSelection.toLowerCase() == computerSelection) 
    return 'You tied. ' + playerSelection + ' is the same as ' + computerSelection.toLowerCase(); 
} 
// function for a game to be played
function game() {
  const playerSelection = prompt("Rock, Paper, or Scissors? ").toLowerCase();
  const computerSelection = computerPlay();
    playRound(playerSelection,computerSelection);
      return 'You had ' + playerSelection + ' and the computer had ' + computerSelection + '.'
      + 'So the current score is Player: ' + playerScore + ' and Computer: ' + computerScore + '.'  
}

console.log(game())
console.log(game())
console.log(game())
console.log(game())
console.log(game())
console.log(game())