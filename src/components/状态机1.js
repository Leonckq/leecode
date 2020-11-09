import { OffLightState, WeakLightState, StrongLightState } from './状态机状态类'

class Light {
  constructor() {
    this.offLightState = new OffLightState(this)
    this.weakLightState = new WeakLightState(this)
    this.strongLightState = new StrongLightState(this)
    // this.superStrongLightState = new SuperStrongLightState(this)
    this.currState = this.offLightState
    this.button = null
  }

  init() {
    const button = document.createElement('button')
    button.innerHTML = '开关'
    button.onclick = () => {
      this.currState.buttonWasPressed()
    }
    this.button = button
    document.body.appendChild(this.button)
  }

  setState(newState) {
    this.currState = newState
  }
}

const light = new Light()
light.init()





// class Light {
//   constructor() {
//     this.offLightState = new OffLightState(this)
//     this.strongLightState = new StrongLightState(this)
//     this.weakLightState = new WeakLightState(this)
//     this.currentState = this.offLightState
//   }

//   init() {
//     const button = document.createElement('button')
//     button.innerHTML = '弱光'
//     button.onclick = () => {
//       this.currentState.buttonWasPressed(this)
//     }
//     document.body.appendChild(button)
//   }

//   setState(newState) {
//     this.currentState = newState
//   }
// }

// const light = new Light()
// light.init()