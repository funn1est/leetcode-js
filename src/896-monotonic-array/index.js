/**
 * @param {number[]} A
 * @return {boolean}
 */
const isMonotonic = A => {
  let flag;
  for (let i = 0; i < A.length - 1; i += 1) {
    const res = A[i] - A[i + 1];
    if (res !== 0) {
      const status = res > 0;
      if (flag !== undefined) {
        if (status !== flag) {
          return false;
        }
      } else {
        flag = status;
      }
    }
  }
  return true;
};

console.log(isMonotonic([1, 2, 2, 3]));
console.log(isMonotonic([6, 5, 4, 4]));
console.log(isMonotonic([1, 3, 2]));
console.log(isMonotonic([1, 2, 4, 5]));
console.log(isMonotonic([1, 1, 1]));
