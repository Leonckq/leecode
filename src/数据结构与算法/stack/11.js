/**
 *@description 栈
 */

class Node {
  constructor(ele) {
    this.ele = ele
    this.next = null
  }
}
class StackBasedLinkedList {
  constructor() {
    this.top = null
  }

  push(value) {
    let newNode = new Node(value)
    if (this.top == void 0) {
      this.top = newNode
    } else {
      newNode.next = this.top
      this.top = newNode
    }
  }

  pop() {
    if (this.top == void 0) {
      return -1
    }
    const value = this.top.ele
    this.top = this.top.next
    return value
  }

  clear() {
    this.top = null
  }

  display() {
    let temp = this.top
    while (temp != void 0) {
      console.log(temp.ele)
      temp = temp.next
    }
  }
}

module.exports = StackBasedLinkedList
