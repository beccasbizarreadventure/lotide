const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (letter === ' ') {
      continue;
    }
    if (!results[letter]) {
      results[letter] = [];
      results[letter].push(i);
    } else {
      results[letter].push(i);
    }
  }
  return results;
};

console.log(letterPositions("lighthouse in the house"));