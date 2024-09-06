/***
 * function takes an array as parameter
 * give me thr average of the the odd number in the array
 */

/**
 * 1. put odd numbers is an array
 *
 */

function oddAvg(numbers) {
  const odds = [];
  for (const number of numbers) {
    if (number % 2 === 1) {
      odds.push(number);
    }
  }

  //odds is the array that contains only odd numbers
  //   console.log(odds);
  let sum = 0;
  for (const number of odds) {
    sum = sum + number;
  }
  const count = odds.length;
  const avg = sum / count;
  return avg;
}

const numbers = [42, 13, 58, 65, 81, 96, 7];
const avg = oddAvg(numbers);
console.log("average of the odd numbers is :", avg);
