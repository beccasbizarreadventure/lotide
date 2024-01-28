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
//loops through the first level of the array
    const arrValue = array[i];
    if (!Array.isArray(arrValue)) {
      flatArray.push(arrValue);
//catches values that are not type array and pushes them to empty the array
    }
    for (let k = 0; k < arrValue.length; k++) {
//loops through the second level of the arrays 
      flatArray.push(arrValue[k]);
//pushes those values to the empty array
    }
  }
  return flatArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])