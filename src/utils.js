export function checkUserInput(userInput) {
  if (userInput.length !== 3) {
    return false;
  }
  if (/^\d+$/.test(userInput) === false) {
    return false;
  }
  const clearedInput = new Set(userInput.split(""));

  if (clearedInput.size !== 3 && clearedInput.has("0")) {
    return false;
  }

  return true;
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

export function makeScore(score) {
  const resultString = "";
  if (score.ball) {
    resultString += `${score.ball}볼 `;
  }
  if (score.strike) {
    resultString += `${score.strike}스트라이크`;
  }
  if (resultString.length === 0) {
    resultString += '낫싱';
  }
  
  return resultString;
}