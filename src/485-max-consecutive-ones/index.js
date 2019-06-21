// https://leetcode.com/problems/max-consecutive-ones/
// https://leetcode-cn.com/problems/max-consecutive-ones/

/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = nums => {
  let max = 0;
  let current = 0;
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === 1) {
      current += 1;
      if (current > max) {
        max = current;
      }
    } else {
      current = 0;
    }
  }
  return max;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
