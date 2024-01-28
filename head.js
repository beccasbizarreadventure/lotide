const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️✔️✔️ Assertion Passed: ${actual} === ${expected}`);
  }

  if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }

};

const head = function(array) {
  if (array.length === 0) {
    return undefined;
    //if there are no values in the array given, undefined is returned
  }
  return array[0];
//returns the value of the first index [0] of a given array
};

assertEqual(head([5,6,7]), 5);
//checks that the first value returned is 5
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");