// Generates computer's move
function computerPlay() {
  let play = 'none';
  switch (Math.floor((Math.random() * 3))) {
    case 0:
      play = 'Rock';
      break;
    case 1:
      play = 'Scissors';
      break;
    case 2:
      play = 'Paper';
      break;
  }
  return play;
}


function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'Paper') {
    return "You Lose! Paper beats Rock";
  } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'Scissors') {
    return "You Lose! Scissors beats Paper";
  } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'Rock') {
    return "You Lose! Rock beats Scissors";
  } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'Scissors') {
    return "You Win! Rock beats Scissors";
  } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'Rock') {
    return "You Win! Paper beats Rock";
  } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'Paper') {
    return "You Win! Scissors beats Paper";
  } else {
    return "It's a Tie!";
  }
}


function game() {
  let playerScore = 0;
  let computerScore = 0;
  let result = '';
  let playerPlay = '';
  for (let i = 0; i < 5; i++) {
    do {
      playerPlay = window.prompt('Enter rock, paper, or scissors.');
    } while (!(playerPlay.toLowerCase() == 'rock' || playerPlay.toLowerCase() == 'paper' || playerPlay.toLowerCase() == 'scissors'))
    result = playRound(playerPlay, computerPlay());
    console.log(result);
    if (result.includes("Win!")) {
      playerScore += 1;
    } else if (result.includes("Lose!")) {
      computerScore += 1;
    }
  }
  console.log(`Player: ${playerScore} | Computer: ${computerScore}`);
  if (playerScore > computerScore) {
    console.log("You Won!");
  } else if (playerScore < computerScore) {
    console.log("You Lose!");
  } else {
    console.log("It's a tie!");
  }
}

game();