/**
 * 1）单链表的插入、删除、查找操作；
 * 2）链表中存储的是int类型的数据；
 */

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

  append(element) {
    const newNode = new Node(element)
    let currentNode = this.head
    while(currentNode.next) {
      currentNode = currentNode.next
    }
    currentNode.next = newNode
  }

  findByValue(item) {
    let currentNode = this.head.next
    while(currentNode !== null && currentNode.element !== item) {
      currentNode = currentNode.next
    }
    console.log(currentNode)
    return currentNode === null ? -1 : currentNode
  }

  // 根据index查找节点，下标从0开始
  findByIndex(index) {
    if (index<0) return -1
    let currentNode = this.head.next
    let flag = 0
    debugger
    while(flag !== index && currentNode !== null) {
      currentNode = currentNode.next
      flag++
    }
    console.log(currentNode)
    return currentNode === null ? -1 : currentNode

    // let currentNode = this.head.next
    // let pos = 0
    // while (currentNode !== null && pos !== index) {
    //   currentNode = currentNode.next
    //   pos++
    // }
    // console.log(currentNode)
    // return currentNode === null ? -1 : currentNode
  }

  insert(newItem, oldItem) {
    let currentNode = this.findByValue(oldItem)
    if (currentNode === -1) {
      console.log('未找到插入位置')
      return 
    }
    const newNode = new Node(newItem)
    newNode.next = currentNode.next
    currentNode.next = newNode
  }
  // 查找前一个
  findPrev(item) {
    let currentNode = this.head
    while(currentNode.next !== null && currentNode.next.element !== item) {
      currentNode = currentNode.next
    }
    if ( currentNode.next === null ) {
      return -1
    }
    return currentNode
  }
  // 根据值删除
  remove (item) {
    let currentNode = this.findPrev(item)
    if (currentNode === -1) {
      console.log('未找到元素')
      return
    }
    currentNode.next = currentNode.next.next
  }
  display() {
    let currentNode = this.head.next// 忽略头指针
    while (currentNode !== null) {
      console.log(currentNode.element)
      currentNode = currentNode.next
    }
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
LList.remove('curry')
LList.display() // chen -> qian -> sang -> zhao -> zhou
// console.log('-------------find by item------------')
LList.findByValue('chen')
// console.log('-------------find by index------------')
LList.findByIndex(2)
// console.log('-------------与头结点同值元素测试------------')
LList.insert('head', 'sang')
LList.display() // chen -> qian -> sang -> head -> zhao -> zhou
LList.findPrev('head') // sang
LList.remove('head')
console.log('-------------remove item------------')
LList.display() // chen -> qian -> sang -> zhao -> zhou

LList.findByIndex(0)
LList.findByValue('chen')