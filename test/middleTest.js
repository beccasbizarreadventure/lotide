const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

console.log(middle([]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
//tests that middle(array) returns the correct middle array [3, 4]
assertArraysEqual(middle([1, 2, 3]), [2]);