// https://leetcode.com/problems/self-dividing-numbers/
// https://leetcode-cn.com/problems/self-dividing-numbers/

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
const selfDividingNumbers = (left, right) => {
  const result = [];
  for (let i = left; i <= right; i += 1) {
    const dividers = i
      .toString()
      .split('')
      .map(Number);
    // .map(divider => parseInt(divider, 10));
    if (dividers.every(x => i % x === 0)) {
      result.push(i);
    }
  }
  return result;
};

console.log(selfDividingNumbers(1, 22));
