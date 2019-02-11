/**
 * @param {number[][]} A
 * @return {number[][]}
 */
const transpose = A => {
  const rowLen = A.length;
  const columnLen = A[0].length;
  const result = new Array(columnLen);
  for (let i = 0; i < columnLen; i += 1) {
    result[i] = new Array(rowLen);
    for (let j = 0; j < rowLen; j += 1) {
      result[i][j] = A[j][i];
    }
  }
  return result;
};

const transpose1 = A => {
  const rowLen = A.length;
  const columnLen = A[0].length;
  const result = [];
  for (let i = 0; i < columnLen; i += 1) {
    result[i] = [];
    for (let j = 0; j < rowLen; j += 1) {
      result[i][j] = A[j][i];
    }
  }
  return result;
};

const transpose2 = A => Object.keys(A[0]).map(index => A.map(row => row[index]));

console.log(transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(transpose([[1, 2, 3], [4, 5, 6]]));
console.log('------');
console.log(transpose1([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(transpose1([[1, 2, 3], [4, 5, 6]]));
console.log('------');
console.log(transpose2([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(transpose2([[1, 2, 3], [4, 5, 6]]));
