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