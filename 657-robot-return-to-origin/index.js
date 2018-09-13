/**
 * @param {string} moves
 * @return {boolean}
 */
const judgeCircle = moves => {
  let x = 0;
  let y = 0;
  moves.split('').forEach(move => {
    if (move === 'U') {
      x += 1;
    } else if (move === 'D') {
      x -= 1;
    } else if (move === 'R') {
      y += 1;
    } else {
      y -= 1;
    }
  });
  return x === 0 && y === 0;
};

console.log(judgeCircle('UD'));
console.log(judgeCircle('LL'));
