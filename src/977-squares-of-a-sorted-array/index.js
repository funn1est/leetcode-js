// https://leetcode.com/problems/squares-of-a-sorted-array/
// https://leetcode-cn.com/problems/squares-of-a-sorted-array/

/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortedSquares = A => A.map(x => x * x).sort((a, b) => a - b);

console.log(sortedSquares([-4, -1, 0, 3, 10]));
console.log(sortedSquares([-7, -3, 2, 3, 11]));
