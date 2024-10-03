// Instructions: Use lodash's reduce function to get the product of all numbers in the array.

const _ = require("lodash");

const numbers = [1, 2, 3, 4];

// your code here
const product = _.reduce(numbers, (sum, cur) => {
  return cur * sum;
});

console.log(product); // Expected output: 24
