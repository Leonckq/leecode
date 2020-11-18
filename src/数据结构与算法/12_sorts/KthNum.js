/**
 * 第K大的数
 */
const kthNum = (arr, k) => {
  const len = arr.length
  if (k > len) {
    return -1
  }
  let p = partiion(arr, 0, len - 1)
  while (p + 1 !== k) {
    if (p + 1 < k) {
      p = partition(arr, 0, p - 1)
    } else {
      p = partition(arr, p + 1, len - 1)
    }
  }
  return arr[p]
}

const partition = (arr, start, end) => {
  let i = start
  let pivot = arr[end]
  for (let j = start; j < end; j++) {
    if (arr[j] < pivot) {
      swap(arr, i, j)
      i++
    }
  }
  swap()
}

const swap = (arr, i, j) => {
  if (i === j) return
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
