/**
 *
 * @param {Array} input
 */
function countPositivesSumNegatives(input) {
  let retArr = [];
  let countPos = 0;
  let sumNeg = 0;
  if (input == null || input.length == 0) {
    return retArr;
  } else {
    for (let i = 0; i < input.length; i++) {
      if (input[i] < 0) sumNeg += input[i];
      else if (input[i] > 0) countPos++;
    }
  }
  retArr = [countPos, sumNeg];
  return retArr;
}

const arr = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
console.log(countPositivesSumNegatives(arr));
