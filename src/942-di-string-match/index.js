// https://leetcode.com/problems/di-string-match/
// https://leetcode-cn.com/problems/di-string-match/

/**
 * @param {string} s
 * @return {number[]}
 */
const diStringMatch = str => {
  let min = 0;
  let max = str.length;
  return [...str].map(s => (s === 'I' ? min++ : max--)).concat(min);
};

console.log(diStringMatch('IDID'));
console.log(diStringMatch('III'));
console.log(diStringMatch('DDI'));
