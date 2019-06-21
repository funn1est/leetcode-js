// https://leetcode.com/problems/intersection-of-two-arrays/
// https://leetcode-cn.com/problems/intersection-of-two-arrays/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = (nums1, nums2) => {
  const len1 = nums1.length;
  const len2 = nums2.length;
  const res = [];
  if (len1 < len2) {
    for (const c of nums1) {
      if (nums2.includes(c)) {
        res.push(c);
      }
    }
  } else {
    for (const c of nums2) {
      if (nums1.includes(c)) {
        res.push(c);
      }
    }
  }
  return [...new Set(res)];
};

console.log(intersection([1, 2, 2, 1], [2, 2]));
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
