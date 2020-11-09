class Node {
  constructor(ele) {
    this.element = ele
    this.next = null
  }
}

class NodeList {
  constructor() {
    this.head = new Node('head')
  }

  append(item) {
    const newNode = new Node(item)
    let currentNode = this.head
    while(currentNode.next) {
      currentNode = currentNode.next
    }
    currentNode.next = newNode
  }

  findByValue(element) {
    let currentNode = this.head
    while(currentNode.next !== null && currentNode.element !== element) {
      currentNode = currentNode.next
    }
    console.log(currentNode)
    return currentNode === null ? -1 : currentNode
  }

  findByIndex(index) {
    let currentNode = this.head
    let flag = 0
    while(currentNode.next !== null && flag <= index) {
      currentNode = currentNode.next
      flag++
    }
    console.log(currentNode)
    return currentNode === null ? -1 : currentNode
  }

  insert(newEle, oldEle) {
    let currentNode = this.findByValue(oldEle)
    if (currentNode === -1) {
      console.log('未找到插入点')
      return
    }
    const newNode = new Node(newEle)
    newNode.next = currentNode.next
    currentNode.next = newNode
  }

  findPrev(item) {
    let currentNode = this.head
    while( currentNode.next !== null && currentNode.next.element !== item ) {
      currentNode = currentNode.next
    }
    return currentNode === null ? -1 : currentNode
  }

  remove(ele) {
    const currentNode = this.findPrev(ele)
    if (currentNode === -1) {
      return
    }
    currentNode.next = currentNode.next.next
  }
  display() {
    let currentNode = this.head
    while(currentNode !== null) {
      console.log(currentNode.element)
      currentNode = currentNode.next
    }

  }

}