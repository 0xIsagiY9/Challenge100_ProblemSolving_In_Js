/**
 *
 * @param {Number} n
 * @param {String} s
 * @returns
 */
function repeatStr(n, s) {
  let newStr = '';
  if (n < 0) return 0;
  for (let i = 1; i <= n; i++) newStr += s;
  return newStr;
}

/**
 *
 * @param {Number} n
 * @param {String} s
 * @returns
 */
function repeatStr_v2(n, s) {
  return s.repeat(n);
}

const res = repeatStr_v2(4, ' Hello ');
console.log(res);
