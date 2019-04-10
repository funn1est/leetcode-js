/**
 * @param {number[]} nums
 * @return {string}
 */
const largestNumber = nums => {
  const array = nums.map(String).sort((a, b) => `${b}${a}` - `${a}${b}`);
  if (array[0] === '0') {
    return '0';
  }
  return array.join('');
};

console.log(largestNumber([10, 2]));
console.log(largestNumber([3, 30, 34, 5, 9]));
console.log(largestNumber([0, 0])); // '0'
console.log(largestNumber([999999998, 999999997, 999999999]));
