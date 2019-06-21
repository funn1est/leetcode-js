// https://leetcode.com/problems/permutations/
// https://leetcode-cn.com/problems/permutations/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = nums => {
  const n = nums.length;
  const res = [];
  const helper = (start, xs) => {
    if (start === n) {
      res.push(xs);
    }
    for (let i = start; i < n; i += 1) {
      [xs[i], xs[start]] = [xs[start], xs[i]];
      helper(start + 1, [...xs]);
    }
  };
  helper(0, [...nums]);
  return res;
};

module.exports = { permute };
