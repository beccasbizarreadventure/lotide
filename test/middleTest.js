const middle = require('../middle');
//const assertArraysEqual = require('../assertArraysEqual');
const { assert } = require('chai');

describe('#middle', () => {
  it("returns an empty array if there are less than 3 value in the given array", () => {
    assert.deepEqual(middle([]), []);
  });
  it("returns the middle value of a given array when the length of the given array is an odd number", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns the two middle values of a given array when the length of the given array is an even number", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

});