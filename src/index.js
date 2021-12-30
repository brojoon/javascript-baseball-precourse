import { checkUserInput } from "./utils.js";

export default function BaseballGame() {
  const userInput = document.getElementById("user-input");
  const submitBtn = document.getElementById("submit");
  const result = document.getElementById("result");
  const resetBtn = document.createElement("button");
  resetBtn.innerHTML = "재시작";
  resetBtn.id = "game-restart-button";

  let ComputerInput = MissionUtils.Random.pickNumberInRange(1, 9);

  this.play = function (computerInputNumbers, userInputNumbers) {
    return "결과 값 string";
  };

  function onSubmitBtn() {
    const isError = checkUserInput(userInput.value);
    if (isError < 0) {
      alert("입력값이 잘못되었습니다 !");
      return;
    }
  }

  function onResetBtn() {
    ComputerInput = MissionUtils.Random.pickNumberInRange(1, 9);
    userInput.innerHTML = "";
    result.innerHTML = "";
  }

  onSubmitBtn.addEventListener("click", onSubmitBtn.bind(this));
  resetBtn.addEventListener("click", onResetBtn);
}

BaseballGame();
