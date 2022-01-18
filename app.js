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
console.log(operate(add, [2, 4, 3, 1]));
