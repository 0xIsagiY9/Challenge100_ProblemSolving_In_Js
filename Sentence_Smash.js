/**
 *
 * @param {Array} words
 * @returns
 */
function smash(words) {
  let retWord = '';
  for (let i = 0; i < words.length; i++)
    retWord += words[i] + (i === words.length - 1 ? '' : ' ');
  return retWord;
}

/**
 *
 * @param {Array} words
 */
function smash2(words) {
  return words.join(' ');
}

console.log(smash2(['Hello', 'Isagi', 'Yoichi']));
