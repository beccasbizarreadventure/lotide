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

const findKey = function(givenObject, callback) {
  const keysArray = Object.keys(givenObject);
  for (let key of keysArray) {
    const objectToEvaluate = givenObject[key];
    //object to pass to callback function => the right side of the individual [key, value] pairs
    if (callback(objectToEvaluate)) {
      return key;
      //the left hand side of the [key, value] pair
    }
  }
};

const result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);
console.log(result);

assertEqual(result, "noma");