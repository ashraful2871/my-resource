const phones = [
  { name: "samsung", price: 20000, camera: "12mp", color: "black" },
  { name: "xoami", price: 18000, camera: "12mp", color: "black" },
  { name: "oppo", price: 30000, camera: "12mp", color: "black" },
  { name: "iphone", price: 100000, camera: "12mp", color: "black" },
  { name: "walton", price: 31000, camera: "12mp", color: "black" },
  { name: "HTC", price: 27000, camera: "12mp", color: "black" },
];
//cheapest phone
// function getCheapestPhone(phones) {
//   let min = phones[0];
//   for (const phone of phones) {
//     if (phone.price < min.price) {
//       min = phone;
//     }
//   }
//   return min;
// }

// const cheap = getCheapestPhone(phones);
// console.log("cheapest phone is : ", cheap);

//highest price

function getHighestPhone(phones) {
  let max = phones[0];
  for (const phone of phones) {
    if (max.price < phone.price) {
      max = phone;
    }
  }
  return max;
}

const highest = getHighestPhone(phones);
console.log(highest);
