const numbers = [1, 5, 6, 7, 4, 15, 66];
const sum = numbers.reduce((prev, current) => prev + current, 0);
console.log(sum);

const total = numbers.reduce((p, c) => p + c, 0);
console.log(total);
