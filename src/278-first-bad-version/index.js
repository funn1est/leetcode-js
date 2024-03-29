// https://leetcode.com/problems/first-bad-version/
// https://leetcode-cn.com/problems/first-bad-version/

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = isBadVersion => {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return n => {
    let left = 1;
    let right = n;

    while (left < right) {
      const index = Math.floor((left + right) / 2);
      if (isBadVersion(index)) {
        right = index;
      } else {
        left = index + 1;
      }
    }

    return right;
  };
};
