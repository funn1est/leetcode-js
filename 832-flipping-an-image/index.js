/**
 * @param {number[][]} A
 * @return {number[][]}
 */
const flipAndInvertImage = A => {
  const rowLen = A.length;
  const columnLen = A[0].length;
  for (let row = 0; row < rowLen; row += 1) {
    for (let i = 0, j = columnLen - 1; i <= j; i += 1, j -= 1) {
      const tmp = A[row][i];
      A[row][i] = A[row][j] ^ 1;
      A[row][j] = tmp ^ 1;
    }
  }
  return A;
};

const flipAndInvertImage1 = A => A.map(row => row.reverse().map(x => x ^ 1));

console.log(flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]]));
console.log(
  flipAndInvertImage([[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]]),
);
console.log('------');
console.log(flipAndInvertImage1([[1, 1, 0], [1, 0, 1], [0, 0, 0]]));
console.log(
  flipAndInvertImage1([[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]]),
);
