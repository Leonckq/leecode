/**
 * @description 手写Promise
 * @author liyang
 */

const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

export default class MyPromise {
  constructor(executor) {
    this.state = PENDING
    this.value = undefined // 成功结果
    this.reason = undefined // 失败原因

    this.onFulfilled = [] // 成功的回调
    this.onRejected = [] // 失败的回调

    try {
      executor(this.resolve, this.reject)
    } catch (e) {
      reject(e)
    }
  }

  resolve = (value) => {
    if (this.state === PENDING) {
      this.state = FULFILLED
      this.value = value
      this.onFulfilled.forEach((fn) => fn(value))
    }
  }

  reject = (reason) => {
    if (this.state === PENDING) {
      this.state = REJECTED
      this.reason = reason
      this.onRejected.forEach((fn) => fn(reason))
    }
  }

  then = (onFulfilled, onRejected) => {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (value) => this.value
    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : (reason) => {
            throw reason
          }
    const promise2 = new MyPromise((resolve, reject) => {
      if (this.state === FULFILLED) {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value)
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        }, 0) // setTimeout 模拟 这是一个宏任务（其实不对）
      } else if (this.state === REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason)
            resolvePromise(promise2, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        }, 0)
      } else if (this.state === PENDING) {
        this.onFulfilled.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value)
              resolvePromise(promise2, x, resolve, reject)
            } catch (error) {
              reject(error)
            }
          }, 0)
        })
        this.onRejected.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason)
              resolvePromise(promise2, x, resolve, reject)
            } catch (error) {
              reject(error)
            }
          }, 0)
        })
      }
    })
    return promise2
  }
}

function resolvePromise(promise2, x, resolve, reject) {
  // 循环引用
  if (promise2 === x) {
    return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
  }
  // 只能调用一次
  let called
  if ((typeof x === 'object' && x != null) || typeof x === 'function') {
    try {
      // 为了判断resolve 过的就不用再reject了（比如reject 和 resolve 同时调用的时候）
      let then = x.then
      if (typeof then === 'function') {
        // 不要写成 x.then，直接 then.call 就可以了 因为 x.then 会再次取值，Object.defineProperty
        then.call(
          x,
          (y) => {
            if (called) return
            called = true
            // 递归解析的过程（因为promise中海油promise）
            resolvePromise(promise2, y, resolve, reject)
          },
          (r) => {
            if (called) return
            called = true
            reject(r)
          }
        )
      } else {
        // 如果 x.then 是个普通值就直接返回 resolve 作为结果
        resolve(x)
      }
    } catch (e) {
      if (called) return
      called = true
      reject(e)
    }
  } else {
    // 如果 x.then 是个普通值就直接返回 resolve 作为结果
    resolve(x)
  }
}
