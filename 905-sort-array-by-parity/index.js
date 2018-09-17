/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortArrayByParity = A => {
  return A.reduce((xs, x) => {
    if (x % 2 === 0) {
      return [x].concat(xs);
    }
    return xs.concat(x);
  }, []);
};

const sortArrayByParity1 = A => {
  const result = [];
  for (let i = 0; i < A.length; i += 1) {
    if (A[i] % 2 === 0) {
      result.unshift(A[i]);
    } else {
      result.push(A[i]);
    }
  }
  return result;
};

console.log(sortArrayByParity([3, 1, 2, 4]));
console.log('------');
console.log(sortArrayByParity1([3, 1, 2, 4]));
