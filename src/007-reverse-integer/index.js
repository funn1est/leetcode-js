// https://leetcode.com/problems/reverse-integer/
// https://leetcode-cn.com/problems/reverse-integer/

/**
 * @param {number} x
 * @return {number}
 */
const reverse = x => {
  if (x === 0) {
    return 0;
  }

  const reverseX = parseInt(
    Math.abs(x)
      .toString(10)
      .split('')
      .reverse()
      .join(''),
    10,
  );

  const res = x > 0 ? reverseX : -reverseX;
  if (res > 2147483648 || res < -2147483649) {
    return 0;
  }
  return res;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(90100));
