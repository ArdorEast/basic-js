const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arrSort = arr.filter(e => e !== -1).sort((a, b) => a - b);
let arrNew = [];
let j = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === -1) {
    arrNew.push(arr[i]);
  } else {
    arrNew.push(arrSort[j]);
    j++;
  }
}
return arrNew
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  sortByHeight
};