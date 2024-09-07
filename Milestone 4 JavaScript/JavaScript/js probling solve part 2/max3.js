const jim = 50;
const tim = 80;
const kim = 60;

// if (jim > tim && jim > kim) {
//   console.log("jim is boss");
// } else if (tim > jim && tim > kim) {
//   console.log("kim is the boss");
// } else {
//   console.log("kim is the boss ");
// }

// inside of function
// function maxOfThree(num1, num2, num3) {
//   if (num1 > num2 && num1 > num3) {
//     return num1;
//   } else if (num2 > num1 && num2 > num3) {
//     return num2;
//   } else {
//     return num3;
//   }
// }

// const max = maxOfThree(50, 80, 60);
// console.log(max);

const max = Math.max(12, 45, 87, 69);
console.log("max using Math.max", max);
