const FSM = {
  off: {
    buttonWasPressed() {
      console.log('关灯')
      this.currentState = FSM.on
      this.button.innerHTML = '下一次按我是开灯'
    }
  },
  on: {
    buttonWasPressed() {
      console.log('开灯')
      this.currentState = FSM.off
      this.button.innerHTML = '下一次按我是关灯'
    }
  }
}

class Light {
  constructor() {
    this.currentState = FSM.off
    this.button = null
  }

  init() {
    const button = document.createElement('button')
    button.innerHTML = '以关灯'
    this.button = button
    this.button.onclick = () => {
      this.currentState.buttonWasPressed.call(this)
    }
    document.body.appendChild(this.button)
  }
}

const light = new Light()
light.init()
