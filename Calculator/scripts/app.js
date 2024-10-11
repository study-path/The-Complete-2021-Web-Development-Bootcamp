const defaultResult = 0;
currentResult = defaultResult;

function getUserNumberInput() {
  return parseInt(userInput.value);
}
function createWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescr = `${currentResult} ${operator} ${enteredNumber}`;
  outputResult(currentResult, calcDescr);
}

function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult + enteredNumber; //+ convert as parseInt
  createWriteOutput("+", initialResult, enteredNumber);
}

function substract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult - enteredNumber; //+ convert as parseInt
  createWriteOutput("-", initialResult, enteredNumber);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult - enteredNumber; //+ convert as parseInt
  createWriteOutput("*", initialResult, enteredNumber);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult - enteredNumber; //+ convert as parseInt
  createWriteOutput("/", initialResult, enteredNumber);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", substract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
