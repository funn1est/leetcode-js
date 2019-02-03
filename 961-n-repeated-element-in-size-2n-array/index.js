/**
 * @param {number[]} A
 * @return {number}
 */
// eslint-disable-next-line consistent-return
const repeatedNTimes = A => {
  const size = A.length;
  const map = {};
  for (let i = 0; i < size; i += 1) {
    const val = A[i];
    if (!map[val]) {
      map[val] = 1;
    } else {
      return val;
    }
  }
};

console.log(repeatedNTimes([1, 2, 3, 3]));
console.log(repeatedNTimes([2, 1, 2, 5, 3, 2]));
console.log(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4]));
