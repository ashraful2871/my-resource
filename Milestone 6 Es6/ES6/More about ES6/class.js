const products = [
  { id: 1, name: "lenovo", price: 65000 },
  { id: 2, name: "dell", price: 45000 },
  { id: 3, name: "hp", price: 40000 },
  { id: 4, name: "mac", price: 150000 },
];

// has some properties, method
class Products {
  country = "Bangladesh";
  constructor(name) {
    this.name = name;
  }
  speak(talk) {
    console.log(`talking about ${talk}`);
  }
}

const lenovo = new Products("le le lenovo");
// console.log(lenovo);
// lenovo.speak("oba kita kau");

class Teacher {
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
  }
  lecture() {
    console.log("sir is teach is math");
  }
}

const tapan = new Teacher("Tapan sir", "physics");
console.log(tapan);

const rashid = new Teacher("Rashid sir", "Math");
console.log(rashid);

// if ("2" === 2) {
//   console.log("Inside if");
// } else {
//   console.log("Inside else");
// }

function work(x, y = 4) {
  return x + y;
}
console.log(work(32));
