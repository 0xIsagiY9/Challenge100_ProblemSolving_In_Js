/**
 *
 * @param {Array} sheeps
 */
function countSheeps(sheeps) {
  let numSheeps = 0;
  sheeps.forEach((el) => {
    if (el === true) numSheeps++;
  });
  return numSheeps;
}

const arr = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

countSheeps(arr);
