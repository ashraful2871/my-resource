const numbers = [12, 10, 15, 7, 13];

const doubled = numbers.map((num) => num * 2);
// console.log(doubled);

const fiveAdd = numbers.map((num) => num + 5);
// console.log(fiveAdd);

const halves = numbers.map((num) => num / 2);
// console.log(halves);

const square = numbers.map((num) => num * num);
// console.log(square);

const friends = ["Tom", "jon", "michel", "oliver"];

const lengths = friends.map((frnd) => frnd.length);
// console.log(lengths);
const firstLetter = friends.map((friend) => friend[0]);
console.log(firstLetter);
