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

const countLetters = function(givenString) {
  let countObject = {};

  for (let letters of givenString) {
    //iterates over the string givenString for each letter
    if (letters === ' ') {
      continue;
      //removes ' ' as a key and tells the code to constinue
    }
    if (countObject[letters]) {
      //Object[key] notation where each unique letter is a key
      countObject[letters] += 1;
      //Adds 1 to the count for every time a key is found to occur in givenString
    } else {
      countObject[letters] = 1;
      //Default to add 1 every time the key occurs if it only occurs once
    }
  }
  return countObject;
  //loops through the givenString and returns an array with each unique letter, excluding spaces
};

console.log(countLetters("lighthouse in the house"));

const result1 = countLetters('LHL');
assertEqual(result1['L'], 2);
assertEqual(result1['H'], 1);

const result2 = countLetters('Lighthouse Labs');
assertEqual(result2['L'], 2);
assertEqual(result2['i'], 1);
assertEqual(result2['g'], 1);