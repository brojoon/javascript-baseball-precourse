import { checkUserInput } = from './utils.js';


export default function BaseballGame() {
  const userInput = document.getElementById("user-input");
  const submitBtn = document.getElementById("submit");
  const result = document.getElementById("result");
  const resetBtn = document.createElement("button");
  resetBtn.innerHTML = "재시작";
  resetBtn.id = "game-restart-button";

  this.play = function (computerInputNumbers, userInputNumbers) {
    if (!checkUserInput(userInputNumbers)) {
      alert("입력값이 잘못되었습니다 !");
      return;
    }


    return "결과 값 string";
  };
}
