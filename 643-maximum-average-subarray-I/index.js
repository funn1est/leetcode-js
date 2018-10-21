/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findMaxAverage = (nums, k) => {
  let sum = 0;
  for (let i = 0; i < k; i += 1) {
    sum += nums[i];
  }
  let max = sum;
  for (let i = k; i < nums.length; i += 1) {
    sum += nums[i] - nums[i - k];
    max = Math.max(max, sum);
  }
  return max / k;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
