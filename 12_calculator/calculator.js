const add = function(...numbers) {
  return numbers.reduce((sum, currentValue) => sum + currentValue)
}

const subtract = function(...numbers) {
  return numbers.reduce((sum, currentValue) => sum - currentValue)
};

const sum = function(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
	return numbers.reduce((sum, currentValue) => sum + currentValue)
};

const multiply = function(numbers) {
  return numbers.reduce((sum, currentValue) => sum * currentValue)
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(number) {
  let sum = 1;
	for (let index = 1; index <= number; index++) {
    sum *= index;
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
