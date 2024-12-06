const sumAll = function(a, b) {
  let sum = 0;
  let first = a;
  let second = b;

  if (a > b) {
    first = b;
    second = a;
  }

  if (a < 0 || b < 0 || typeof(a) != "number" || typeof(b) != "number" ||
!Number.isInteger(a) || !Number.isInteger(b)) {
    return "ERROR";
  }

  while (first <= second) {
    sum += first;
    first++;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
