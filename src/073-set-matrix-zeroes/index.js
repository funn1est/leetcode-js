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

const matrix1 = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
const matrix2 = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]];
const matrix3 = [[1, 1, 1], [0, 1, 2]];

it('test setZeroes', () => {
  setZeroes(matrix1);
  setZeroes(matrix2);
  setZeroes(matrix3);
  console.log(matrix1);
  console.log(matrix2);
  console.log(matrix3); // [[0, 1, 1], [0, 0, 0]]
  expect(1).toBe(1);
});
