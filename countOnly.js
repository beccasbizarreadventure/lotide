const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️✔️✔️ Assertion Passed: ${actual} === ${expected}`);
  }
  // if the actual inputted value is equivalent to the expected, it will print a positive message
  if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
// if the actual inputted value is NOT equivalent to the expected, it will print a negative message
};

const countOnly = function(allItems, itemsToCount) {
  const results = {};
  //define empty array to contain results
  //only interested in values defined as TRUE in itemsToCount
  for (const item of allItems) {
    //loop through each item contained in the array allItems
    if (itemsToCount[item]) {
      //checks if the current item being called (for example sake "Karl") is contained in the array itemsToCheck
      if (results[item]) {
        results[item] += 1;
      //adds a +1 to the count for every instance the current item called is contained within allItems
      } else {
        results[item] = 1;
      //if the item only occurs once, then 1 is returned
      }
    }
  }
  return results;
};


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
//undefined bc even though it is a true value in items to count, it is not contained in the allItems array
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
//is undefined because, even though it is in allItems, in the itemsToCount array it equals False and only true values are being counted in the results array

module.exports = countOnly;