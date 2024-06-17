let number = Number(prompt("Nhập vào một số"));
let array = number.toString();
let result = [array[0]];

for (let i = 1; i < array.length; i++) {
  if (array[i - 1] % 2 === 0 && array[i] % 2 === 0) {
    result.push("-", array[i]);
  } else {
    result.push(array[i]);
  }
}
console.log(result.join(""));

// var num = window.prompt();
// var str = num.toString();
// var result = [str[0]];

// for (var x = 1; x < str.length; x++) {
//   if (str[x - 1] % 2 === 0 && str[x] % 2 === 0) {
//     result.push("-", str[x]);
//   } else {
//     result.push(str[x]);
//   }
// }
// console.log(result.join(""));
