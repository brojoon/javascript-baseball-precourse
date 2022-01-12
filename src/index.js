import { checkUserInput, compareInput, makeScore, showScoreResult } from "./utils.js";

export default function BaseballGame() {
  const ERROR = '🚨 입력이 잘못되었습니다! 🚨';
  const userInput = document.getElementById("user-input");
  const submitBtn = document.getElementById("submit");
  const resultDiv = document.getElementById("result");
  const resetBtn = document.createElement("button");
  resetBtn.innerHTML = "재시작";
  resetBtn.id = "game-restart-button";

  let ComputerInput = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3); 
  console.log('ComputerInput: ', ComputerInput);
  userInput.focus();

  this.play = function (computerInputNumbers, userInputNumbers) {
    return makeScore(compareInput(computerInputNumbers, userInputNumbers)); 
  };

  function onSubmitUserInput(e) {
    e.preventDefault();
    if(!checkUserInput(userInput.value)) {
      alert(ERROR);
      return;
    }
    const resultString = this.play(ComputerInput, userInput.value);
    showScoreResult(resultString, resultDiv, resetBtn);
    userInput.value ="";
    userInput.focus();
  }

  function onClickResetBtn() {
    ComputerInput = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    console.log('ComputerInput: ', ComputerInput);
    resultDiv.innerHTML = "";
    userInput.value ="";
    userInput.focus();
  
  }
  submitBtn.addEventListener('click', onSubmitUserInput.bind(this));
  resetBtn.addEventListener('click', onClickResetBtn);


}

new BaseballGame(); 