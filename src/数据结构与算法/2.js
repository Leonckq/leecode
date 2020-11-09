class Node {
  constructor(ele) {
    this.element = ele
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = new Node('head')
  }

  findLast() {
    let currentNode = this.head
    while(currentNode.next !== null) {
      currentNode = currentNode.next
    }
    return currentNode
  }

  append(item) {
    let currentNode = this.findLast()
    const newNode = new Node(item)
    newNode.next = currentNode.next
    currentNode.next = newNode 
  }

  findByValue(ele) {
    let currentNode = this.head.next
    while(currentNode !== null && currentNode.element !== ele) {
      currentNode = currentNode.next
    }
    console.log(currentNode)
    return currentNode === null ? -1 : currentNode
  }

  findByIndex(index) {
    let currentNode = this.head.next
    let flag = 0
    while(currentNode !== null && flag < index) {
      currentNode = currentNode.next
      flag++
    }
    console.log(currentNode)
    return currentNode === null ? -1 : currentNode
  }

  findPrev(ele) {
    let currentNode = this.head.next
    while(currentNode !== null && currentNode.next.element !== ele) {
      currentNode = currentNode.next
    }
    // console.log(currentNode)
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
  remove(item) {
    let currentNode = this.findPrev(item)
    if (currentNode === -1) {
      return
    }
    currentNode.next = currentNode.next.next
  }

  display() {
    let currentNode = this.head.next
    while(currentNode !== null) {
      console.log(currentNode)
      currentNode = currentNode.next
    }
  }
  reverseList() {
    let currentNode = this.head.next
    let previousNode = null
    while(currentNode !== null) {
      let nextNode = currentNode.next
      currentNode.next = previousNode
      previousNode = currentNode
      currentNode = nextNode
    }
    this.head.next = previousNode
    // console.log(previousNode)
    return previousNode
  }

  // 环验证
  checkCircle() {
    let fast = this.head.next
    let slow = this.head
    while ( fast !== null && fast.next !== null ) {
      fast = fast.next.next
      slow = slow.next
      if (slow === fast) {
        return true
      }
    }
    return false
  }

  // 删除倒数第k个节点
  removeByIndexFromEnd(index) {
    if (this.checkCircle()) return false
    let flag = 1
    this.reverseList()
    let currentNode = this.head.next
    while(currentNode !== null && flag < index) {
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

  // 求中间节点
  findMiddleNode() {
    let fast = this.head
    let slow = this.head
    while(fast.next !== null && fast.next.next !== null) {
      fast = fast.next.next
      slow = slow.next
    }
    console.log(slow)
    return slow
  }


}

const LList = new LinkedList()
LList.append('chen')
LList.append('curry')
LList.append('sang')
LList.append('zhao') // chen -> curry -> sang -> zhao
console.log('-------------insert item------------')
LList.insert('qian', 'chen') // 首元素后插入
LList.insert('zhou', 'zhao') // 尾元素后插入
LList.display() // chen -> qian -> curry -> sang -> zhao -> zhou
console.log('-------------remove item------------')
// LList.remove('curry')
// LList.display() // chen -> qian -> sang -> zhao -> zhou
// console.log('-------------find by item------------')
// LList.findByValue('chen')
// console.log('-------------find by index------------')
// LList.findByIndex(2)
// console.log('-------------与头结点同值元素测试------------')
// LList.insert('head', 'sang')
// LList.display() // chen -> qian -> sang -> head -> zhao -> zhou
// console.log('-------------findPrev------------')
// LList.findPrev('head') // sang
// console.log('-------------findPrev------------')
// LList.remove('head')
// LList.display() // chen -> qian -> sang -> zhao -> zhou

LList.reverseList()
LList.display()
console.log('-------------findMiddleNode------------')
LList.findMiddleNode()
console.log('-------------倒数第k个------------')
LList.removeByIndexFromEnd(2)
LList.display()
