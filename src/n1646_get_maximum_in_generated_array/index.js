/**
 * @param {number} n
 * @return {number}
 */
const getMaximumGenerated = (n) => {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  const xs = [0, 1];
  let max = 1;
  for (let i = 2; i <= n; i += 1) {
    const idx = Math.floor(i / 2);
    const isEven = i % 2 === 0;
    xs[i] = xs[idx] + (isEven ? 0 : xs[idx + 1]);
    max = Math.max(max, xs[i]);
  }
  return max;
};

module.exports = { getMaximumGenerated };
