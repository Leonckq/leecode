class Node {
  constructor(ele) {
    this.element = ele
    this.next = null
  }
}

export class StackBasedLinkedList {
  constructor() {
    this.top = null
  }

  pop() {
    if (this.top === null) {
      return -1
    }
    const value = this.top.element
    this.top = this.top.next
    return value
  }

  push(value) {
    let node = new Node(value)
    if (this.top === null) {
      this.top = node
    } else {
      node.next = this.top
      this.top = node
    }
  }

  clear() {
    this.top = null
  }

  display() {
    if (this.top !== null) {
      let temp = this.top
      while(temp !== null) {
        console.log(temp.element)
        temp = temp.next
      }
    }
  }
}

// Test
const newStack = new StackBasedLinkedList()
newStack.push(1)
newStack.push(2)
newStack.push(3)
// 获取元素
let res = 0
console.log('-------获取pop元素------')
while (res !== -1) {
    res = newStack.pop()
    console.log(res)
}