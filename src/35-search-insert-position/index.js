/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
  let index = 0;
  for (; index < nums.length; index += 1) {
    const item = nums[index];
    if (item === target || item > target) {
      return index;
    }
  }
  return index;
};

const searchInsert1 = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return start;
};

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));
console.log(searchInsert([1, 3, 5, 6], 0));
console.log('------');
console.log(searchInsert1([1, 3, 5, 6], 5));
console.log(searchInsert1([1, 3, 5, 6], 2));
console.log(searchInsert1([1, 3, 5, 6], 7));
console.log(searchInsert1([1, 3, 5, 6], 0));
