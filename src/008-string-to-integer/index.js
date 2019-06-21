// https://leetcode.com/problems/string-to-integer-atoi/
// https://leetcode-cn.com/problems/string-to-integer-atoi/

/**
 * @param {string} str
 * @return {number}
 */
const myAtoi = str => {
  const allowedChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const trimStr = str.trim();
  let res = '';
  for (let i = 0; i < trimStr.length; i += 1) {
    const c = trimStr[i];
    if (i !== 0) {
      if (allowedChar.includes(c)) {
        res += c;
      } else {
        break;
      }
    } else {
      if (['-', ...allowedChar].includes(c)) {
        res += c;
      } else if (c === '+') {
        continue;
      } else {
        return 0;
      }
    }
  }
  const number = parseInt(res, 10);
  if (isNaN(number)) {
    return 0;
  }
  if (number > 2147483647) {
    return 2147483647;
  }
  if (number < -2147483648) {
    return -2147483648;
  }
  return number;
};

console.log(myAtoi('42'));
console.log(myAtoi('   -42'));
console.log(myAtoi('4193 with words'));
console.log(myAtoi('words and 987'));
console.log(myAtoi('-91283472332'));
