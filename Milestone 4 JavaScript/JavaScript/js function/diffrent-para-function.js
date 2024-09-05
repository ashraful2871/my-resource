/**
 * for a given string tell me whether it has even number of character or not
 *
 */

function evenSizeStr(str) {
  const size = str.length;
  console.log(str, size);
  if (size % 2 === 0) {
    console.log("even size");
    return true;
  } else {
    console.log("odd size");
    return false;
  }
}
// evenSizeStr("dhaka");
// evenSizeStr("faka");

function doubleOrTriple(number, doDouble) {
  if (doDouble === true) {
    const result = number * 2;
    return result;
  } else {
    const result = number * 3;
    return result;
  }
}
// console.log(doubleOrTriple(5, true));
// console.log(doubleOrTriple(5, false));

function numberElement(number) {
  const len = number.length;
  return len;
}

const array = numberElement([12, 564, 97, 64, 97, 654, 979, 654, 947]);

console.log(array);
