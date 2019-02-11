/**
 * @param {number} num
 * @return {number}
 */
const findComplement = num => {
  return parseInt(
    num
      .toString(2)
      .split('')
      .map(x => x ^ 1)
      .join(''),
    2,
  );
};

console.log(findComplement(5));
console.log(findComplement(1));
