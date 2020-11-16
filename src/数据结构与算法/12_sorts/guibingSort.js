/**
 * @description 归并排序
 * @author Leon
 */
const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr
  }
  const middle = Math.floor(arr.length / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)
  // 递归 分解 合并
  return mergeArr(mergeSort(left), mergeSort(right))
}

const mergeArr = (left, right) => {
  const temp = []
  let leftIndex = 0,
    rightIndex = 0
  while (leftIndex < left.length && rightIndex < right.length) {
    const l = left[leftIndex]
    const r = right[rightIndex]
    if (l < r) {
      temp.push(l)
      leftIndex++
    } else {
      temp.push(r)
      rightIndex++
    }
  }

  // 合并 多余数组
  return temp.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

const testArr = []
let i = 0
while (i < 10) {
  testArr.push(Math.floor(Math.random() * 1000))
  i++
}

const res = mergeSort(testArr)
console.log(res)
