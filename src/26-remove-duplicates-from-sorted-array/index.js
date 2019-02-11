/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = nums => {
  const len = nums.length;
  if (len === 0) {
    return 0;
  }
  let index = 1;
  for (let i = 1; i < len; i += 1) {
    if (nums[i] !== nums[i - 1]) {
      nums[index] = nums[i];
      index += 1;
    }
  }
  return index;
};

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
