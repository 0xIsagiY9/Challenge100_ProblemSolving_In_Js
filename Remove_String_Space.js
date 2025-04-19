/**
 * todo: splite each character
 * todo: Store each character in array
 * todo: filter array with any element not equat space ' '
 * todo: concat the array
 */

/**
 *
 * @param {String} x
 */
function noSpace(x) {
  let strArr = [];
  let newStr = '';
  for (let i = 0; i < x.length; i++) strArr.push(x[i]);
  strArr = strArr.filter((el) => el != ' ');
  strArr.forEach((el) => {
    newStr += el;
  });
  return newStr;
}

/**
 *
 * @param {String} str
 */
function noSpaceV2(str) {
  return str.replaceAll(' ', '');
}

console.log(noSpaceV2('8 j 8   mBliB8g  imjB8B8  jl  B'));
