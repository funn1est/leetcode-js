// https://leetcode.com/problems/degree-of-an-array/
// https://leetcode-cn.com/problems/degree-of-an-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
const findShortestSubArray = nums => {
  const map = {};
  let degree = 0;
  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    if (!map[value]) {
      map[value] = { start: i, end: i, count: 1 };
    } else {
      map[value].end = i;
      map[value].count += 1;
    }
    if (map[value].count > degree) {
      degree = map[value].count;
    }
  }

  let result = Number.MAX_SAFE_INTEGER;
  const mapValues = Object.values(map);
  for (let i = 0; i < mapValues.length; i++) {
    const { start, end, count } = mapValues[i];
    if (count === degree) {
      const size = end - start + 1;
      if (size < result) {
        result = size;
      }
    }
  }
  return result;
};

console.log(findShortestSubArray([1, 2, 2, 3, 1]));
console.log(findShortestSubArray([1, 2, 2, 3, 1, 4, 2]));
