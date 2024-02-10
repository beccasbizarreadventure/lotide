const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = middle;