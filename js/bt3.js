array = "The Quick Brown Fox";
var UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var LOWER = "abcdefghijklmnopqrstuvwxyz";
var result = [];

for (var i = 0; i < array.length; i++) {
  if (UPPER.indexOf(array[i]) !== -1) {
    result.push(array[i].toLowerCase());
  } else if (LOWER.indexOf(array[i]) !== -1) {
    result.push(array[i].toUpperCase());
  } else {
    result.push(array[i]);
  }
}
console.log(result.join(""));
