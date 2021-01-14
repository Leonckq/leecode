import MyPromise from './lib/Promise2'

var myP = new MyPromise(function (resolve, reject) {
  console.log('执行')
  setTimeout(function () {
    reject(3)
  }, 1000)
})

myP.then(
  function (res) {
    debugger
    console.log(res)
  },
  function (err) {
    debugger
    console.log(err)
  }
)

var p = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(4)
  }, 0)
})
p.then((res) => {
  //4 res
  console.log(res, 'res')
})
p.then((res1) => {
  //4 res1
  console.log(res1, 'res1')
})

const promise = new MyPromise((resolve, reject) => {
  resolve('成功')
})
  .then()
  .then((res) => {
    console.log('chenggong', res)
    throw new Error(323)
  })
  .then(
    (data) => {
      console.log(data)
    },
    (err) => {
      debugger
      console.log('err', err)
    }
  )
