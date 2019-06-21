// https://leetcode.com/problems/climbing-stairs/
// https://leetcode-cn.com/problems/climbing-stairs/

/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = n => {
  const memo = {};
  const helper = (i, end) => {
    if (i > end) {
      return 0;
    }
    if (i === end) {
      return 1;
    }
    if (memo[i]) {
      return memo[i];
    }
    memo[i] = helper(i + 1, n) + helper(i + 2, n);
    return memo[i];
  };
  return helper(0, n);
};

console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));
