// https://leetcode.com/problems/valid-parentheses/
// https://leetcode-cn.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = s => {
  const leftMap = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  const stack = [];

  for (const c of s) {
    if (leftMap[c]) {
      stack.push(leftMap[c]);
    } else {
      if (c !== stack.pop()) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(isValid('()'));
console.log(isValid('(]'));
