/**
 * @param {string} S
 * @return {number[][]}
 */
const largeGroupPositions = S => {
  const count = new Map();
  let start = 0;
  let end = 0;
  for (let i = 1; i < S.length; i++) {
    if (S[i] !== S[i - 1]) {
      start = i;
    } else {
      end = i;
    }
    if (end - start >= 2) {
      count.set(start, end);
    }
  }
  return [...count.entries()];
};

console.log(largeGroupPositions('abbxxxxzzy'));
console.log(largeGroupPositions('abc'));
console.log(largeGroupPositions('abcdddeeeeaabbbcd'));
