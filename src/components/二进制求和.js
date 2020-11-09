/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let diff = a.length - b.length
  if(diff > 0) {
    while(diff) {
      diff--
      b = '0' + b
    }
  }
  if(diff < 0) {
    let newDiff = Math.abs(diff)
    while(newDiff) {
      newDiff--
      a = '0' + a
    }
  }
  let numa = a.split('').reverse(), numb = b.split('').reverse(), flag = 0, resArr = []
  for(let i = 0; i < numa.length; i++) {                      
    let cur = Number(numa[i]) + Number(numb[i]) + flag
    if(cur < 2) {
      resArr.push(cur)
      flag = 0
    } else if (cur === 2) {
      flag = 1
      resArr.push(0)
    } else if( cur === 3 ) {
      flag = 1
      resArr.push(1)
    }
  }
  if(flag == 1){
    resArr.push(1)
  }
  return resArr = resArr.reverse().join('')
};
//解法二......
var addBinary = function(a, b) {
  return (BigInt("0b"+a) + BigInt("0b"+b)).toString(2);
};
// console.log(addBinary("10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101",
// "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"))
console.log(addBinary('110111','101111111'))
