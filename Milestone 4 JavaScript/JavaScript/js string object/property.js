const person = {
  name: "Ashraful",
  age: 24,
  profession: "Developer",
  salary: 30000,
  married: false,
  "fav places": ["bandarban", "saintmartin", "kuakata"],
};

// console.log(person);

//dot notation
// console.log(person.profession);
const income = person.salary;
// console.log(income);

//bracket notation
console.log(person["age"]);
const boyos = person["age"];
console.log(boyos);
console.log(person["fav places"]);

const key1 = "profession";
console.log(key1);
