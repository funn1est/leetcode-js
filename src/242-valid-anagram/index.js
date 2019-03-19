/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }

  const sMap = {};
  const tMap = {};
  for (const c of s) {
    sMap[c] = (sMap[c] || 0) + 1;
  }
  for (const c of t) {
    tMap[c] = (tMap[c] || 0) + 1;
  }
  return Object.entries(sMap).every(([key, value]) => tMap[key] === value);
};

console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('rat', 'car'));
