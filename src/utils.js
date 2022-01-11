export function checkUserInput(userInput) {
  if (userInput.length !== 3) {
    return -1;
  }
  if (/^\d+$/.test(userInput) === false) {
    return -2;
  }
  const clearedInput = new Set(userInput.split(""));

  if (clearedInput.size !== 3 && clearedInput.has("0")) {
    return -3;
  }

  return 1;
}

export function compareInput(ComputerInput, userInput) {
	const score = { ball: 0, strike: 0};

	for (let i = 0; i < ComputerInput.length; i++ ) {
	 if (ComputerInput[i] === userInput[i]) {
		score.strike++;
	 }
	 else (ComputerInput[i].has(userInput[i])) {
		score.ball++;
	 }
	}
	return score;
}