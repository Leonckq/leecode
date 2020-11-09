const arr = [
  1,
  4,
  6,
  786,
  85,
  4,
  346,
  65,
  3,
  254,
  676,
  43,
  23,
  67,
  8,
  64,
  34,
  67,
  4323,
  233,
  543
]

// const a = new Date().getTime()
// console.log(a)
const bubble = arr => {
  if (arr.length <= 1) {
    return arr
  }
  arr.forEach((ele, index) => {
    let hasChange = false
    for (let i = 0; i < arr.length - index - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        hasChange = true
        const [a, b] = [arr[i], arr[i + 1]]
        arr[i + 1] = a
        arr[i] = b
      }
    }
    if (!hasChange) return arr
  })

  return arr
}
// const b = new Date().getTime()
// console.log(b)
// console.log(b-a)
// console.log(bubble(arr))

// // 插入排序
// const insertSort = value => {
//   const arr = value.slice()
//   if (arr.length <= 1) return
//   for(let i = 1; i < arr.length ; i++) {
//     const temp = arr[i]
//     let j = i - 1
//     for(j; j >= 0; j--) {
//       if (arr[j] > temp) {
//         arr[j + 1] = arr[j]
//       } else {
//         break
//       }
//     }
//     arr[j + 1] = temp
//   }
//   return arr
// }

const cha = value => {
  if (value.length <= 1) {
    return value
  }
  const arr = value.slice()
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i]
    let j = i - 1
    for (; j >= 0; j--) {
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

// console.log(cha(arr))

const chaa = value => {
  if (value.length <= 1) {
    return value
  }
  const arr = value.slice()
  for (let i = 1; i < arr.lengthl; i++) {
    let temp = arr[i]
    let j = i - 1
    for (; j >= 0; j--) {
      if (arr[j] > temp) {
        arr[j + 1] = temp
      } else {
        break
      }
    }
    arr[j + 1] = temp
  }
  return arr
}

// const bubbleSort = (value) => {
//   const arr = value.slice()
//   if (arr.length <= 1) {
//     return
//   }
//   for(let i = 0; i < arr.length; i++) {
//     let hasChange = false
//     for(let j = 0; j < arr.length - i - 1; j++) {
//       if (arr[j] > arr[j+1]) {
//         const [ a, b ] = [ arr[j], arr[j+1] ]
//         arr[j + 1] = a
//         arr[j] = b
//         hasChange = true
//       }
//     }
//     if (!hasChange) break
//   }
//   return arr
// }
// console.log(bubbleSort(arr))

// // 插入排序
// const insertSort = value => {
//   const arr = value.slice()
//   if (arr.length <= 1) return
//   for(let i = 1; i < arr.length ; i++) {
//     const temp = arr[i]
//     let j = i - 1
//     for(j; j >= 0; j--) {
//       if (arr[j] > temp) {
//         arr[j + 1] = arr[j]
//       } else {
//         break
//       }
//     }
//     arr[j + 1] = temp
//   }
//   return arr
// }

// console.log(insertSort(arr))

const chose = value => {
  if (value.length <= 1) {
    return value
  }
  const arr = value.slice()
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    const [a, b] = [arr[i], arr[minIndex]]
    arr[i] = b
    arr[minIndex] = a
  }
  return arr
}


console.log(chose(arr))