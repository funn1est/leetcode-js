/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i += 1) {
    const rest = target - nums[i];
    if (map.has(rest)) {
      return [map.get(rest), i];
    }
    map.set(nums[i], i);
  }
  return null;
};

console.log(twoSum([2, 7, 11, 15], 9));
