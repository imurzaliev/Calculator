const add = (arr) => {
  return arr.reduce((total, currentNum) => (total += currentNum), 0);
};
console.log(add([2, 4, 3, 1]));

const substract = (arr) => {
  return arr.reduce((total, currentNum) => (total -= currentNum));
};
console.log(substract([2, 4, 3, 1]));

const multiply = (arr) => {
  return arr.length
    ? arr.reduce((accumulator, nextNum) => accumulator * nextNum)
    : 0;
};
console.log(multiply([2, 2, 2]));

const divide = (arr) => {
  return arr.length
    ? arr.reduce((accumulator, nextNum) => accumulator / nextNum)
    : 0;
};
console.log(divide([2, 2, 2]));
