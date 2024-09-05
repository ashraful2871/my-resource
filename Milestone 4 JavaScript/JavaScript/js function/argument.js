function double(number) {
  const double = number * 2;
  console.log(number, "double is = ", double);
}

console.log("i will call  the function");
double(5);
console.log("------------");
double(88);
console.log("------------");
double(65);
console.log("------------");
double(405);
console.log("------------");
const number = 101;
double(number);
console.log("------------");
const money = 500;
double(money);

//difference
function difference(num1, num2) {
  const diff = num1 - num2;
  console.log(diff);
}

const fatherAge = 40;
const myAge = 15;
difference(fatherAge, myAge);
