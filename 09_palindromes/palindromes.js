const palindromes = function (arr) {
  arr = arr
  .toLowerCase()
  .replace(/\W/g, '');

  return (arr == arr.split('').reverse().join(''));
};

// Do not edit below this line
module.exports = palindromes;
