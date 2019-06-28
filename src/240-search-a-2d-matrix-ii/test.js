const { searchMatrix } = require('./main');

it('test searchMatrix', () => {
  const matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30],
  ];
  expect(searchMatrix(matrix, 5)).toBeTruthy();
  expect(searchMatrix(matrix, 20)).toBeFalsy();
  expect(searchMatrix([[-5]], -10)).toBeFalsy();
});
