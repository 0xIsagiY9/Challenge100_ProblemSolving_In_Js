/**
 *
 * @param {Number} n
 */
function digitize(n) {
  let arr = [];
  let digit;
  do {
    digit = n % 10;
    n = Math.floor(n / 10);
    arr.push(digit);
  } while (n != 0);
  return arr;
}

console.log(digitize(35230));
