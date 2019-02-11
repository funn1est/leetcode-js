/**
 * @param {number} n
 * @return {string}
 */
const findContestMatch = n => {
  const helper = arr => {
    const res = [];
    const len = arr.length;
    for (let i = 0; i < len / 2; i += 1) {
      res[i] = `(${arr[i]},${arr[len - i - 1]})`;
    }
    return res;
  };

  let res = [];
  for (let i = 0; i < n; i += 1) {
    res[i] = i + 1;
  }

  for (let i = 0; i < Math.log2(n); i += 1) {
    res = helper(res);
  }
  return res[0];
};

console.log(findContestMatch(2));
console.log(findContestMatch(4));
console.log(findContestMatch(8));
