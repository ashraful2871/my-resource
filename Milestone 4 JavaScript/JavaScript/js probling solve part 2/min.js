const prices = [12000, 16000, 50000, 100000, 20000, 30000, 35000];

function getMin(numbers) {
  let min = numbers[0];
  for (num of numbers) {
    if (num < min) {
      min = num;
    }
  }
  return min;
}

const cheap = getMin(prices);
console.log("cheapest Phone: ", cheap);
