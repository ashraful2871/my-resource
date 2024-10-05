const person = {
  name: "kodom ali",
  age: 21,
  job: "badam, kahi",
  3: "third",
  "add-dress": "kochu khet",
};

const prop = "job";
console.log(person.job);
console.log(person["job"]);
console.log(person[prop]);
console.log(person["3"]);
console.log(person["add-dress"]);
