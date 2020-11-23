/**
 * @description 二分法查找有序数组及其优化
 * @author Leon
 */

// 数组必须有序 不存在重复
const biaryFind = (arr, targetValue) => {
  const len = arr.length
  let low = 0,
    high = len - 1
  while (low <= high) {
    let mid = low + ((high - low) >> 1)
    if (arr[mid] === targetValue) {
      return mid
    } else if (arr[mid] < targetValue) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }
  return -1
}
// const arr = [1, 4, 5, 6, 7, 8, 10, 11, 23, 42, 44, 54, 56, 77, 102]
// console.log(biaryFind(arr, 44))
// console.log(biaryFind(arr, 1))
// console.log(biaryFind(arr, 102))
// console.log(biaryFind(arr, 1111))

/**
 * @description 查找第一个等于给定值
 */

const biaryFindFirst = (arr, targetValue) => {
  const len = arr.length
  if (len < 1) return -1
  let low = 0,
    high = len - 1
  while (low <= high) {
    let mid = low + ((high - low) >> 1)
    if (arr[mid] < targetValue) {
      low = mid + 1
    } else if (arr[mid] > targetValue) {
      high = mid - 1
    } else {
      if (mid === 0 || arr[mid - 1] < targetValue) return mid
      high = mid - 1
    }
  }
  return -1
}
// const arr = [1, 5, 6, 7, 8, 10, 11, 23, 42, 44, 44, 54, 56, 77, 102]
// console.log(biaryFindFirst(arr, 44))
// console.log(biaryFindFirst(arr, 1))
// console.log(biaryFindFirst(arr, 102))
// console.log(biaryFindFirst(arr, 1111))

/**
 * @description 查找最后一个相等的数
 */
const biaryFindLast = (arr, targetValue) => {
  const len = arr.length
  if (len === 0) return -1
  let low = 0,
    high = len - 1
  while (low <= high) {
    let mid = low + ((high - low) >> 1)
    if (arr[mid] < targetValue) {
      low = mid + 1
    } else if (arr[mid] > targetValue) {
      high = mid - 1
    } else {
      if (arr[mid + 1] > targetValue || mid === len - 1) return mid
      low = mid + 1
    }
  }
  return -1
}

// const arr = [1, 5, 6, 7, 8, 10, 11, 23, 42, 44, 44, 44, 54, 56, 77, 102]
// console.log(biaryFindLast(arr, 44))
// console.log(biaryFindLast(arr, 1))
// console.log(biaryFindLast(arr, 102))
// console.log(biaryFindLast(arr, 1111))

/**
 * @description  查找第一个大于等于给定值的元素
 */

const biaryFindFistBig = (arr, targetValue) => {
  const len = arr.length
  if (len === 0) return -1
  let low = 0,
    high = len - 1
  while (low <= high) {
    let mid = low + ((high - low) >> 1)
    if (arr[mid] >= targetValue) {
      if (mid === 0 || mid === len - 1 || arr[mid - 1] < targetValue) return mid
      high = mid - 1
    } else if (arr[mid] < targetValue) {
      low = mid + 1
    }
  }
  return -1
}

// const arr = [1, 5, 6, 7, 8, 10, 11, 23, 42, 44, 44, 44, 54, 56, 77, 102]
// console.log(biaryFindFistBig(arr, 44))
// console.log(biaryFindFistBig(arr, 1))
// console.log(biaryFindFistBig(arr, 102))
// console.log(biaryFindFistBig(arr, 1111))

// 查找最后一个小于等于给定值的元素
const biaryFindLastSmall = (arr, targetValue) => {
  if (arr.length === 0) return -1
  let low = 0,
    high = arr.length - 1
  while (low <= high) {
    let mid = low + ((high - low) >> 1)
    if (arr[mid] <= targetValue) {
      if (mid === arr.length - 1 || arr[mid + 1] > targetValue) return mid
      low = mid + 1
    } else {
      high = mid - 1
    }
  }
  return -1
}

// 查找最后一个小于等于给定值的元素
// const biaryFindLastSmall = (sortedArr, target) => {
//   if (sortedArr.length === 0) return -1
//   let low = 0
//   let high = sortedArr.length - 1
//   while (low <= high) {
//     const mid = Math.floor((low + high) / 2)
//     if (target < sortedArr[mid]) {
//       high = mid - 1
//     } else {
//       if (mid === sortedArr.length - 1 || sortedArr[mid + 1] >= target) return mid
//       low = mid + 1
//     }
//   }
//   return -1
// }
const arr = [1, 5, 6, 7, 8, 10, 11, 23, 42, 44, 44, 44, 54, 56, 77, 102]
console.log(biaryFindLastSmall(arr, 44))
console.log(biaryFindLastSmall(arr, 1))
console.log(biaryFindLastSmall(arr, 102))
console.log(biaryFindLastSmall(arr, 1111))
