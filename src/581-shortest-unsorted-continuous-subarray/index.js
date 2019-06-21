// https://leetcode.com/problems/shortest-unsorted-continuous-subarray/
// https://leetcode-cn.com/problems/shortest-unsorted-continuous-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */
const findUnsortedSubarray = nums => {
  const ordered = [...nums].sort((a, b) => a - b);
  let start;
  let end;
  const len = nums.length;
  for (let i = 0; i < len; i += 1) {
    if (nums[i] !== ordered[i]) {
      start = i;
      break;
    }
  }
  for (let i = len - 1; i >= 0; i -= 1) {
    if (nums[i] !== ordered[i]) {
      end = i;
      break;
    }
  }
  if (start === undefined || end === undefined) {
    return 0;
  }
  return end - start + 1;
};

const findUnsortedSubarray1 = nums => {
  const len = nums.length;

  let start = 0;
  let end = 0;
  let max = nums[0];
  let min = nums[len - 1];

  for (let i = 0; i < len; i += 1) {
    const left = nums[i];
    const right = nums[len - i - 1];
    max = Math.max(max, left);
    min = Math.min(min, right);
    if (left < max) {
      end = i;
    }
    if (right > min) {
      start = len - i - 1;
    }
  }
  if (start === end) {
    return 0;
  }
  return end - start + 1;
};

console.log(findUnsortedSubarray([2, 1]));
console.log(findUnsortedSubarray([1, 2, 3, 4]));
console.log(findUnsortedSubarray([1, 3, 2, 2, 2]));
console.log(findUnsortedSubarray([5, 4, 3, 2, 1]));
console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]));
console.log('------');
console.log(findUnsortedSubarray1([2, 1]));
console.log(findUnsortedSubarray1([1, 2, 3, 4]));
console.log(findUnsortedSubarray1([1, 3, 2, 2, 2]));
console.log(findUnsortedSubarray1([5, 4, 3, 2, 1]));
console.log(findUnsortedSubarray1([2, 6, 4, 8, 10, 9, 15]));
