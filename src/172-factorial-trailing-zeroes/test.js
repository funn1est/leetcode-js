const { trailingZeroes, trailingZeroes1 } = require('./main');

it('test trailingZeroes', () => {
  expect(trailingZeroes(3)).toBe(0);
  expect(trailingZeroes(5)).toBe(1);
  expect(trailingZeroes(200)).toBe(49);
  expect(trailingZeroes(1808548329)).toBe(452137076);
  expect(trailingZeroes1(3)).toBe(0);
  expect(trailingZeroes1(5)).toBe(1);
  expect(trailingZeroes1(200)).toBe(49);
  expect(trailingZeroes1(1808548329)).toBe(452137076);
});
