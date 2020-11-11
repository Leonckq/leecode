/**
 * @description 循环队列
 * @author Leon
 */

class Node {
  constructor(ele) {
    this.ele = ele
    this.next = null
  }
}
class circleQueue {
  constructor() {
    this.head = null
    this.tail = null
  }
  enqueue(value) {
    let newNode = new Node(value)
    if (this.head == void 0) {
      this.head = newNode
      this.head.next = this.head //?
      this.tail = this.head
    } else {
      const flag = this.head === this.tail
      this.tail.next = newNode
      this.tail = this.tail.next
      this.tail.next.next = this.head
      if (flag) {
        this.head.next = this.tail
      }
    }
  }

  dequeue() {
    if (this.head == null) return -1
    const value = this.head.ele
    if (this.head === this.tail) {
      this.head = null
    } else {
      this.head = this.head.next
      this.tail.next = this.head
    }
    return value
  }
}
