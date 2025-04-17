/**
 *
 * @param {Array} array
 * @returns
 */
function squareOrSquareRoot(array) {
  let newArr = [];
  array.forEach((el) => {
    if (Number.isInteger(Math.sqrt(el))) newArr.push(Math.sqrt(el));
    else newArr.push(Math.pow(el, 2));
  });
  return newArr;
}

const arr = [4, 3, 9, 7, 2, 1];

console.log(squareOrSquareRoot(arr));
