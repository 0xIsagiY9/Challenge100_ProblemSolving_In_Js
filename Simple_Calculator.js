/**
 *
 * @param {Number} a
 * @param {Number} b
 * @param {String} sign
 * @returns
 */
function calculator(a, b, sign) {
  let singArr = ['+', '-', '/', '*'];
  if (!singArr.includes(sign)) return 'unknown value';
  else if (typeof a != 'number' || typeof b != 'number') return 'unknown value';
  else {
    switch (sign) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '/':
        return a / b;
      default:
        'unknown value';
    }
  }
}

console.log(calculator(1, 2, '+'));
