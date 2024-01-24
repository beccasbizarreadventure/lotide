const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️✔️✔️ Assertion Passed: ${actual} === ${expected}`);
  }

  if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }

};

const tail = function(array) {
  let newTail = [];
  for (let i = 1; i < array.length; i++) {
    newTail.push(array[i]);
  }
  return newTail;
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

const words2 = ["Yo Yo"];
tail(words2);
assertEqual(words2.length, 1);

const words3 = [];
tail(words3);
assertEqual(words3.length, 3);