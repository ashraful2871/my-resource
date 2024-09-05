//even
function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// console.log(isEven(5));
// console.log(isEven(515));
// console.log(isEven(110));
// console.log(isEven(100));

//Odd
function isOdd(number) {
  if (number % 2 === 1) {
    return true;
  }
  return false;
}
console.log(isOdd(10));
console.log(isOdd(15));
console.log(isOdd(21));
console.log(isOdd(29));
