/**
 *
 * @param {String} str
 */
function doubleChar(str) {
  let slicedStr = [];
  let fullStr = '';
  for (let i = 0; i < str.length; i++) slicedStr.push(str[i]);
  for (let i = 0; i < slicedStr.length; i++) {
    slicedStr[i] += slicedStr[i];
  }
  slicedStr.forEach((el) => (fullStr += el));
  return fullStr;
}

console.log(doubleChar('Hello'));
