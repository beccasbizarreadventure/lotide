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

const flatten = function(array) {
  let flatArray = [];
  for (let i = 0; i < array.length; i++) {
    const arrValue = array[i];
    if(!Array.isArray(arrValue)) {
      flatArray.push(arrValue);
    }
    for (let k = 0; k < arrValue.length; k++) {
      flatArray.push(arrValue[k])
    }
  }
  return flatArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));