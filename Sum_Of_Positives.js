/**
 * @description You get an array of numbers, return the sum of all of the positives ones.
 * @example [1, -4, 7, 12] => 1+7+12=20
 * @note If there is nothing to sum, the sum is default to 0.
 */

/**
 *
 * @version v1 Using Array.filter() and arr.forEach()
 */
const positiveSumV1 = (arr) => {
  let sum = 0;
  const posArr = arr.filter((el) => el > 0);
  posArr.forEach((element) => {
    sum += element;
  });

  return sum;
};

/**
 * @version v2 Using Normal Looping
 * @param {Array} arr
 */
const positiveSumV2 = (arr) => {
  let sum = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > 0) sum = sum + arr[i];
  }
  return sum;
};

/**
 * @version v3 Using Array.reduce()
 * @param {Array} arr
 */
const positiveSumV3 = (arr) => {
  return arr.filter((el) => el > 0).reduce((a, b) => a + b, 0);
};

const arr = [1, 3, 4, 5, 1, -1, -9, 23];
const result = positiveSumV2(arr);

console.log(result);
