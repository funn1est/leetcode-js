/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = matrix => {
  const len = matrix.length;
  for (let i = 0; i < len; i += 1) {
    for (let j = i; j < len; j += 1) {
      if (i !== j) {
        [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
      }
    }
  }
  for (let i = 0; i < len; i += 1) {
    for (let j = 0; j < len / 2; j += 1) {
      [matrix[i][j], matrix[i][len - j - 1]] = [matrix[i][len - j - 1], matrix[i][j]];
    }
  }
};

const array1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
rotate(array1);
console.log(array1);

const array2 = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]];
rotate(array2);
console.log(array2);
