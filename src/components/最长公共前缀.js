/**
 * @param {string[]} strs
 * @return {string}
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 */
var longestCommonPrefix = function(strs) {
    if(!strs.length || strs === null) return ''
    let res = strs[0]
    for(let i = 0; i < strs.length -1; i++) {
      if(strs[i] === '' || strs[i+1] === '') {
        return ''
      }
      let data = getLetters(strs[i], strs[i+1], res)
      if(data === '') {
        return ''
      }
    }
    function getLetters(strs1, strs2, resparams) {
      // let arr1 = strs1.split(''), arr2 = strs2.split('')
      let resArr = resparams.split('')
      let str = '', arr = []
      resArr.forEach((item) => {
        str += item
        if(strs1.startsWith(str) && strs2.startsWith(str)) {
          arr.push(item)
        }
      })
      res = arr.join('')
      return res
    }
    return res
};


var longestCommonPrefix = function(strs) {
  if (!strs.length) return '';

  let commonStr = strs[0];

  for (let i = 1; i < strs.length; i++) {
      while (strs[i].indexOf(commonStr) != 0) {
          commonStr = commonStr.substring(0, commonStr.length - 1);
      }
  }
  return commonStr;
}


console.log(longestCommonPrefix(["flower","flow","flight"]))