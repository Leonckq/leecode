/**
 * 归并排序
 */


const testArr = ['1','3','5','7','9',88,32,4,5,66,32,1,43,2,2,3,4,5,5,5,3,3,3,9]




const mergeArr = (left, right) => {
  const temp = []
  let leftIndex = 0
  let rightIndex = 0
  while(left.length > leftIndex && right.length > rightIndex) {
    if (left[leftIndex] <= right[rightIndex]) {
      temp.push(left[leftIndex])
      leftIndex++
    } else {
      temp.push(right[rightIndex])
      rightIndex++
    }
  }
  return temp.concat(left.slice(leftIndex).concat(right.slice(rightIndex)))
}

const mergeSort = arr => {
  //当任意数组分解到只有一个时返回
  if (arr.length <= 1) {
    return arr
  }
  const middle = Math.floor(arr.length / 2)
  const left = arr.slice(0 , middle)
  const right = arr.slice(middle)
  //递归 分解 合并
  return mergeArr(mergeSort(left), mergeSort(right))
}

const res = mergeSort(testArr)
console.log(res)
