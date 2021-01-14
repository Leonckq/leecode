/**
 * @description 手写Promise
 * @author liyang
 */

const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

export default class Promise {
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
    debugger
    if (this.state === PENDING) {
      this.state = FULFILLED
      this.value = value
      this.onFulfilled.forEach((fn) => fn(value))
    }
  }

  reject = (reason) => {
    debugger

    if (this.state === PENDING) {
      this.state = REJECTED
      this.reason = reason
      this.onRejected.forEach((fn) => fn(reason))
    }
  }

  then = (onFulfilled, onRejected) => {
    if (this.state === FULFILLED) {
      typeof onFulfilled === 'function' && onFulfilled(this.value)
    }
    if (this.state === REJECTED) {
      typeof onRejected === 'function' && onRejected(this.reason)
    }
    if (this.state == PENDING) {
      typeof onFulfilled === 'function' && this.onFulfilled.push(onFulfilled)
      typeof onRejected === 'function' && this.onRejected.push(onRejected)
    }
  }
}
