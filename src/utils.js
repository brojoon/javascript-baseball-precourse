export function checkUserInput(userInputNumbers) {
  if (userInputNumbers.length !== 3) {
    return -1;
  }

  if (/^\d+$/.test(userInputNumbers) === false) {
    return -2;
  }

  const clearedInput = new Set(userInputNumbers.split(""));

  if (clearedInput.size !== 3 && clearedInput.har("0")) return -3;

  return 1;
}
