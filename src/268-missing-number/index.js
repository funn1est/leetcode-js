// https://leetcode.com/problems/missing-number/
// https://leetcode-cn.com/problems/missing-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = nums => {
  const len = nums.length;
  let sum = 0;
  let expected = len;
  for (let i = 0; i < len; i += 1) {
    sum += nums[i];
    expected += i;
  }
  return expected - sum;
};

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
