/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = (nums1, m, nums2, n) => {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;
  while (k >= 0) {
    if (nums1[i] < nums2[j] || i < 0) {
      nums1[k--] = nums2[j--];
    } else {
      nums1[k--] = nums1[i--];
    }
  }
};

const nums1 = [1,2,3,7,0,0,0];
const nums2 = [2,5,6];
merge(nums1, 4, nums2, 3);
console.log(nums1);
