// https://leetcode.com/problems/excel-sheet-column-title/
// https://leetcode-cn.com/problems/excel-sheet-column-title/

/**
 * @param {number} n
 * @return {string}
 */
const convertToTitle = n => {
  let str = '';

  while (n > 0) {
    str = `${String.fromCharCode(((n - 1) % 26) + 65)}${str}`;
    n = Math.floor((n - 1) / 26);
  }

  return str;
};

console.log(convertToTitle(1));
console.log(convertToTitle(28));
console.log(convertToTitle(51));
console.log(convertToTitle(52));
console.log(convertToTitle(701));
