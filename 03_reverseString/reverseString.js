const reverseString = function(string) {
  let length = string.length - 1
  let newString = ""

  while (length >= 0) {
  newString += string[length];
    length--;
  }

  return newString;
};

// Do not edit below this line
module.exports = reverseString;
