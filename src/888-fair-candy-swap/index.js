// https://leetcode.com/problems/fair-candy-swap/
// https://leetcode-cn.com/problems/fair-candy-swap/

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
const fairCandySwap = (A, B) => {
  const sum = xs => xs.reduce((acc, x) => acc + x, 0);
  const subtract = (sum(A) - sum(B)) / 2;
  for (let i = 0; i < A.length; i += 1) {
    const b = A[i] - subtract;
    if (B.includes(b)) {
      return [A[i], b];
    }
  }
};

const fairCandySwap1 = (A, B) => {
  let aSum = 0;
  let bSum = 0;
  let valueSet = new Set();
  for (let i = 0; i < A.length; i += 1) {
    aSum += A[i];
  }
  for (let i = 0; i < B.length; i += 1) {
    valueSet.add(B[i]);
    bSum += B[i];
  }
  const subtract = (aSum - bSum) / 2;
  for (let i = 0; i < A.length; i += 1) {
    const b = A[i] - subtract;
    if (valueSet.has(b)) {
      return [A[i], b];
    }
  }
};

console.log(fairCandySwap([1, 1], [2, 2]));
console.log(fairCandySwap([1, 2], [2, 3]));
console.log(fairCandySwap([2], [1, 3]));
console.log(fairCandySwap([1, 2, 5], [2, 4]));
console.log('------');
console.log(fairCandySwap1([1, 1], [2, 2]));
console.log(fairCandySwap1([1, 2], [2, 3]));
console.log(fairCandySwap1([2], [1, 3]));
console.log(fairCandySwap1([1, 2, 5], [2, 4]));
