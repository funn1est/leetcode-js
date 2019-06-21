// https://leetcode.com/problems/contains-duplicate-ii/
// https://leetcode-cn.com/problems/contains-duplicate-ii/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = (nums, k) => {
  const map = new Map();
  const len = nums.length;
  for (let i = 0; i < len; i += 1) {
    const item = nums[i];
    if (!map.has(item)) {
      map.set(item, i);
    } else if (k < i - map.get(item)) {
      map.set(item, i);
    } else {
      return true;
    }
  }
  return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
console.log(containsNearbyDuplicate([99, 99], 2));
