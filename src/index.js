export default function BaseballGame() {
  const userInput = document.getElementById("user-input");
  const submitBtn = document.getElementById("submit");
  const result = document.getElementById("result");
  const resetBtn = document.createElement("button");
  resetBtn.innerHTML = "재시작";
  resetBtn.id = "game-restart-button";

  this.play = function (computerInputNumbers, userInputNumbers) {
    return "결과 값 string";
  };
}
