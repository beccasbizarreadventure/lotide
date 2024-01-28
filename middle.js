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

const middle = function(array) {
  let middleArray = [];
  if (array.length < 3) {
//returns an empty array if there are less than 3 values in the middle array; there is no middle of 0, 1 or 2
    return [];
  }
  if (array.length % 2 !== 0) {
    const middle = Math.floor(array.length / 2);
    const middleValue = array[middle];
    middleArray.push(middleValue);
//this if statement checks if there are an odd number of values in the array
//then it halves the length of the array and rounds it down to the nearest whole number 
//this gives the index of the middle value, which is then stored in variable middleValue and pushed to the empty middleArray
  }
  if (array.length % 2 === 0) {
    const middleFirst = Math.floor((array.length - 1) / 2);
    const middleFirstValue = array[middleFirst];
    const middleSecond = (array.length / 2);
    const middleSecondValue = array[middleSecond];
    middleArray.push(middleFirstValue, middleSecondValue);
  }
//this if statement checks if there are an even number of values in the array
//it halves the length of the array and rounds it down to the nearest whole number to get the first middle value (ex: an array with 6 values would return 2.5 => 2, so the first value as at index 2)
//the second middle value is just half of the array length (ex: an array with 6 values would return 3, so the second value as at index 3)
//the middle values are stored and then pushed to middleArray
  return middleArray;
};

console.log(middle([]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
//tests that middle(array) returns the correct middle array [3, 4]
assertArraysEqual(middle([1, 2, 3]), [2]);