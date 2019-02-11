/**
 * @param {number[]} A
 * @return {number}
 */
const peakIndexInMountainArray = A => {
  let start = 1;
  let end = A.length - 2;
  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);
    if (A[mid] > A[mid - 1] && A[mid] > A[mid + 1]) {
      return mid;
    } else if (A[mid] < A[mid - 1]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
};

console.log(peakIndexInMountainArray([0, 1, 0]));
console.log(peakIndexInMountainArray([0, 2, 1, 0]));
console.log(peakIndexInMountainArray([0, 2, 3, 4, 1, 0]));
