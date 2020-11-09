class Singleton {
  constructor(name) {
    this.name = name
    this.instance = this.null
  }
  static instance = null
  
  getInstance = () => {
    if(Singleton.instance == void 0) {
      Singleton.instance = this.name
    }
    return Singleton.instance
  }
}
const a = new Singleton('leon').getInstance()
const b = new Singleton('qing').getInstance()
console.log(a, b)