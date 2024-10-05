// filter select element base on a condition and return an array with the elements that fulfilled the condition
const numbers = [1, 5, 6, 7, 4, 15];
const player = [75, 62, 59, 55, 45, 68, 72];
const friends = ["Tom", "jon", "michel", "oliver", "tim", "joshna"];
// const selected = player.filter((p) => p > 70);
// const selected = player.filter((p) => p > 80);
// const selected = player.filter((p) => p > 50);

//const selected = player.filter((p) => p % 2 === 1);
//console.log(selected);

const oddFriends = friends.filter((friend) => friend.length > 4);
console.log(oddFriends);
