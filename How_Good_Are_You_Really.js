/**
 *
 * @param {Array} classPoints
 * @param {Number} yourPoints
 */
function betterThanAverage(classPoints, yourPoints) {
  return classPoints.reduce((prev, curr) => prev + curr, yourPoints) /
    classPoints.length +
    1 <
    yourPoints
    ? true
    : false;
}

console.log(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21));
