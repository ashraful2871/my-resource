const salary = 25000;
const isBCS = true;
const height = 68;
const hasCar = false;

// if (salary > 20000 && height > 66) {
//   console.log("Tahole mama tumi aso");
// } else {
//   console.log("na chole jete paro dorja khula ase");
// }

// if (salary > 20000 && height > 72) {
//   console.log("tahole ami raji");
// } else {
//   console.log("ja vaag");
// }

// more and more condition
// if ((salary > 20000 && height > 72) || isBCS == true) {
//   console.log("tahole ami raji");
// } else {
//   console.log("ja vaag");
// }

// if (salary > 20000 && height > 72 && isBCS == true) {
//   console.log("tahole ami raji");
// } else {
//   console.log("ja vaag");
// }

//-------------------COMPLEX CONDITION-------------------
// if ((salary > 25000 && hasCar == true) || isBCS == true) {
//   console.log("amra soby raji");
// }

if ((salary > 25000 || hasCar == true) && isBCS == true) {
  console.log("amra soby raji");
}
