/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
const numJewelsInStones = (J, S) => {
  let count = 0;
  for (let i = 0; i < S.length; i += 1) {
    if (J.includes(S[i])) {
      count += 1;
    }
  }
  return count;
};

const numJewelsInStones1 = (J, S) =>
  S.split('').reduce((acc, char) => (J.includes(char) ? ++acc : acc), 0);

console.log(numJewelsInStones('aA', 'aAAbbbb'));
console.log(numJewelsInStones('z', 'ZZ'));
console.log('------');
console.log(numJewelsInStones1('aA', 'aAAbbbb'));
console.log(numJewelsInStones1('z', 'ZZ'));
