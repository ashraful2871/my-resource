/**
 * objective: write a function to give me the sum of all numbers in an array
 *step 1: declare a function
 * step 2: call check whether the function is called properly
 *step 3: set parameters
 * step 4: pas the parameters, check whether parameter is passed a proper format
 * step 5: do the function task (step by step)
 */

function sumOfNumbers(numbers) {
  let sum = 0;
  for (const number of numbers) {
    console.log(number);
    sum = sum + number;
  }
  return sum;
}
const numbs = [54, 52, 12, 6];

const sum = sumOfNumbers(numbs);
console.log("some of numbers is", sum);
