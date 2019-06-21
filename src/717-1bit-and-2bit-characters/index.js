// https://leetcode.com/problems/1-bit-and-2-bit-characters/
// https://leetcode-cn.com/problems/1-bit-and-2-bit-characters/

/**
 * @param {number[]} bits
 * @return {boolean}
 */
const isOneBitCharacter = bits => {
  const len = bits.length;
  if (len === 1) {
    return bits[0] === 0;
  }
  const loopLen = len - 1;
  let i = 0;
  while (i < loopLen) {
    if (bits[i] === 1) {
      i += 2;
    } else {
      i += 1;
    }
  }
  return i === loopLen;
};

const isOneBitCharacter1 = bits => /^(0|10|11)*0$/.test(bits.join(''));

console.log(isOneBitCharacter([1]));
console.log(isOneBitCharacter([1, 0, 0]));
console.log(isOneBitCharacter([1, 1, 0]));
console.log(isOneBitCharacter([1, 1, 1, 0]));
console.log('------');
console.log(isOneBitCharacter1([1]));
console.log(isOneBitCharacter1([1, 0, 0]));
console.log(isOneBitCharacter1([1, 1, 0]));
console.log(isOneBitCharacter1([1, 1, 1, 0]));
