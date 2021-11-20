// creating a rock paper scissors game

const moves = ["Rock","Paper","Scissors"];
function computerPlay(){
  return moves[Math.floor(Math.random() * 3)];
}
computerPlay()

function playRound(playerSelection, computerSelection) {
  // return a string stating who won the round ie "You lost! Paper beats Rock!"
  if (playerSelection == 'rock' && computerSelection == 'Scissors') {
    return 'You win! You had: ' + playerSelection + ' beats ' + computerSelection.toLowerCase();
  } 
  else if (playerSelection == 'rock' && computerSelection == 'Paper') {
    return 'You lose. Computer had: ' + computerSelection.toLowerCase() + ' beats ' + playerSelection;
  } 
  else if (playerSelection == 'PAPER' && computerSelection == 'Rock') {
    return 'You win! You had: ' + playerSelection + ' beats ' + computerSelection.toLowerCase();
  } 
  else if (playerSelection == 'PAPER' && computerSelection == 'Scissors') {
    return 'You lose. Computer had: ' + computerSelection.toLowerCase() + ' beats ' + playerSelection;
  } 
  else if (playerSelection == 'SCISSORS' && computerSelection == 'Paper') {
    return 'You win! You had: ' + playerSelection + ' beats ' + computerSelection.toLowerCase();
  } 
  else if (playerSelection == 'SCISSORS' && computerSelection == 'Rock') {
    return 'You lose. Computer had: ' + computerSelection.toLowerCase() + ' beats ' + playerSelection;
  } 
  else (playerSelection.toLowerCase() == computerSelection) 
    return 'You tied. ' + playerSelection + ' is the same as ' + computerSelection.toLowerCase();
  
} 
const playerSelection = prompt("Rock, Paper, or Scissors? ").toLowerCase();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

function game() {
  playRound(playerSelection,computerSelection);
  return 'The winner of this round is';
}

console.log(game());