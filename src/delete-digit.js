const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
let arr=[]
n=n.toString().split("")
arr.push(n.slice(1))
arr.push(n.slice(0, -1))
arr.push(n.slice(0, -2))
let x=n.slice(0, -2)+','+n.slice(-1);
arr.push(x.split(','))
let nMax=arr.map(el=>+(el.join('')));
return Math.max.apply(null, nMax);
}

module.exports = {
  deleteDigit
};
