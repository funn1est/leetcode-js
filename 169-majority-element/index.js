/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = nums => {
  const len = nums.length;
  const half = len / 2;
  const count = new Map();
  for (let i = 0; i < len; i += 1) {
    if (!count.has(nums[i])) {
      count.set(nums[i], 1);
    } else {
      count.set(nums[i], count.get(nums[i]) + 1);
    }
  }
  for (const [key, value] of count) {
    if (value > half) {
      return key;
    }
  }
};

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
