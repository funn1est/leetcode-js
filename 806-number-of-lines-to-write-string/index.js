/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
const numberOfLines = (widths, S) => {
  const MAX = 100;
  let row = 1;
  let count = 0;
  for (let i = 0, len = S.length; i < len; i += 1) {
    const index = S[i].charCodeAt() - 97;
    const width = widths[index];
    const currentWidth = count + width;
    if (MAX - currentWidth >= 0) {
      count = currentWidth;
    } else {
      row += 1;
      count = width;
    }
  }
  return [row, count];
};

console.log(
  numberOfLines(
    [
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
    ],
    'abcdefghijklmnopqrstuvwxyz',
  ),
);
console.log(
  numberOfLines(
    [
      4,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
    ],
    'bbbcccdddaaa',
  ),
);
