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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
const words = ["Solstice", "Gummy Bear", "Plume", "Tulin", "Lucky Charms", "Frost Bite", "Thundaga"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['S', 'G', 'P', 'T', 'L', 'F', 'T']);
const results2 = map(words, word => word.length);
assertArraysEqual(results2, [8, 10, 5, 5, 12, 10, 8]);

module.exports = map;