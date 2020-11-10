/**
 * @description 使用前后栈实现浏览器的前进和后退
 * @author Leon
 */
const Stack = require('./11')

class SimpleBrowser {
  constructor() {
    this.frontStack = new Stack()
    this.backStack = new Stack()
  }
  pushNormal(name) {
    this.frontStack.push(name)
    this.backStack.clear()
  }

  front() {
    const name = this.backStack.pop()
    if (name !== -1) {
      this.frontStack.push(name)
    }
  }

  back() {
    const name = this.frontStack.pop()
    if (name !== -1) {
      this.backStack.push(name)
    }
  }

  displayAllStack() {
    console.log('---后退页面---')
    this.backStack.display()
    console.log('---浏览页面---')
    this.frontStack.display()
  }
}

// Test
const browser = new SimpleBrowser()
browser.pushNormal('www.google.com')
browser.pushNormal('www.baidu.com')
browser.pushNormal('www.github.com')
// 后退
browser.back()
browser.back()
browser.front()
browser.pushNormal('www.new.com')
browser.displayAllStack()
