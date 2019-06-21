// https://leetcode.com/problems/valid-palindrome/
// https://leetcode-cn.com/problems/valid-palindrome/

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = s => {
  const str = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
  const len = str.length;
  for (let i = 0; i < len / 2; i += 1) {
    if (str[i] !== str[len - i - 1]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('race a car'));
console.log(isPalindrome('abcba'));
console.log(isPalindrome('abccba'));
