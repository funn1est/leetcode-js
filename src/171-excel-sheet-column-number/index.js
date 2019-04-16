/**
 * @param {string} s
 * @return {number}
 */
const titleToNumber = s =>
  [...s].reduceRight(
    (acc, current, index) => acc + 26 ** (s.length - index - 1) * (current.charCodeAt() - 64),
    0,
  );

console.log(titleToNumber('A'));
console.log(titleToNumber('AB'));
console.log(titleToNumber('ZY'));
