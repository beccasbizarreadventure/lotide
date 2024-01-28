const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️✔️✔️ Assertion Passed: ${actual} === ${expected}`);
  }

  if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }

};

const tail = function(array) {
  if (array.length > 1) {
    return array.slice(1);
    //returns the original array minus the value at index [0] (slice starts at index [1])
  } else {
    return [];
    //returns an empty array for arrays with 1 or less values
  }
  
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
assertEqual(tail(words)[0], "Lighthouse");
assertEqual(tail(words).length, (words.length - 1));
//the values of the arrays are not being compared, as they cannot be compared in this way
//instead the length of the 2 arrays or the value at a specific index are compare for equivalency

const words2 = ["Yo Yo"];
assertEqual(tail(words2).length, 0);

const words3 = [];
assertEqual(tail(words3).length, 0);