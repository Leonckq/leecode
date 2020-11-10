/**
 * @description 单向链表
 * @author Leon
 */
class Node {
  constructor(ele) {
    this.ele = ele
    this.next = null
  }
}

class LinkList {
  constructor() {
    this.head = new Node('head')
  }

  findByValue(ele) {
    let currentNode = this.head.next
    while (currentNode != void 0 && currentNode.ele != ele) {
      currentNode = currentNode.next
    }
    return currentNode === null ? -1 : currentNode
  }

  findByIndex(index) {
    let currentNode = this.head.next
    let pos = 0
    while (currentNode != void 0 && pos < index) {
      currentNode = currentNode.next
    }
    return currentNode === null ? -1 : currentNode
  }

  findLast() {
    let currentNode = this.head
    while (currentNode.next != void 0) {
      currentNode = currentNode.next
    }
    return currentNode === null ? -1 : currentNode
  }

  findPrev(ele) {
    let currentNode = this.head
    while (currentNode.next != void 0 && currentNode.next.ele) {
      currentNode = currentNode.next
    }
    return currentNode === null ? -1 : currentNode
  }

  append(ele) {
    let currentNode = this.findLast()
    if (currentNode === -1) return
    let newNode = new Node(ele)
    newNode.next = currentNode.next
    currentNode.next = newNode
  }

  insert(newEle, oldEle) {
    let currentNode = this.findByValue(oldEle)
    if (currentNode === -1) return
    let newNode = new Node(newEle)
    newNode.next = currentNode.next
    currentNode.next = newNode
  }

  remove(ele) {
    let currentNode = this.findPrev(ele)

    if (currentNode === -1) return
    currentNode.next = currentNode.next.next
  }

  display() {
    let currentNode = this.head
    while (currentNode.next != void0) {
      console.log(currentNode.ele)
      currentNode = currentNode.next
    }
  }

  reverseList() {
    let root = new Node('head')
    let currentNode = this.head
    // let fast = this.head
    // let slow = this.head
    // while (fast.next != void 0 && fast.next.next != void 0) {
    //   slow = slow.next
    //   fast = fast.next.next
    // }
    while (currentNode != void 0) {
      const next = currentNode.next
      currentNode.next = root.next
      root.next = currentNode
      currentNode = next
    }
    this.head = root
  }

  findMiddleNode() {
    let fast = this.head
    let slow = this.head
    while (fast.next != void 0 && fast.next.next != void 0) {
      fast = fast.next.next
      slow = slow.next
    }
    return slow
  }

  checkCircle() {
    let fast = this.head.next
    let slow = this.head
    while (fast != void 0 && fast.next != void 0) {
      fast = fast.next.next
      slow = slow.next
      if (slow === fast) return true
    }
    return false
  }
  // 删除倒数第k个节点
  removeByIndexFromEnd(index) {
    if (this.checkCircle()) {
      return false
    }

    this.reverseList()
    let currentNode = this.head.next
    let pos = 1
    while (currentNode != void 0 && pos !== index) {
      currentNode = currentNode.next
      pos++
    }
    if (currentNode === null) {
      console.log('无法删除最后一个节点或者该节点不存在')
      return false
    }
    this.remove(currentNode.ele)
    this.reverseList()
  }

  mergeSortedLists(listA, listB) {
    if (!listA) {
      return listB
    }
    if (!listB) {
      return listBA
    }
    let resultList = undefined
    let a = listA
    let b = listB
    if (a.ele < b.ele) {
      resultList = a
      a = a.next
    } else {
      resultList = b
      b = b.next
    }
    let currentNode = resultList
    while (a != void 0 && b != void 0) {
      if (a.ele < b.ele) {
        currentNode.next = a
        a = a.next
      } else {
        currentNode.next = b
        b = b.next
      }
      currentNode = currentNode.next
    }
    if (a != void 0) {
      currentNode.next = a
    }
    if (b != void 0) {
      currentNode.next = b
    }
    return resultList
  }
}
