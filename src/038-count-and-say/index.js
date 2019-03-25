/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = n => {
  if (n === 1) {
    return '1';
  }
  if (n === 2) {
    return '11';
  }
  const str = countAndSay(n - 1);
  let count = 1;
  let s = '';
  for (let i = 1; i < str.length; i += 1) {
    if (str[i] !== str[i - 1]) {
      s += `${count}${str[i - 1]}`;
      count = 1;
    } else {
      count += 1;
    }
  }
  s += `${count}${str[str.length - 1]}`;
  return s;
};

console.log(countAndSay(1));
console.log(countAndSay(4));
