/**
 * @param {string} s
 * @return {string}
 */
const reverseString = s => s.split('').reduce((str, s) => s + str, '');

console.log(reverseString('hello'));

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString1 = s => {
  const len = s.length;
  const loopLen = Math.floor(len / 2);
  for (let i = 0; i < loopLen; i += 1) {
    const tail = len - i - 1;
    const tmp = s[i];
    s[i] = s[tail];
    s[tail] = tmp;
  }
  console.log(s);
};

console.log(reverseString1(['h', 'e', 'l', 'l', 'o']));
