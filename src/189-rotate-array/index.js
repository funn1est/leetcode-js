/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = (nums, k) => {
  const len = nums.length;
  const clone = [...nums];
  for (let i = 0; i < len; i += 1) {
    nums[i] = clone[(i + len - (k % len)) % len];
  }
};

const arr = [1, 2, 3, 4, 5, 6, 7];
rotate(arr, 1);
console.log(arr);
