/**
 *
 * @param {Number} amount
 */
function formatMoney(amount) {
  return `${amount} become $${amount.toFixed(2)}`;
}

console.log(formatMoney(3));
