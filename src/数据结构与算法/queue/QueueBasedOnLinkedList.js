// class Node {
//   constructor(ele) {
//     this.element = ele
//     this.next = null
//   }
// }

// class QueueBasedOnLinkedList {
//   constructor() {
//     this.head = null
//     this.tail = null
//   }

//   enqueue(value) {
//     const node = new Node(value)
//     if (this.head === null) {
//       this.head = node
//       this.head.next = this.head
//       this.tail = this.head
//     } else {
//       this.tail.next = node
//       this.tail = this.tail.next
//     }
//   }

//   dequeue() {
//     if (this.head !== null) {
//       const value = this.head.element
//       this.head = this.head.next
//       return value
//     } else {
//       return -1
//     }
//   }
// }

// // Test
// const newQueue = new QueueBasedOnLinkedList()
// // 插入元素
// newQueue.enqueue(1)
// newQueue.enqueue(2)
// newQueue.enqueue(3)
// // 获取元素
// let res = 0
// console.log('-------获取dequeue元素------')
// while (res !== -1) {
//     res = newQueue.dequeue()
//     console.log(res)
// }







class Node {
  constructor(ele) {
    this.element = ele
    this.next = null
  }
}

class QueueBasedOnLinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  enqueue(value) {
    const node = new Node(value)
    if (this.head === null) {
      this.head = node
      this.tail = this.head
    } else {
      this.tail.next = node
      this.tail = this.tail.next
    }
  }

  dequeue() {
    if (this.head != void 0) {
      const value = this.head.element
      this.head = this.head.next
      return value
    } else {
      return -1
    }
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







































