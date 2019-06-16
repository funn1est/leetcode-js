'use strict';
/**
 * @param {number} n
 * @return {number}
 */
const trailingZeroes = n => {
  const helper = (n, total) => {
    if (n < 5) {
      return total;
    }
    const count = Math.floor(n / 5);
    return helper(count, total + count);
  };
  return helper(n, 0);
};

const trailingZeroes1 = n => {
  let total = 0;
  while (n >= 5) {
    n = Math.floor(n / 5);
    total += n;
  }
  return total;
};

module.exports = {
  trailingZeroes,
  trailingZeroes1,
};
