// /**
//  * @description 归并排序
//  * @author Leon
//  */
// const mergeSort = (arr) => {
//   if (arr.length <= 1) {
//     return arr
//   }
//   const middle = Math.floor(arr.length / 2)
//   const left = arr.slice(0, middle)
//   const right = arr.slice(middle)
//   // 递归 分解 合并
//   return mergeArr(mergeSort(left), mergeSort(right))
// }

// const mergeArr = (left, right) => {
//   const temp = []
//   let leftIndex = 0,
//     rightIndex = 0
//   while (leftIndex < left.length && rightIndex < right.length) {
//     const l = left[leftIndex]
//     const r = right[rightIndex]
//     if (l < r) {
//       temp.push(l)
//       leftIndex++
//     } else {
//       temp.push(r)
//       rightIndex++
//     }
//   }

//   // 合并 多余数组
//   return temp.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
// }

const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr
  }
  const middle = Math.floor(arr.length / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)
  return mergeArr(mergeSort(left), mergeSort(right))
}

const mergeArr = (left, right) => {
  const temp = []
  let leftIndex = 0,
    rightIndex = 0
  while (left.length > leftIndex && right.length > rightIndex) {
    let l = left[leftIndex],
      r = right[rightIndex]
    if (l <= r) {
      temp.push(l)
      leftIndex++
    } else {
      temp.push(r)
      rightIndex++
    }
    // if (left[leftIndex] <= right[rightIndex]) {
    //   temp.push(left[leftIndex])
    //   leftIndex++
    // } else {
    //   temp.push(right[rightIndex])
    //   rightIndex++
    // }
  }
  return temp.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

// const mergeArr = (left, right) => {
//   let temp = []
//   let leftIndex = 0
//   let rightIndex = 0
//   // 判断2个数组中元素大小，依次插入数组
//   while (left.length > leftIndex && right.length > rightIndex) {
//     if (left[leftIndex] <= right[rightIndex]) {
//       temp.push(left[leftIndex])
//       leftIndex++
//     } else {
//       temp.push(right[rightIndex])
//       rightIndex++
//     }
//   }
//   // 合并 多余数组
//   return temp.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
// }

const testArr = []
let i = 0
while (i < 100) {
  testArr.push(Math.floor(Math.random() * 1000))
  i++
}

const res = mergeSort(testArr)
console.log(res)
