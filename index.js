const state = {
  bool: true, level: 1, range: 2,
  score: 0, random: null, name: '',
};

function init() {
  setUsername()
  while (state.bool) {
    displayLevel();
    createRandom(state.range);
    checkGuess(), 3000
  }
}

init()

function setUsername() {
  const name = prompt("Enter your username: ");
  state.name = name;
}

function displayLevel() {
  alert(`LEVEL ${state.level}`)
}

function createRandom(range) {
  const input = Math.floor(Math.random() * range);
  const guessedNumber = parseInt(input);
  state.random = guessedNumber || guessedNumber + 1;
}

function checkGuess() {
  let guess = prompt(`
  Hello ${state.name || 'player'}, guess a number between 1 and ${state.range}:
  `);
  guess = parseInt(guess); 

  if (guess === state.random) {
    state.score += 1;
    alert(`Correct! You score is ${state.score}.`);
    state.level += 1;
    state.range += 1;
  } else {
    alert(`Game over, the number is ${state.random}. You score is ${state.score}.`);
    state.bool = false;
  }
}