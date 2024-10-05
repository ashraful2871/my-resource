// data access
const data = [{ id: 1, name: "abul", address: "kochu khet" }];

console.log(data[0].address);

const products = {
  count: 5000,
  data: [
    { id: 1, name: "lenovo laptop", price: 65000 },
    { id: 2, name: "mack book", price: 165000 },
  ],
};
// second product price
// console.log(products.data[1].price);

const user = {
  id: 50001,
  name: "soriful raj",
  address: {
    street: {
      first: "8/16 uttor side",
      second: "poribag er goli",
      third: "no dorai",
    },
    city: "Dhaka",
  },
};

const user2 = {
  id: 50002,
  name: "pori bibir majar",
  address: {
    city: "chittagong",
    country: "Bangladesh",
  },
};
// console.log(user.address.street.second);
console.log(user.address.street?.second);
console.log(user2.address.street?.second);
