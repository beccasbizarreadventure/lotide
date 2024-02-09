const tail = function(array) {
  if (array.length > 1) {
    return array.slice(1);
    //returns the original array minus the value at index [0] (slice starts at index [1])
  } else {
    return [];
    //returns an empty array for arrays with 1 or less values
  }
  
};

module.exports = tail;