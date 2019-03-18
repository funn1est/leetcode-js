/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = s => {
  for (let i = 0; i < s.length; i += 1) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return i;
    }
  }
  return -1;
};

// const firstUniqChar = s => {
//   const map = {};
//   for (let i = 0; i < s.length; i += 1) {
//     if (!map[s[i]]) {
//       map[s[i]] = 1;
//     } else {
//       map[s[i]] += 1;
//     }
//   }
//
//   for (let i = 0; i < s.length; i += 1) {
//     if (map[s[i]] === 1) {
//       return i;
//     }
//   }
//   return -1;
// };

// const firstUniqChar = s => {
//   for (let i = 0; i < s.length; i += 1) {
//     const res = `${s.slice(0, i)}${s.slice(i + 1, s.length)}`;
//     if (!res.includes(s[i])) {
//       return i;
//     }
//   }
//   return -1;
// };

console.log(firstUniqChar('leetcode'));
console.log(firstUniqChar('loveleetcode'));
