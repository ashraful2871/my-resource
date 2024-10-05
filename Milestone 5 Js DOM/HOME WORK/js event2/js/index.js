// let sum = 0;
// function clickMe() {
//   const h2 = document.getElementById("count-number");
//   sum += 1;
//   h2.innerText = sum;
// }
// function clickMe2() {
//   const h2 = document.getElementById("count-number");
//   sum -= 1;
//   h2.innerText = sum;
// }

let sum = 0;
const plusBtn = document.getElementById("plus-btn");
const minusBtn = document.getElementById("minus-btn");
const h2 = document.getElementById("count-number");

plusBtn.addEventListener("click", function () {
  sum += 1;
  h2.innerText = sum;
});
minusBtn.addEventListener("click", function () {
  sum -= 1;
  h2.innerText = sum;
});
