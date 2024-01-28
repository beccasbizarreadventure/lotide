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
  let uniqueLetters = [];
  for (letter of givenString) {
    if (!uniqueLetters.includes(letter) && letter !== ' ') {
    uniqueLetters.push(letter);
    }
  }
  return uniqueLetters;
  //loops through the givenString and returns an array with each unique letter, excluding spaces
};

console.log(countLetters("Levi Laurel"));