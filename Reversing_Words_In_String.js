/**
 *
 * @param {String} string
 */
function reverse(string) {
  let arrStr = string.split(' ');
  return arrStr.reverse().join(' ');
}

console.log(reverse('Hello World'));
