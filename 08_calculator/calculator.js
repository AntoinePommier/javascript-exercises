const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, currentItem) => {
    return total + currentItem;
  }, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, currentItem) => {
    return total * currentItem;
  }, 1);
};

const power = function(a, b) {
  let result = a;

  while (b > 1) {
    result *= a;
    b--;
  }
	return result;
};

const factorial = function(n) {
  if (n == 0) {
    return 1;
  }
  return factorial(n - 1) * n;
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
