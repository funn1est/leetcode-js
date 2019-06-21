const { permute } = require('./main');

it('test permute', () => {
  expect(permute([1, 2, 3])).toStrictEqual([
    [1, 2, 3],
    [1, 3, 2],
    [2, 1, 3],
    [2, 3, 1],
    [3, 1, 2],
    [3, 2, 1],
  ]);
});
