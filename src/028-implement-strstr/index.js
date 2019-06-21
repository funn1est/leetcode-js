// https://leetcode.com/problems/implement-strstr/
// https://leetcode-cn.com/problems/implement-strstr/

/**
 * @param {string} str
 * @param {string} target
 * @return {number}
 */
const strStr = (str, target) => {
  if (target.length === 0) {
    return 0;
  }
  const sLen = str.length;
  const tLen = target.length;

  for (let i = 0; i <= sLen - tLen; i += 1) {
    let strIndex = i;
    let j = 0;
    for (; j < tLen; j += 1) {
      if (str[strIndex] === target[j]) {
        strIndex += 1;
      } else {
        break;
      }
    }
    if (j === tLen) {
      return i;
    }
  }
  return -1;
};

console.log(strStr('hello', 'll'));
console.log(strStr('aaaaa', 'bba'));
console.log(strStr('a', 'a'));
console.log(strStr('mississippi', 'issip'));
