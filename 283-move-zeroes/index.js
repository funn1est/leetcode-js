/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = nums => {
  const len = nums.length;
  let moveIndex = 0;
  for (let i = 0; i < len; i += 1) {
    if (nums[i] !== 0) {
      nums[moveIndex] = nums[i];
      moveIndex += 1;
    }
  }
  for (let i = moveIndex; i < len; i += 1) {
    nums[i] = 0;
  }
};

const nums1 = [0, 1, 0, 3, 12];
moveZeroes(nums1);
console.log(nums1);
const nums2 = [0, 0, 1];
moveZeroes(nums2);
console.log(nums2);
