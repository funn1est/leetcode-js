// https://leetcode.com/problems/array-partition-i/
// https://leetcode-cn.com/problems/array-partition-i/

/**
 * @param {number[]} nums
 * @return {number}
 */
const arrayPairSum = nums => {
  const sort = (xs, low, high) => {
    if (low < high) {
      const j = partition(xs, low, high);
      sort(xs, low, j - 1);
      sort(xs, j + 1, high);
    }
  };
  const partition = (xs, low, high) => {
    let i = low;
    let j = high + 1;
    const x = xs[low];
    while (true) {
      while (xs[++i] < x) {
        if (i === high) {
          break;
        }
      }
      while (xs[--j] > x) {
        if (j === low) {
          break;
        }
      }
      if (i >= j) {
        break;
      }
      [xs[j], xs[i]] = [xs[i], xs[j]];
    }

    [xs[low], xs[j]] = [xs[j], xs[low]];
    return j;
  };
  sort(nums, 0, nums.length - 1);

  let result = 0;
  for (let i = 0; i < nums.length; i += 2) {
    result += nums[i];
  }
  return result;
};

console.log(arrayPairSum([1, 4, 3, 2]));
