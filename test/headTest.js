const assertEqual = require('../assertEqual');
const head = require('../head');

assertEqual(head([5,6,7]), 5);
//checks that the first value returned is 5
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");