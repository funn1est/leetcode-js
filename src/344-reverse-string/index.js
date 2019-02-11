/**
 * @param {string} s
 * @return {string}
 */
const reverseString = s => s.split('').reduce((str, s) => s + str, '');

console.log(reverseString('hello'));
