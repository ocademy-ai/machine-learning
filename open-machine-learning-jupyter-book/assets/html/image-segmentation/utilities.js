// utilities.js


// Round a number, given a precision value
const round = function(number, precision) {
      return Math.round(number * (10 ** precision)) / (10 ** precision);
}

// Deep clone a JSON object (excluding methods)
const clone = function(object) {
      return JSON.parse(JSON.stringify(object));
}

// Map number in one range to another range
// https://stackoverflow.com/a/23202637
function map(num, in_min, in_max, out_min, out_max) {
      return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

console.log("utilities.js loaded");