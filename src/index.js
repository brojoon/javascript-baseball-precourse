import { checkUserInput, compareInput, makeScore, showScoreResult } from "./utils.js";

export default function BaseballGame() {
  const ERROR = '🚨 입력이 잘못되었습니다! 🚨';
  const userInput = document.getElementById("user-input");
  const submitBtn = document.getElementById("submit");
  const resultDiv = document.getElementById("result");
  const resetBtn = document.createElement("button");
  resetBtn.innerHTML = "재시작";
  resetBtn.id = "game-restart-button";


  let ComputerInput = MissionUtils.Random.pickNumberInRange(1, 9);
  userInput.focus();

  this.play = function (computerInputNumbers, userInputNumbers) {
    return makeScore(compareInput(computerInputNumbers, userInputNumbers)); 
  };

  function onSubmitUserInput() {
    if(!checkUserInput(userInput.value)) {
      alert(ERROR);
      return;
    }
    userInput.value ="";
    const resultString = play(ComputerInput, userInputNumbers);
    showScoreResult(resultString, resultDiv, resetBtn);
    
  }
  submitBtn.addEventListener('click', onSubmitUserInput);
  userInput.addEventListener('resetBtn', onClickResetBtn);


}

new BaseballGame(); 