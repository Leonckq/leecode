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
  }
  return temp.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

const testArr = []
let i = 0
while (i < 100) {
  testArr.push(Math.floor(Math.random() * 1000))
  i++
}

const res = mergeSort(testArr)
console.log(res)
