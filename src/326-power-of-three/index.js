// https://leetcode.com/problems/power-of-three/
// https://leetcode-cn.com/problems/power-of-three/

/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = n => {
  let x = n;
  while (x > 1) {
    x /= 3;
  }
  return x === 1;
};

console.log(isPowerOfThree(27));
console.log(isPowerOfThree(0));
console.log(isPowerOfThree(1));
console.log(isPowerOfThree(9));
console.log(isPowerOfThree(45));
