# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @beccasbizarreadventure/lotide`

**Require it:**

`const _ = require('@beccasbizarreadventure/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: compares two single-level arrays and logs a pass/fail assertion based on exact equivalency.
* `assertEqual`: compares two numbers or strings and logs a pass/fail assertion based on exact equivalency.
* `assertObjectsEqual`: compares two objects and logs a pass/fail assertion based on exact equivalency.
* `countLetters`: takes a string and counts the instance of each unique letter in the string.
* `countOnly`: takes an array of strings and an object and counts the instances of the true values identified in the object that are contained in the given array.
* `eqArrays`: compares two single-level arrays and returns 'true' or 'false' based on exact equivalency. 
* `eqObjects`: compares two objects and returns 'true' or 'false' based on exact equivalency. 
* `findKey`: takes an object and a callback function and returns the key of the first instance where the callback function returns a truthy value. 
* `findKeyByValue`: takes and object and a value and returns the key of the first instance of the given value.
* `flatten`: creates a single-level array from a two-level array.
* `head`: returns the first value of an array.
* `letterPositions`: takes a string and returns the indexes of a specified letter in that string.
* `map`: takes an array and a callback function and returns a new array from the results of the callback function.
* `middle`: returns the middle value(s) of an array.
* `tail`: returns all values of an array, except the first value.
* `takeUntil`: takes an array and a callback function and pushes items into a new array until the callback function returns a truthy value.
* `without`: takes two single-level arrays, removes the items in array one that are common to array two, and returns a new array of the remaining items.