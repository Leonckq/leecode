import { StackBasedLinkedList as Stack } from './StackBasedOnLinkedList'

class SampleBrowser {
  constructor() {
    this.normalStack = new Stack()
    this.backStack = new Stack()
  }

  pushNormal(name) {
    this.normalStack.push(name)
    this.backStack.clear()
    this.displayAllStack()
  }

  back() {
    let flag = this.normalStack.pop()
    if (!!~flag) {
      this.backStack.push(flag)
      this.displayAllStack()
    } else {
      console.log('无法后退')
    }
  }

  front() {
    let flag = this.backStack.pop()
    if (!!~flag) {
      this.normalStack.push(flag)
      this.displayAllStack()
    } else {
      console.log('无法前进')
    }
  }

  // 打印栈内数据
  displayAllStack() {
    console.log('---后退页面---')
    this.backStack.display()
    console.log('---浏览页面---')
    this.normalStack.display()
  }
}

// Test
const browser = new SampleBrowser()
browser.pushNormal('www.google.com')
browser.pushNormal('www.baidu.com')
browser.pushNormal('www.github.com')
// 后退
browser.back()
browser.back()
browser.front()
browser.pushNormal('www.new.com')