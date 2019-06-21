// https://leetcode.com/problems/max-increase-to-keep-city-skyline/
// https://leetcode-cn.com/problems/max-increase-to-keep-city-skyline/

/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxIncreaseKeepingSkyline = grid => {
  const len = grid.length;

  const rowMaxs = [];
  const colMaxs = [];

  for (let i = 0; i < len; i += 1) {
    rowMaxs.push(Math.max(...grid[i]));

    let colMax = -Infinity;
    for (let j = 0; j < len; j += 1) {
      const item = grid[j][i];
      if (item > colMax) {
        colMax = item;
      }
    }
    colMaxs.push(colMax);
  }

  let sum = 0;
  for (let i = 0; i < len; i += 1) {
    for (let j = 0; j < len; j += 1) {
      sum += Math.min(rowMaxs[i], colMaxs[j]) - grid[i][j];
    }
  }
  return sum;
};

console.log(maxIncreaseKeepingSkyline([[3, 0, 8, 4], [2, 4, 5, 7], [9, 2, 6, 3], [0, 3, 1, 0]]));
