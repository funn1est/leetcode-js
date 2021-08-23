const { getMaximumGenerated } = require('./index');

it('test getMaximumGenerated', () => {
  expect(getMaximumGenerated(7)).toStrictEqual(3);
  expect(getMaximumGenerated(2)).toStrictEqual(1);
  expect(getMaximumGenerated(3)).toStrictEqual(2);
});
