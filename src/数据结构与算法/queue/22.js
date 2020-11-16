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

class CircularQueue {
  constructor() {
    this.head = null
    this.tail = null
  }

  enqueue(value) {
    let newNode = new Node(value)
    if (this.head == null) {
      this.head = newNode
      // this.head.next = this.head
      this.tail = this.head
    } else {
      const flag = this.head === this.tail
      this.tail.next = newNode
      this.tail.next.next = this.head // 首尾相连
      this.tail = this.tail.next
      if (flag) {
        this.head.next = this.tail
      }
    }
  }

  dequeue() {
    if (this.head == null) return -1
    if (this.head == this.tail) {
      // 队列为空
      const ret = this.head.ele
      this.head = null
      return ret
    } else {
      const value = this.head.ele
      this.head = this.head.next
      this.tail.next = this.head
      return value
    }
  }

  display() {
    let res = 0
    console.log('-------获取dequeue元素------')
    while (res !== -1) {
      res = this.dequeue()
      console.log(res)
    }
  }
}

// Test
const newCircularQueue = new CircularQueue()
// 插入元素
newCircularQueue.enqueue(1)
newCircularQueue.enqueue(2)
newCircularQueue.enqueue(3)
// 获取元素
newCircularQueue.display()
newCircularQueue.enqueue(1)
newCircularQueue.display()
