const assertArraysEqual = require('../assertArraysEqual');

//assertArraysEqual calls function eqArray to test the equivelency of 2 arrays (input and expected) for length and equivalent value at each index
//logs appropriate message based on return false or true
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3", "4"]);