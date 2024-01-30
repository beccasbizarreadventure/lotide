const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  //if the length of the 2 arrays is not the same then it returns false as the arrays are not equivalent
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
    //if the value and type of value at each index [i] are not the same then it also returns false
  }
  return true;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️✔️✔️ Assertion Passed: ${actual} === ${expected}`);
  }
  // if the actual inputted value is equivalent to the expected, it will print a positive message
  if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
// if the actual inputted value is NOT equivalent to the expected, it will print a negative message
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const object1Array = Object.keys(object1);
  const object2Array = Object.keys(object2);
  if (object1Array.length !== object2Array.length) {
    return false;
    //automatically returns false if the 2 array lengths are not equal
  }
  for (let key of object1Array) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
      //determines if the value @ object[key] is a nested array and evaluates it seperately
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};