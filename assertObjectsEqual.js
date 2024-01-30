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

const assertObjectsEqual = function(actualObject, expectedObject) {
  const inspect = require('util').inspect;
  if (eqObjects(actualObject, expectedObject) === false) {
    console.log(`❌❌❌ Assertion Failed: ${inspect(actualObject)} !== ${inspect(expectedObject)}`);
    //inspect reads a returns the individual [key, value] pairs in an object
  }
  if (eqObjects(actualObject, expectedObject) === true) {
    console.log(`✔️✔️✔️ Assertion Passed: ${inspect(actualObject)} === ${inspect(expectedObject)}`);
  }
};

assertObjectsEqual({a:"1", b:"2", c:"3"}, {a:"1", b:"2", c:"3"}); //true
assertObjectsEqual({a:"1", b:"2", c:"3"}, {a:"1", b:"2", c:3}); //false
assertObjectsEqual({a:"1", b:"2", c:"3"}, {a:"1", b:"2", c:"3", d:"4"}); //false
assertObjectsEqual({a:"1", b:"2", c:"3"}, {b:"1", a:"2", c:"3"}); //false