// https://leetcode.com/problems/reshape-the-matrix/
// https://leetcode-cn.com/problems/reshape-the-matrix/

/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
const matrixReshape = (nums, r, c) => {
  const flatNums = nums.reduce((acc, x) => acc.concat(x), []);
  if (r * c === flatNums.length) {
    const result = [];
    for (let i = 0; i < flatNums.length; i += c) {
      result.push(flatNums.slice(i, i + c));
    }
    return result;
  } else {
    return nums;
  }
};

console.log(matrixReshape([[1, 2], [3, 4]], 1, 4));
console.log(matrixReshape([[1, 2], [3, 4]], 2, 4));
