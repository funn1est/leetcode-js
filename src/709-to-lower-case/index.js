// https://leetcode.com/problems/to-lower-case/
// https://leetcode-cn.com/problems/to-lower-case/

/**
 * @param {string} str
 * @return {string}
 */
const toLowerCase = str => {
  const len = str.length;
  let string = '';
  for (let i = 0; i < len; i += 1) {
    if (/[A-Z]/.test(str[i])) {
      string += String.fromCharCode(str[i].charCodeAt() + 32);
    } else {
      string += str[i];
    }
  }
  return string;
};

const toLowerCase1 = str =>
  str
    .split('')
    .map(char => {
      if (/[A-Z]/.test(char)) {
        return String.fromCharCode(char.charCodeAt() + 32);
      }
      return char;
    })
    .join('');

const toLowerCase2 = str =>
  str.split('').reduce((str, char) => {
    if (/[A-Z]/.test(char)) {
      return str + String.fromCharCode(char.charCodeAt() + 32);
    } else {
      return str + char;
    }
  }, '');

const toLowerCase3 = str => str.toLowerCase();

console.log(toLowerCase('Hello'));
console.log(toLowerCase('here'));
console.log(toLowerCase('LOVELY'));
console.log('------');
console.log(toLowerCase1('Hello'));
console.log(toLowerCase1('here'));
console.log(toLowerCase1('LOVELY'));
console.log('------');
console.log(toLowerCase2('Hello'));
console.log(toLowerCase2('here'));
console.log(toLowerCase2('LOVELY'));
console.log('------');
console.log(toLowerCase3('Hello'));
console.log(toLowerCase3('here'));
console.log(toLowerCase3('LOVELY'));
