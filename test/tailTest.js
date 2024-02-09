const assertEqual = require('../assertEqual');
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
assertEqual(tail(words)[0], "Lighthouse");
assertEqual(tail(words).length, (words.length - 1));
//the values of the arrays are not being compared, as they cannot be compared in this way
//instead the length of the 2 arrays or the value at a specific index are compare for equivalency

const words2 = ["Yo Yo"];
assertEqual(tail(words2).length, 0);

const words3 = [];
assertEqual(tail(words3).length, 0);