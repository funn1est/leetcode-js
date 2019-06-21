// https://leetcode.com/problems/intersection-of-two-arrays-ii/
// https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = (nums1, nums2) => {
  const map = {};
  const res = [];

  for (const c of nums1) {
    map[c] = map[c] + 1 || 1;
  }

  for (const c of nums2) {
    if (map[c]) {
      res.push(c);
      map[c] -= 1;
    }
  }

  return res;
};

// const intersect = (nums1, nums2) => {
//   const len1 = nums1.length;
//   const len2 = nums2.length;
//   const res = [];
//
//   if (len1 < len2) {
//     for (const c of nums1) {
//       const index = nums2.indexOf(c);
//       if (index !== -1) {
//         res.push(c);
//         nums2.splice(index, 1);
//       }
//     }
//   } else {
//     for (const c of nums2) {
//       const index = nums1.indexOf(c);
//       if (index !== -1) {
//         res.push(c);
//         nums1.splice(index, 1);
//       }
//     }
//   }
//   return res;
// };

console.log(intersect([1, 2, 2, 1], [2, 2]));
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
