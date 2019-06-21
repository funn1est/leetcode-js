// https://leetcode.com/problems/single-number/
// https://leetcode-cn.com/problems/single-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = nums => nums.reduce((acc, current) => acc ^ current);

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
