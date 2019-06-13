const setZeroes = require('./index');

it('test setZeroes', () => {
  const matrix1 = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
  const matrix2 = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]];
  const matrix3 = [[1, 1, 1], [0, 1, 2]];
  setZeroes(matrix1);
  setZeroes(matrix2);
  setZeroes(matrix3);

  expect(matrix1).toStrictEqual([[1, 0, 1], [0, 0, 0], [1, 0, 1]]);
  expect(matrix2).toStrictEqual([[0, 0, 0, 0], [0, 4, 5, 0], [0, 3, 1, 0]]);
  expect(matrix3).toStrictEqual([[0, 1, 1], [0, 0, 0]]);
});
