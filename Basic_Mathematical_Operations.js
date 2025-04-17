/**
 *
 * @param {String} operation
 * @param {Number} value1
 * @param {Number} value2
 * @returns
 */
function basicOp(operation, value1, value2) {
  let value = 0;
  switch (operation) {
    case '+':
      value = value1 + value2;
      break;
    case '-':
      value = value1 - value2;
      break;
    case '*':
      value = value1 * value2;
      break;
    case '/':
      value = value1 / value2;
      break;
    default:
      console.log('Choose New Operations');
  }
  return value;
}

console.log(basicOp('/', 1, 2));
