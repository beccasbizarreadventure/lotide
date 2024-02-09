const head = function(array) {
  if (array.length === 0) {
    return undefined;
    //if there are no values in the array given, undefined is returned
  }
  return array[0];
//returns the value of the first index [0] of a given array
};

module.exports = head;