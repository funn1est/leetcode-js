/**
 * @param {number[]} nums
 * @return {number}
 */
const findLengthOfLCIS = nums => {
  const len = nums.length;
  if (!len) {
    return 0;
  }
  let result = 1;
  let count = 1;
  const loopLen = len - 1;
  for (let i = 0; i < loopLen; i += 1) {
    if (nums[i] < nums[i + 1]) {
      count += 1;
      if (count > result) {
        result = count;
      }
    } else {
      count = 1;
    }
  }
  return result;
};

console.log(findLengthOfLCIS([2, 1, 3]));
console.log(findLengthOfLCIS([1, 3, 5, 7]));
console.log(findLengthOfLCIS([1, 3, 5, 4, 7]));
console.log(findLengthOfLCIS([2, 2, 2, 2, 2]));
