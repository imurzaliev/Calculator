const add = (arr) => {
  return arr.reduce((total, currentNum) => (total += currentNum), 0);
};

const substract = (arr) => {
  return arr.reduce((total, currentNum) => (total -= currentNum));
};

const multiply = (arr) => {
  return arr.length
    ? arr.reduce((accumulator, nextNum) => accumulator * nextNum)
    : 0;
};

const divide = (arr) => {
  return arr.length
    ? arr.reduce((accumulator, nextNum) => accumulator / nextNum)
    : 0;
};

const operate = (operator, numbers) => {
  return operator(numbers);
};

let display = [];

const screen = document.getElementsByClassName("results");
const buttons = document.querySelectorAll("button");
function onClick() {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.add("clicked");
      screen[0].innerText = screen[0].innerText.concat(button.value);
      if (button.value == "c") {
        screen[0].innerText = "";
      }
      display = display.concat(button.value);
    }),
      button.addEventListener("transitionend", () => {
        button.classList.remove("clicked");
      });
  });
}
onClick();
