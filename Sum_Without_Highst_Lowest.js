/**
 *
 * @param {Array} array
 */
function arraySum(array) {
  if (array == null || array.length == 0) return 0;
  const highst = Math.max(...array);
  const lowest = Math.min(...array);
  return array
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((prev, curr) => prev + curr, 0);
}

const array = [1, 1, 11, 2, 3];
const res = arraySum(array);

console.log(res);
