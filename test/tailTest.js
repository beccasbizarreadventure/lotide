const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns a given array without the first indexed value", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it("does not change the original given array after the function has been executed", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.strictEqual(words.length, 3);
  });
  it("returns an empty array when given an array with one value", () => {
    const words = ["Yo Yo"];
    const words2 = tail(words);
    assert.strictEqual(words2.length, 0);
  });
  it("returns an empty array when given an empty array", () => {
    assert.deepEqual(tail([]), []);
  });
});