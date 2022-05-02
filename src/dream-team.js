const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let result;
if(!(Array.isArray(members))) {
return false;
}
for(let i=0; i<members.length; i++) {
if((typeof members[i])==='string'&&members[i]) {
members[i]=members[i].toUpperCase().trim();
result = members.map(el => el=el[0]).sort().join('');
} else return false; 
}
return result  
}
// function createDreamTeam(members) {
// let result;
// for(let i=0; i<members.length; i++) {
// if((typeof members[i])==='string'&&members[i]) {
// members[i]=members[i].toUpperCase();
// result = members.map(el => el=el[0]).sort().join('');
// } else return false;
// }
// return result
// }

module.exports = {
  createDreamTeam
};
