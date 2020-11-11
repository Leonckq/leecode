/**
 *@description queue
 */

class Node {
  constructor(ele) {
    this.ele = ele
    this.next = null
  }
}
class QueueList {
  constructor() {
    this.head = null
    this.tail = null
  }

  enqueue(value) {
    let newNode = new Node(value)
    if (this.head == null) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode
      this.tail = this.tail.next
    }
  }

  dequeue() {
    if (this.head == null) {
      return -1
    }
    const ret = this.head.ele
    this.head = this.head.next
    return ret
  }
}
