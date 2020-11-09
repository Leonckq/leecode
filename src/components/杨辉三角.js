/**
 * @param {number} numRows
 * @return {number[][]}
 */
//68ms
var generate = function(numRows) {
  let resArr = []
  if(numRows === 0) return []
  if(numRows === 1) {
    return [[1]]
  } 
  if(numRows === 2) {
    return [[1], [1,1]] 
  }
  resArr = [[1], [1,1]]
  for(let i =2; i < numRows; i++) {
    var arr = []
    for(let j = 0; j < i+1; j++) {
      if(j === 0) {
        arr.push(1)
      }
      else if(j === i) {
        arr.push(1)
      }else {
        let item = resArr[i-1][j-1] + resArr[i-1][j]
        arr.push(item)
      }
    }
    resArr.push(arr)
  }
  return resArr
};
//56ms
var generate1 = function(numRows) {
  let resArr = []
  for(let i =0; i < numRows; i++) {
    var arr = []
    for(let j = 0; j < i+1; j++) {
      if(j === 0) {
        arr.push(1)
      }
      else if(j === i) {
        arr.push(1)
      }else {
        let item = resArr[i-1][j-1] + resArr[i-1][j]
        arr.push(item)
      }
    }
    resArr.push(arr)
  }
  return resArr
};

console.log(generate1(700))