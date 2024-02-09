const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
// eqArrays returns either a "true" or "false" value to be compared to the expected "true" or "false" value in assertEqual
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3", "4"]), false);