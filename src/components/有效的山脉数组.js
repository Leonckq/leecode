/**
 * @param {number[]} A
 * @return {boolean}
 */
const validMountainArray = function(A) {
  if (!Array.isArray(A)) return false
  const len = A.length
  let i = 0, j = len - 1;
  while (i + 1 < len && A[i + 1] > A[i]) {
    i++
  }
  while (j - 1 > 0 && A[j - 1] > A[j]) {
    j--
  }
  if (i !== 0 && i === j && j !== len - 1) {
    return true
  }
  return false
}

console.log(validMountainArray([0,2,4,8,10,7,6,5,3,2,1]))
