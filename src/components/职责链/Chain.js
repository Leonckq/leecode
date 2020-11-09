import { order500, order200, orderNormal } from './index'

class Chain {
  constructor(fn) {
    this.fn = fn
    this.successor = null
  }

  setNextSuccessor(successor) {
    return this.successor = successor
  }

  next() {
    return this.successor && this.successor.passRequest.apply(this.successor, arguments)
  }

  passRequest() {
    const ret = this.fn.apply(this, arguments)
    if (ret === 'nextSuccessor') {
      return this.next()
    }
  }
}

const chainOrder500 = new Chain(order500)
const chainOrder200 = new Chain(order200)
const chainOrderNormal = new Chain(orderNormal)
chainOrder500.setNextSuccessor(chainOrder200)
chainOrder200.setNextSuccessor(chainOrderNormal)

chainOrder500.passRequest(1, true, 500)
chainOrder500.passRequest(2, true, 500)
chainOrder500.passRequest(3, true, 500)
chainOrder500.passRequest(1, false, 0)