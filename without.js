const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(input, expected) {
  if (eqArrays(input, expected) === false) {
    console.log(`❌❌❌ Assertion Failed: ${input} !== ${expected}`);
  }
  if (eqArrays(input, expected) === true) {
    console.log(`✔️✔️✔️ Assertion Passed: ${input} === ${expected}`);
  }
};
//assertArraysEqual calls function eqArray to test the equivelency of 2 arrays (input and expected) for length and equivalent value at each index
//logs appropriate message based on return false or true

const without = function(source, itemsToRemove) {
  let uniqueSource = [];
  for (let value of source) {
    //creates a for loop to loop through the values of the source array
    if (!itemsToRemove.includes(value)) {
      //if the current value being evaluated in the loop is NOT equal to a value in itemsToRemove then it is pushed to the empty array uniqueSource
      //this creayes a new array containing only values that are different from itemsToRemove
      uniqueSource.push(value);
    }
  }
  return uniqueSource;
};

console.log(without([1, 2, 3], [1])); //returns an array containing only [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"]));

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);