/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = nums => {
  const count = new Map();
  const len = nums.length;
  for (let i = 0; i < len; i += 1) {
    if (count.has(nums[i])) {
      return true;
    }
    count.set(nums[i], 0);
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
