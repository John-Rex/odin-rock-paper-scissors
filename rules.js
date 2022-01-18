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