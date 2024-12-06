const removeFromArray = function(...args) {
  let array = args[0]

   for (let i = 1 ; args[i]; i++) {
    for (let j = 0; array[j]; j++) {
      if (args[i] === array[j]){
        array.splice(j, 1);
        j--;
      }
    }
   }

   return array;
};

// Do not edit below this line
module.exports = removeFromArray;
