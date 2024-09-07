/**
 * first100-----> 100
 * 101to200-----> 90
 * above200 ----> 70
 */

function layerDiscount(quantity) {
  const first100Price = 100;
  const second100Price = 90;
  const above200Price = 70;
  if (quantity <= 100) {
    const total = quantity * first100Price;
    return total;
  } else if (quantity <= 200) {
    const first100total = first100Price * 100;
    const remainingQuantity = quantity - 100;
    const remainingTotal = second100Price * remainingQuantity;
    const total = first100total + remainingTotal;
    return total;
  } else {
    const first100total = first100Price * 100;
    const second100Total = 100 * second100Price;
    const remainingQuantity = quantity - 200;
    const remainingTotal = remainingQuantity6 + above200Price;
    const total = first100total + second100Total + remainingTotal;
    return total;
  }
}

const product = layerDiscount(200);
console.log(product);
