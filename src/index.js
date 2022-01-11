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

  };

}

