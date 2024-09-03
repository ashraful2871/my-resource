const mobile = {
  brand: "samsung",
  price: 25000,
  color: "black",
  camera: "12mp",
  isNew: true,
  isOld: false,
};

for (const prop in mobile) {
  //   console.log(prop);
  //   console.log(mobile[prop]);
}

// const keys = Object.keys(mobile);
// console.log(keys);
// for (const key of keys) {
//   console.log(key, ":", mobile[key]);
// }

const str = "Hello";
str[0] = "h";
console.log(str);
