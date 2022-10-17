const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(number) {
  let n = String(number).split('');
  let num = n.reduce((s, e) => s + +e, 0);
  num = num>=10 ? getSumOfDigits(num) : num;
  return num
}

module.exports = {
  getSumOfDigits
};