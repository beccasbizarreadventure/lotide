const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
const words = ["Solstice", "Gummy Bear", "Plume", "Tulin", "Lucky Charms", "Frost Bite", "Thundaga"];
const results1 = map(words, word => word[0]);
console.log(results1);