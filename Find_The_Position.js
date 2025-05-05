/**
 *
 * @param {String} letter
 */
function position(letter) {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  let splitArr = letters.split('');
  for (let i = 0; i < splitArr.length; i++) {
    if (letter === splitArr[i]) return i + 1;
  }
}

/**
 *
 * @param {String} letter
 */
function position2(letter) {
  return letter.charCodeAt() - 96;
}

console.log(position2('a'));
