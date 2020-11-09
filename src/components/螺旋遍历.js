/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

 //解法一 80ms
var spiralOrder = function(matrix) {
    if (!matrix.length || matrix === null) return []
    let n = matrix.length, m = matrix[0].length
    let up = 0, down = n-1, left = 0, right = m-1
    const resArr = []
    while(true) {
      for(let i = left; i <= right; i++) { //向右移动直到最右
        resArr.push(matrix[up][i])
      }
      if(++up > down) break
      for(let i = up; i <= down; i++) { //向下
        resArr.push(matrix[i][right])
      }
      if (--right < left) break
      for(let i = right; i >= left; i--) {
        resArr.push(matrix[down][i])
      }
      if (--down < up) break
      for(let i = down; i >= up; i--) {
        resArr.push(matrix[i][left])
      }
      if (++left > right) break
    }
    return resArr
};
//解法二 60ms
var spiralOrder1 = function(matrix) {
  if(!matrix.length || matrix === null) return []
  const resArr = []
  let c1 = 0, r1 = 0, c2 = matrix[0].length - 1, r2 = matrix.length -1
  while(r1 <= r2 && c1 <= c2) {
    for( let i = c1; i <= c2; i++) { //向右
      resArr.push(matrix[r1][i])
    }
    for(let i = r1 + 1; i <= r2; i++) { //向下
      resArr.push(matrix[i][c2])
    }
    if (c1 < c2 && r1 < r2) { //向左
      for(let i = c2 - 1; i >= c1; i--) {
        resArr.push(matrix[r2][i])
      }
      for(let i = r2 - 1 ; i > r1; i--) {
        resArr.push(matrix[i][c1])
      }
    }
    r1++
    c1++
    r2--
    c2--
  }
  return resArr
};