/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = (matrix, target) => {
  const m = matrix.length;
  const n = (matrix[0] || []).length;
  if (m < 1 || n < 1) {
    return false;
  }
  let i = 0;
  let j = n - 1;
  while (i < m && j >= 0) {
    if (matrix[i][j] === target) {
      return true;
    }
    if (matrix[i][j] < target) {
      i += 1;
    } else {
      j -= 1;
    }
  }
  return false;
};

module.exports = { searchMatrix };
