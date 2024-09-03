const person = {
  name: "Ashraful",
  age: 24,
  profession: "Developer",
  salary: 30000,
  married: false,
  "fav places": ["bandarban", "saintmartin", "kuakata"],
};
person.salary = 30000;
person["age"] = 30;
const propName = "profession";
person[propName] = "devops";
console.log(person);
