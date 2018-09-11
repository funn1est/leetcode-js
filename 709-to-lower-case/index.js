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

console.log(toLowerCase('Hello'));
console.log(toLowerCase('here'));
console.log(toLowerCase('LOVELY'));
