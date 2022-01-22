let currentOperand = "";
let previousOperand = "";
let currentOperation = undefined;
let clearScreen = false;

const currentOperandScreen = document.getElementsByClassName("current-operand");
const previousOperandScreen =
  document.getElementsByClassName("previous-operand");
const numberButtons = document.querySelectorAll("[data-digit]");
const operationButtons = document.querySelectorAll("[data-sign]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const clearButton = document.querySelector("[data-clear]");

function clear() {
  currentOperand = "";
  previousOperand = "";
  currentOperation = undefined;
}

function del() {}

function appendNumber(number) {
  if (number === "." && currentOperand.includes(".")) return;
  currentOperand += number;
}

function chooseOperation(operation) {
  if (currentOperand === "") return;
  if (previousOperand !== "") {
    compute();
  }
  currentOperation = operation;
  previousOperand = currentOperand;
  currentOperand = "";
}

function compute() {
  let computation;
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return;
  switch (currentOperation) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "x":
      computation = prev * current;
      break;
    case "/":
      computation = prev / current;
      break;
    default:
      return;
  }
  currentOperand = computation;
  operation = undefined;
  previousOperand = "";
}

function updateDisplay() {
  currentOperandScreen[0].innerText = currentOperand;
  previousOperandScreen[0].innerText = previousOperand;
}

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    appendNumber(button.value);
    updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    chooseOperation(button.value);
    updateDisplay();
  });
});

equalsButton.addEventListener("click", (button) => {
  compute();
  updateDisplay();
});
