// https://leetcode.com/problems/longest-substring-without-repeating-characters/
// https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = s => {
  const n = s.length;
  if (n === 0) {
    return 0;
  }
  const map = new Map();
  let max = 0;
  for (let end = 0, start = 0; end < n; end += 1) {
    const key = s[end];
    if (map.has(key)) {
      start = Math.max(start, map.get(key) + 1);
    }
    map.set(key, end);
    max = Math.max(max, end - start + 1);
  }
  return max;
};

module.exports = { lengthOfLongestSubstring };
