/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

// 460 ms
var twoSum = function(numbers, target) {
  const isTrue = numbers instanceof Array
  let res = []
  if (isTrue) {
    numbers.find((item, index1) => {
      let index2 = getIndex(target - item, numbers, index1)
      if (!!index2) {
        res = [index1+1, index2]
        return true
      }
      return false
    })
  }
  return res
};

const getIndex = (tar, numbers, index1) => {
  if (numbers.includes(tar)) {
    return numbers.findIndex((item, index) => {
      return item === tar && index > index1
    }) + 1
  }
  return undefined
}

console.log(twoSum([0,0,3,4],0))

// 范例 44ms
var twoSum = function(numbers, target) {
    // 两次for
    // for(let i=0;i<numbers.length && numbers[i]*2 <= target;i++){
    //     for(let j=i+1;j<numbers.length;j++){
    //         if(numbers[i] + numbers[j] === target){
    //             return [i+1,j+1]
    //         }
    //     }
    // }
    
    // 优化
    let arr = []
    for(let i=0;i<numbers.length;i++){
        if(typeof arr[numbers[i]] === 'undefined'){
            arr[target-numbers[i]] = i+1
        }else{
            return [arr[numbers[i]],i+1]
        }
    }
};