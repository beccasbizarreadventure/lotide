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

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === false) {
    console.log(`❌❌❌ Assertion Failed: ${array1} !== ${array2}`);
  }
  if (eqArrays(array1, array2) === true) {
    console.log(`✔️✔️✔️ Assertion Passed: ${array1} === ${array2}`);
  }
};

const without = function(source, itemsToRemove) {
  let uniqueSource = []
  for (let value of source) {
  if (!itemsToRemove.includes(value)) {
      uniqueSource.push(value);
    }
  }
  console.log(uniqueSource);
};

without([1, 2, 3], [1]); 
without(["1", "2", "3"], [1, 2, "3"]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 
assertArraysEqual(words, ["hello", "world", "lighthouse"]);