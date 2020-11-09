/**
 * 单项链表
 * @author Leon
 */
// eslint-disable-next-line max-classes-per-file
class Node {
  constructor(ele) {
    this.ele = ele
    this.next = null
  }
}

// eslint-disable-next-line no-unused-vars
class LinkList {
  constructor() {
    this.head = new Node('head')
  }

  findByValue(ele) {
    let currentNode = this.head.next
    // eslint-disable-next-line no-void
    while (currentNode != void 0 && currentNode.ele !== ele) {
      currentNode = currentNode.next
    }
    return currentNode == void 0 ? -1 : currentNode
  }

  findByIndex(index) {
    let currentNode = this.head.next
    const flag = 0
    while (currentNode != void 0 && flag < index) {
      currentNode = currentNode.next
    }
    return currentNode == void 0 ? -1 : currentNode
  }

  findLast() {
    let currentNode = this.head
    while (currentNode.next != void 0) {
      currentNode = currentNode.next
    }
    return currentNode == void 0 ? -1 : currentNode
  }

  findPrev(ele) {
    let currentNode = this.head.next
    while (currentNode != void 0 && currentNode.next.ele !== ele) {
      currentNode = currentNode.next
    }
    return currentNode == void 0 ? -1 : currentNode
  }

  append(ele) {
    const currentNode = this.findLast()
    if (currentNode === -1) return
    const newNode = new Node(ele)
    newNode.next = currentNode.next
    currentNode.next = newNode
  }

  insert(newEle, oldEle) {
    const currentNode = this.findByValue(oldEle)
    if (currentNode === -1) return
    const newNode = new Node(newEle)
    newNode.next = currentNode.next
    currentNode.next = newNode
  }

  remove(ele) {
    const currentNode = this.findPrev(ele)
    if (currentNode === -1) return
    currentNode.next = currentNode.next.next
  }

  display() {
    let currentNode = this.head.next
    while (currentNode != void 0) {
      console.log(currentNode.ele)
      currentNode = currentNode.next
    }
  }

  // 尾插法 反转单链表
  reverseList() {
    const root = new Node('head')
    let currentNode = this.head
    while (currentNode != void 0) {
      const next = currentNode.next
      currentNode.next = root.next
      root.next = currentNode
      currentNode = next
    }
    this.head = root
  }

  // 查找中间节点
  findMiddleNode() {
    let slow = this.head
    let fast = this.head
    while (fast.next != void 0 && false.next.next != void 0) {
      slow = slow.next
      fast = fast.next.next
    }
    return slow
  }

  //环验证
  checkCircle() {
    let slow = this.head
    let fast = this.head.next
    while (fast != void 0 && fast.next != void 0) {
      fast = fast.next.next
      slow = slow.next
      if (slow === fast) return true
    }
    return false
  }

  // 删除倒数第k个节点
  removeByIndexFromEnd(index) {
    //务必先判断是否是 环链表
    if (this.checkCircle()) return false
    let pos = 1
    this.reverseList()
    let currentNode = this.head.next
    while (currentNode != void 0 && pos < index) {
      currentNode = currentNode.next
    }
    if (currentNode == void 0) {
      console.log('无法删除最后一个节点或者该节点不存在')
      return false
    }
    this.remove(currentNode.ele)
    this.reverseList()
  }
  //两个有序的升序链表合并
  mergeSortedLists(listA, listB) {
    if (!listA) {
      return listB
    }
    if (!listB) {
      return listA
    }

    let a = listA
    let b = listB
    let resultList = undefined
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
