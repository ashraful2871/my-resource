//12 inch 1 feet

function inchToFeet(inch) {
  const feet = inch / 12;
  return feet;
}
// const myHeight = inchToFeet(78);
// console.log(myHeight);

// 75
function inchToFeet2(inch) {
  const feetFraction = inch / 12;
  const feetNumber = parseInt(feetFraction);
  const inchRemaining = inch % 12;
  const result = feetNumber + " ft " + inchRemaining + " inch ";
  return result;
}

const myHeight2 = inchToFeet2(75);
// console.log(myHeight2);

//mile to kilo
function mileToKilometer(mile) {
  const kilo = mile * 1.60934;
  return kilo;
}
const result = mileToKilometer(10);

console.log(result);

//kilo to mile
function kiloToMile(kilo) {
  const mile = kilo * 0.62137119;
  return mile;
}

const result2 = kiloToMile(10);
console.log(result2);
