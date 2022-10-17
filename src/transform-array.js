const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  let newArr=arr;
  let idxDouble=newArr.indexOf('--double-next');
  let idxDiscard=newArr.indexOf('--discard-prev');
if(arr.length !== 0) {
  if(arr.includes('--double-next')) {
    newArr=arr.slice(0, idxDouble+1-arr.length);
    newArr.push(arr[idxDouble]);
    newArr.push(arr[idxDouble+1]);
  } else if(arr.includes('--discard-prev')) {
    if(idxDiscard===0) {
      newArr=arr.slice(1);
    } else {
      newArr=arr.slice(0, idxDiscard-1);
      newArr.push(arr.slice(idxDiscard+1));
      newArr=[].concat(...newArr);
    }

  }
}

return newArr;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  transform
};
