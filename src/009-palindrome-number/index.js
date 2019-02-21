/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = x => {
  if (x < 0) {
    return false;
  }
  const s = x.toString();
  for (let i = 0; i < s.length / 2; i += 1) {
    if (s[i] !== s[s.length - i - 1]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
