/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
  const str = S
  let numberArr = []
  for(let i = 0; i < str.length; i++) {
    numberArr.push(i)
  }
  const res = []
  const getMax = () => {
    const num = Math.max.apply(null, numberArr)
    numberArr = numberArr.filter(oo => oo !== num)
    return num
  }
  const getMin = () => {
    const num = Math.min.apply(null, numberArr)
    numberArr = numberArr.filter(oo => oo !== num)
    return num
  }
  for(let i = 0; i < str.length; i++) {
    if (str[i] === 'D') {
      res.push(getMax())
    } else {
      res.push(getMin())
    }
  }
  return res
};

var diStringMatch = function(S) {
  let a = 0,
  b = S.length;
  return (S+S[S.length - 1]).split('').map((x) => x=='I'?a++:b--)
}