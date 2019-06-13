/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = matrix => {
  const m = matrix.length;
  const n = matrix[0].length;
  let isCol = false;

  for (let i = 0; i < m; i += 1) {
    if (matrix[i][0] === 0) {
      isCol = true;
    }
    for (let j = 1; j < n; j += 1) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  for (let i = 1; i < m; i += 1) {
    for (let j = 1; j < n; j += 1) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  if (matrix[0][0] === 0) {
    for (let j = 1; j < n; j += 1) {
      matrix[0][j] = 0;
    }
  }

  if (isCol === true) {
    for (let i = 0; i < m; i += 1) {
      matrix[i][0] = 0;
    }
  }
};

module.exports = setZeroes;
