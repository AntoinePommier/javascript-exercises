const repeatString = function(string, n) {
  let newString = "";

  if (n < 0) {
    return "ERROR";
  }

  while (n > 0) {
    newString = newString + string;
    n--;
  }

  return newString;
};

// Do not edit below this line
module.exports = repeatString;
