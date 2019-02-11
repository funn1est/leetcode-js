/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = nums => {
  const count = new Map();
  const result = [];
  const len = nums.length;
  for (let i = 0; i < len; i += 1) {
    count.set(nums[i], 0);
  }
  for (let i = 1; i <= len; i += 1) {
    if (!count.has(i)) {
      result.push(i);
    }
  }
  return result;
};

// trick
const findDisappearedNumbers1 = nums => {
  const result = [];
  const len = nums.length;
  for (let i = 0; i < len; i += 1) {
    const index = Math.abs(nums[i]) - 1;
    if (nums[index] > 0) {
      nums[index] *= -1;
    }
  }
  for (let i = 0; i < len; i += 1) {
    if (nums[i] > 0) {
      result.push(i + 1);
    }
  }
  return result;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
console.log('------');
console.log(findDisappearedNumbers1([4, 3, 2, 7, 8, 2, 3, 1]));
