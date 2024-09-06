/**
 * create function that return only the even numbers
 * return the sum of even numbers
 */

function evensNumbersOnly(numbers) {
  const even = [];
  for (const number of numbers) {
    if (number % 2 === 0) {
      console.log(number);
      even.push(number);
    }
  }
  return even;
}

const number = [5, 8, 91, 24, 6];
// const even = evensNumbersOnly(number);
// console.log("even numbers are= ", even);

function someOfEvenNumbers(numbers) {
  let sum = 0;
  for (const number of numbers) {
    if (number % 2 === 0) {
      console.log(number);
      sum = sum + number;
    }
  }
  return sum;
}

const sum = someOfEvenNumbers(number);
console.log("some of the even number = ", sum);
