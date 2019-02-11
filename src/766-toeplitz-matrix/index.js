/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
const isToeplitzMatrix = matrix => {
  for (let i = 0; i < matrix.length - 1; i += 1) {
    const current = matrix[i].slice(0, -1).join('');
    const next = matrix[i + 1].slice(1).join('');
    if (current !== next) {
      return false;
    }
  }
  return true;
};

console.log(isToeplitzMatrix([[1, 2, 3, 4], [5, 1, 2, 3], [9, 5, 1, 2]]));
console.log(isToeplitzMatrix([[1, 2], [2, 2]]));
