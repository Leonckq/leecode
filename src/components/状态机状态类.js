export class OffLightState {
  constructor(light) {
    this.light = light
  }
  buttonWasPressed() {
    console.log('弱光')
    this.light.setState(this.light.weakLightState)
  }
}

export class WeakLightState {
  constructor(light) {
    this.light = light
  }

  buttonWasPressed() {
    console.log('强光')
    this.light.setState(this.light.strongLightState)
  }
}

export class StrongLightState {
  constructor(light) {
    this.light = light
  }

  buttonWasPressed() {
    console.log('超强光')
    this.light.setState(this.light.offLightState)
  }
}