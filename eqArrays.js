const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  //if the length of the 2 arrays is not the same then it returns false as the arrays are not equivalent
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
    //if the value and type of value at each index [i] are not the same then it also returns false
  }
  return true;
};

module.exports = eqArrays;