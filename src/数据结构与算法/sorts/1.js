function getArr(n) {
  let i = 0
  let arr = new Array(n)
  for (; i < n; i++) {
    arr[i] = i
  }
  return arr
}


let i = 1
while(i < n) {
  i = i * 2
}


const cal = n => {
  let res = 0
  let i = 1
  for (i; i< n; i++) {
    res = res + fn(1)
  }
}


let a = 6
let b = 7
let sum = a + b

const fn = n => {
  let sum = 0
  let i = 1
  for (i; i < n; i++) {
    sum = sum + i
  }
  return sum
}


const cal1 = n => {
  let sum_1 = 0
  let p = 1
  for(p ; p< 10000; p++) {
    sum1 += p
  }

  let sum_2 = 0
  let q = 1
  for (q; q < n; q++) {
    sum_2 += q
  }
  
  let sum_3 = 0
  let i = 1
  let j = 1
  for (i; i < n; i++) {
    j = 1
    for(j; j< n; j++) {
      sum_3 = sum_3 + i * j
    }
  }

  return sum_1 + sum_2 + sum_3
}


const calSum = n => {
  let sum = 0
  let i = 1
  let j = 1
  for (i; i < n; i++) {
    j = 1
    for (j; j < n; j++) {
      sum += i * j
    }
  }

  return sum
}








// const calSum = (n) => {
//   let sum = 0
//   let i = 1
//   for (i; i < n; i++) {
//     sum += i
//   }
//   return sum
// }









/**
 * @description 排序
 * @author Leon
 */
const arr = [1, 4, 6, 786, 85, 4, 346, 65, 3, 254, 676, 43, 23, 67, 8, 64, 34, 67, 4323, 233, 543]

/**
 *
 * @param {Array} arr
 */
const bubble = (arr) => {
  if (arr.length <= 1) {
    return arr
  }
  for (let i = 0; i < arr.length; i++) {
    let hasChange = false
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        hasChange = true
      }
      if (!hasChange) break
    }
  }
  return arr
}

// const bubble = (arr) => {
//   if (arr.length <= 1) {
//     return arr
//   }
//   arr.forEach((ele, index) => {
//     let hasChange = false
//     for (let i = 0; i < arr.length - index - 1; i++) {
//       if (arr[i] > arr[i + 1]) {
//         hasChange = true
//         const [a, b] = [arr[i], arr[i + 1]]
//         arr[i + 1] = a
//         arr[i] = b
//       }
//     }
//     if (!hasChange) return arr
//   })

//   return arr
// }

const insertSort = (arr) => {
  if (arr.length === 1) {
    return arr
  }
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i]
    let j = i - 1
    for (j; j >= 0; j--) {
      if (arr[j] > temp) {
        arr[j + 1] = arr[j]
      } else {
        break
      }
    }
    arr[j + 1] = temp
  }
  return arr
}

const insertionSort = (arr) => {
  if (arr.length <= 1) return
  for (let i = 1; i < arr.length; i++) {
    const temp = arr[i]
    let j = i - 1
    // 若arr[i]前有大于arr[i]的值的化，向后移位，腾出空间，直到一个<=arr[i]的值
    for (j; j >= 0; j--) {
      if (arr[j] > temp) {
        arr[j + 1] = arr[j]
      } else {
        break
      }
    }
    arr[j + 1] = temp
  }
  console.log(arr)
}

const insertSort1 = (arr) => {
  if (arr.length <= 1) {
    return arr
  }
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i]
    let j = i - 1
    for (j; j >= 0; j--) {
      if (arr[j] > temp) {
        arr[j + 1] = arr[j]
      } else {
        break
      }
    }
    arr[j + 1] = temp
  }
  return arr
}

const bubble1 = (arr) => {
  if (arr.length <= 1) {
    return arr
  }
  for (let i = 0; i < arr.length; i++) {
    let hasChange = false
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = temp
        hasChange = true
      }

      // 如果false 说明所有元素已经到位
      if (!hasChange) break
    }
    return arr
  }
}

const choseSort = (arr) => {
  if (arr.length <= 1) {
    return arr
  }
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    let temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
  return arr
}
console.log(choseSort(arr))

const calSum = (n) => {
  let sum = 0
  let i = 1
  for (i; i < n; i++) {
    sum += i
  }
  return sum
}
