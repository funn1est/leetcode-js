/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = (flowerbed, n) => {
  let i = 0;
  let count = 0;
  const len = flowerbed.length;
  while (i < len) {
    if (
      flowerbed[i] === 0 &&
      (i === 0 || flowerbed[i - 1] === 0) &&
      (i === len - 1 || flowerbed[i + 1] === 0)
    ) {
      flowerbed[i] = 1;
      count += 1;
    }
    if (count >= n) {
      return true;
    }
    i += 1;
  }
  return false;
};

console.log(canPlaceFlowers([1, 0, 0, 0], 1));
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2));
console.log(canPlaceFlowers([0, 0, 1, 0, 0], 1));
console.log(canPlaceFlowers([1, 0, 0, 0, 0, 0, 1], 2));
