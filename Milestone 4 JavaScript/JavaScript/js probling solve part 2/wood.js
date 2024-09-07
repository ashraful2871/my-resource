/**
 * chair--->3 cft
 * table---> 10 cft
 * Bed---> 50 cft
 */

function woodQuantity(chairQuantity, tableQuantity, bedQuantity) {
  const perChairWood = 3;
  const perTableWood = 10;
  const perBedWood = 50;

  const totalChairWood = chairQuantity * perChairWood;
  const totalTableWood = tableQuantity * perTableWood;
  const totalBedWood = bedQuantity * perBedWood;

  const totalWood = totalChairWood + totalTableWood + totalBedWood;
  return totalWood;
}
const wood = woodQuantity(0, 0, 1);
console.log("wood needed: ", wood);

//shirt----->500
//pant----->300
//shoe----->900

function shopping(shirtPrice, pentPrice, shoePrice) {
  const perShirtPrice = 500;
  const perPentPrice = 300;
  const perShoePrice = 900;

  const totalShirtPrice = shirtPrice * perShirtPrice;
  const totalPentPrice = pentPrice * perPentPrice;
  const totalShoePrice = shoePrice * perShoePrice;

  const totalPrice = totalShirtPrice + totalPentPrice + totalShoePrice;

  return totalPrice;
}

const price = shopping(0, 0, 1);
console.log(price);
