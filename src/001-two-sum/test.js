const { twoSum } = require('./main');

it('test twoSum', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
});
