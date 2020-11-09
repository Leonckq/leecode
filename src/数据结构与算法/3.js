class Node {
  constructor(ele) {
    this.element = ele
    this.next = null
  }
}

class LinkList {
  constructor() {
    this.head = new Node('head')
  }

  findByValue(ele) {
    let currentNode = this.head.next
    while(currentNode !== null && currentNode.element !== ele) {
      currentNode = currentNode.next
    }

    return currentNode === null ? -1 : currentNode
  }

  findByIndex(index) {
    let currentNode = this.head.next
    let flag = 0
    while( currentNode !== null && flag < index ) {
      currentNode = currentNode.next
      flag++
    }
    return currentNode === null ? -1 : currentNode
  }

  findPrev(ele) {
    let currentNode = this.head.next
    while( currentNode !== null && currentNode.next.element !== ele ) {
      currentNode = currentNode.next
    }
    return currentNode === null ? -1 : currentNode
  }

  findLast() {
    let currentNode = this.head.next
    while( currentNode !== null ) {
      currentNode = currentNode.next
    }
    return currentNode
  }

  append(ele) {
    let currentNode = this.findLast()
    const newNode = new Node(ele)
    newNode.next = currentNode.next
    currentNode.next = newNode
  }

  remove(ele) {
    let currentNode = this.findPrev(ele)
    if (currentNode === -1) {
      console.log('未找到删除的元素')
      return false
    }
    currentNode.next = currentNode.next.next
  }

  insert(newEle, oldEle) {
    let currentNode = this.findByValue(oldEle)
    if (currentNode === -1) {
      console.log('未找到要插入的位置')
      return false
    }
    const newNode = new Node(newEle)
    newNode.next = currentNode.next
    currentNode.next = newNode
  }
  display() {
    let currentNode = this.head.next
    while(currentNode !== null) {
      console.log(currentNode.element)
      currentNode = currentNode.next
    }
  }

  reverseList() {
    let previousNode = null
    let currentNode = this.head.next
    while(currentNode !== null) {
      let nextNode = currentNode.next
      currentNode.next = previousNode
      previousNode = currentNode
      currentNode = nextNode
    }
    this.head.next = previousNode
    return previousNode
  }

  checkCircle() {
    let slow = this.head
    let fast = this.head.next
    while( fast !== null && fast.next !== null ) {
      fast = fast.next.next
      slow = slow.next
      if (slow === fast) {
        return true
      }
    }
    return false
  }

  findMiddleNode() {
    let slow = this.head
    let fast = this.head
    while(fast.next !== null && fast.next.next !== null) {
      slow = slow.next
      fast = fast.next.next
    }
    return slow
  }

  removeByIndexFromEnd(index) {
    if (this.checkCircle()) return false
    let flag = 1
    this.reverseList()
    let currentNode = this.head.next
    while( currentNode !== null && flag < index ) {
      currentNode = currentNode.next
      flag++
    }
    if (currentNode === null) {
      console.log('无法删除最后一个数据或找不到')
      return
    }
    this.remove(currentNode.element)
    this.reverseList()
  }


}