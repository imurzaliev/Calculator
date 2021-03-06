let currentOperand = "";
let previousOperand = "";
let currentOperation = undefined;

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

function del() {
  currentOperand = currentOperand.slice(0, -1, "");
}

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
  currentOperand = Math.round(computation * 1000) / 1000;
  currentOperation = undefined;
  previousOperand = "";
}

function getDisplayNumber(number) {
  const stringNum = number.toString();
  const integerDigits = parseFloat(stringNum.split(".")[0]);
  const decilamDigits = stringNum.split(".")[1];
  let integerDisplay;
  if (isNaN(integerDigits)) {
    integerDisplay = "";
  } else {
    integerDisplay = integerDigits.toLocaleString("en", {
      maximumFractionDigits: 0,
    });
  }
  if (decilamDigits != null) {
    return `${integerDisplay},${decilamDigits}`;
  } else {
    return integerDisplay;
  }
}

function updateDisplay() {
  if (currentOperand == Infinity) {
    alert("HAVE YOU LOST YOUR MIND? IF SO I'LL HELP YOU FIND IT");
    clear();
  }

  currentOperandScreen[0].innerText = getDisplayNumber(currentOperand);
  if (currentOperation != null) {
    previousOperandScreen[0].innerText = `${previousOperand} ${currentOperation}`;
  } else {
    previousOperandScreen[0].innerText = "";
  }
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

equalsButton.addEventListener("click", () => {
  compute();
  updateDisplay();
});

clearButton.addEventListener("click", () => {
  clear();
  updateDisplay();
});

deleteButton.addEventListener("click", () => {
  del();
  updateDisplay();
});

// For some reason this part is not functioning correctly,
// digits don't show up on the screen until button not pressed
window.addEventListener("keydown", handleKeyboardInput);
function handleKeyboardInput(e) {
  if ((e.key >= 0 && e.key <= 9) || e.key == ".") {
    appendNumber(e.key);
  }
  if (e.key === "=" || e.key === "Enter") compute();
  if (e.key === "Backspace") del();
  if (e.key === "Escape") clear();
  if (e.key === "+" || e.key === "-" || e.key === "x" || e.key === "/")
    chooseOperation(e.key);
}
