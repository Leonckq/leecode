let obj1 = {
  age: 20,
  name: 'haha',
  habit: ['baseball', 'football', 'swiming'],
  lover: {
    name: 'qingqing',
    sex: 'femal',
    goodat: {
      a: {
        name: 'haha'
      }
    }
  }
}

let obj2 = deepClone(obj1)
obj2.lover.name = 'qingbaoer'
console.log(obj1, obj2)
/**
 * 深拷贝
 * @param {} obj 
 */
function deepClone(obj = {}) {
  if(typeof obj !== 'object' || obj == null) {
    return obj
  }
  let resObj = obj instanceof Array ? [] : {}

  for(let item in obj) {
    if (obj.hasOwnProperty(item)) {
      resObj[item] = deepClone(obj[item])
    }
  }
  return resObj
}