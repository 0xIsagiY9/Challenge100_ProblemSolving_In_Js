/**
 *
 * @param {String} a
 * @param {String} b
 */
function solve(a, b) {
  let uniqueA = '';
  let uniqueB = '';

  const setB = new Set(b);
  const setA = new Set(a);

  for (let char of a) {
    if (!setB.has(char)) {
      uniqueA += char;
    }
  }

  for (let char of b) {
    if (!setA.has(char)) {
      uniqueB += char;
    }
  }

  return uniqueA + uniqueB;
}

console.log(solve('asf', 'bas'));
