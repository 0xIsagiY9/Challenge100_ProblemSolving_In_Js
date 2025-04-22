/**
 *
 * @param {Array} array
 * @returns
 */
function findAverage(array) {
  let sum = 0;
  array.forEach((el) => (sum += el));
  return (array.length = 0 ? 0 : sum / array.length);
}
