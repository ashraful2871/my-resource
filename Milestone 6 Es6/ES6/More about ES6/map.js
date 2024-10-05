// map=> lop through each elements of the array and do the operation that you pass the call back function and hold the results from the each operation in an array and finally returns you the array.

const numbers = [4, 5, 2, 8, 10];

function doubleIt(num) {
  //   console.log(num);
  return num * 2;
}

const double2 = (n) => n * 2;

const result = numbers.map(doubleIt);
// console.log(result);

const output = numbers.map(double2);
// console.log(output);

const output2 = numbers.map((n) => n * 2);
console.log(output2);

// const doubled = [];
// for (const num of numbers) {
//   console.log(num);
//   const double = num * 2;
//   doubled.push(double);
// }
// console.log(doubled);
