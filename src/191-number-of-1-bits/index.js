// https://leetcode.com/problems/number-of-1-bits/
// https://leetcode-cn.com/problems/number-of-1-bits/

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = n => Array.from(n.toString(2)).filter(i => i === '1').length;

console.log(hammingWeight(00000000000000000000000000001011));
console.log(hammingWeight(00000000000000000000000010000000));
