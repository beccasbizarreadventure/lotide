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

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === false) {
    console.log(`❌❌❌ Assertion Failed: ${array1} !== ${array2}`);
  }
  if (eqArrays(array1, array2) === true) {
    console.log(`✔️✔️✔️ Assertion Passed: ${array1} === ${array2}`);
  }
};

const middle = function(array) {
  let middleArray = [];
  if (array.length % 2 !== 0) {
    const middle = Math.floor(array.length / 2);
    const middleValue = array[middle];
    middleArray.push(middleValue);
  }
  if (array.length % 2 === 0) {
    const middleFirst = Math.floor((array.length - 1) / 2);
    const middleFirstValue = array[middleFirst];
    const middleSecond = (array.length / 2);
    const middleSecondValue = array[middleSecond];
    middleArray.push(middleFirstValue, middleSecondValue);
  }
  if (array.length < 3) {
    return [];
  }
  return middleArray;
};

console.log(middle([])); 
console.log(middle([1, 2, 3])); 
console.log(middle([1, 2, 3, 4, 5])); 
console.log(middle([1, 2, 3, 4])); 
console.log(middle([1, 2, 3, 4, 5, 6])); 

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])
assertArraysEqual(middle([1, 2, 3]), [2]); 