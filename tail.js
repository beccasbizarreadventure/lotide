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
  } else {
    return [];
  }
  
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
assertEqual(tail(words)[0], "Lighthouse");
assertEqual(tail(words).length, (words.length - 1));

const words2 = ["Yo Yo"];
assertEqual(tail(words2).length, 0);

const words3 = [];
assertEqual(tail(words3).length, 0);