// https://leetcode.com/problems/plus-one/
// https://leetcode-cn.com/problems/plus-one/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = digits => {
  for (let i = digits.length - 1; i >= 0; i -= 1) {
    if (digits[i] === 9) {
      digits[i] = 0;
    } else {
      digits[i] += 1;
      return digits;
    }
  }
  return [1, ...digits];
};

console.log(plusOne([9, 9, 9]));
console.log(plusOne([1, 2, 3]));
console.log(plusOne([4, 3, 2, 1]));
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
