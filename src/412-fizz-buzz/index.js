// https://leetcode.com/problems/fizz-buzz/
// https://leetcode-cn.com/problems/fizz-buzz/

/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = n =>
  [...Array(n)].map((_, index) => {
    const val = index + 1;
    if (val % 3 === 0 && val % 5 === 0) {
      return 'FizzBuzz';
    }
    if (val % 3 === 0) {
      return 'Fizz';
    }
    if (val % 5 === 0) {
      return 'Buzz';
    }
    return val.toString();
  });

console.log(fizzBuzz(15));
