// https://leetcode.com/problems/find-anagram-mappings/
// https://leetcode-cn.com/problems/find-anagram-mappings/

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
const anagramMappings = (A, B) => {
  const map = {};
  for (let i = 0; i < B.length; i += 1) {
    const item = B[i];
    if (!map[item]) {
      map[item] = i;
    }
  }
  return A.map(index => map[index]);
};

console.log(anagramMappings([12, 28, 46, 32, 50], [50, 12, 32, 46, 28]));
