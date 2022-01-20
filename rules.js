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

// Game logic to determine who wins
function determineVictor(playerSelection, computerSelection) {
  if ((playerSelection == 'Rock' && computerSelection == 'Paper') || 
      (playerSelection == 'Paper' && computerSelection == 'Scissors') ||
      (playerSelection == 'Scissors' && computerSelection == 'Rock')) {
      return 0; // Lose
  } else if ((playerSelection == 'Rock' && computerSelection == 'Scissors') || 
             (playerSelection == 'Paper' && computerSelection == 'Rock') ||
             (playerSelection == 'Scissors' && computerSelection == 'Paper')){
      return 1; // Win
  } else {
      return 2; // Tie
  }
}

function playRound(playerSelection, computerSelection) {
  // Formats playerSelection for determineVictor() and for final output
  playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
  switch (determineVictor(playerSelection, computerSelection)) {
    case 0:
      return `You Win! ${playerSelection} beats ${computerSelection}`;
    case 1:
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
    case 2:
      return `It's a Tie!`;
  }
}


function game() {
  let playerScore = 0;
  let computerScore = 0;
  let result = '';
  let playerPlay = '';
  for (let i = 0; i < 5; i++) {
    // Gets player's move
    playerPlay = window.prompt('Enter rock, paper, or scissors.');
    while (!(playerPlay.toLowerCase() == 'rock' || playerPlay.toLowerCase() == 'paper' || playerPlay.toLowerCase() == 'scissors')) {
      alert("Invalid move. Check spelling.");
      playerPlay = window.prompt('Enter rock, paper, or scissors.');
    }
    result = playRound(playerPlay, computerPlay());
    console.log(result);
    if (result.includes("Win!")) {
      playerScore += 1;
    } else if (result.includes("Lose!")) {
      computerScore += 1;
    }
  }
  // Prints results
  console.log(`Player: ${playerScore} | Computer: ${computerScore}`);
  if (playerScore > computerScore) {
    console.log("You Won!");
  } else if (playerScore < computerScore) {
    console.log("You Lose!");
  } else {
    console.log("It's a Tie!");
  }
}

game();