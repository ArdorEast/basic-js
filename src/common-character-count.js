const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
let res=[]
s1=s1.split('').sort()
s2=s2.split('').sort()
if(s2>=s1) {
for(let i=0; i<s2.length; i++) {
if(s1[i]===s2[i]) res.push(s2[i])
}} else if(s1>=s2) {
for(let i=0; i<s1.length; i++) {
if(s1[i]===s2[i]) res.push(s1[i])
}};
return res.length
}

module.exports = {
  getCommonCharacterCount
};