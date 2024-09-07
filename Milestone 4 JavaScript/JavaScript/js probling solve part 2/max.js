const disha = 54;
const salman = 96;

if (disha > salman) {
  console.log("disha will ge the strawberry");
} else {
  console.log("salman will get the strawberry");
}

function getMax(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
const max = getMax(45, 88);
const max2 = getMax(45, 98);
const ultimate = getMax(max, max2);

console.log("max of tow is ", ultimate);
