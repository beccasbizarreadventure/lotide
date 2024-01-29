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
//assertArraysEqual calls function eqArray to test the equivelency of 2 arrays (input and expected) for length and equivalent value at each index
//logs appropriate message based on return false or true

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    //sets the current letter in the loop as variable letter
    if (letter === ' ') {
      continue;
      //skips adding a key if it is a space
    }
    if (!results[letter]) {
      results[letter] = [];
      results[letter].push(i);
      //if the current character has not been added to the results object as a key, it is added here 
      //the location of the letter in the string is pushed into the array 
    } else {
      results[letter].push(i);
      //if a letter already exists as a key in the results object, the location of the next instance is pushed into the array here
    }
  }
  return results;
};

console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("Levi Laurel").L, [0,5]);