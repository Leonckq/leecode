/**
 * @description 队列
 * @author Leon
 */
class Node {
  constructor(ele) {
    this.ele = ele
    this.next = null
  }
}
class QueueBasedOnLinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  enqueue(value) {
    let newNode = new Node(value)
    if (this.tail == void 0) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode
      this.tail = this.tail.next
    }
  }

  dequeue() {
    if (this.head == void 0) {
      return -1
    }
    const ret = this.head.ele
    this.head = this.head.next
    return ret
  }
}

// Test
const newQueue = new QueueBasedOnLinkedList()
// 插入元素
newQueue.enqueue(1)
newQueue.enqueue(2)
newQueue.enqueue(3)
// 获取元素
let res = 0
console.log('-------获取dequeue元素------')
while (res !== -1) {
  res = newQueue.dequeue()
  console.log(res)
}
