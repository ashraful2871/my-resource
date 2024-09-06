/***
 * SIMPLE LOGIC:
 * year will be leap year if the year divisible by 4
 *
 */

function isLeapYear(year) {
  if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

const leap0 = isLeapYear(2052);
// console.log(leap0);

/**
 * 1. those year that is mot divisible by 100, if the year is divisible by 4: then it will be a leap year
 *
 * 2. if the year divisible by 400, then it is a leap year.
 * 3. else it is not a leap year
 */

function isLeapYear2(year) {
  if (year % 100 !== 0 && year % 4 === 0) {
    return true;
  } else if (year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

const leap1 = isLeapYear2(2000);
const leap2 = isLeapYear2(2058);
const leap3 = isLeapYear2(2052);
const leap4 = isLeapYear2(2059);
const leap5 = isLeapYear2(3098);
console.log(leap1, leap2, leap3, leap4, leap5);
