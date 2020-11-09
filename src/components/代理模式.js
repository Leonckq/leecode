// class WxNumber {
//   static num = '123'
// }
// class LeeSi {
//     askWx(target) {
//         const res = target.getRequest()
//         // console.log(res)
//     }
// }
// class ZhangProxy {
//     getRequest() {
//         const beauty = new Beauty()
//         return beauty.getRequest()
//     }
// }
// class Beauty {
//     getRequest() {
//         return new WxNumber()
//     }
// }
// const lee = new LeeSi()
// lee.askWx(new ZhangProxy())

class Plus {
  constructor() {
    this.name = 'plus'
  }
  cal() {
      console.log('开始计算Plus')
      return [].reduce.call(arguments, ((cur, next) => {
          return cur + next 
      }), 0)
  }
}

class Mult {
  constructor() {
    this.name = 'mult'
  }
  cal() {
    console.log('开始计算Mult')
    return [].reduce.call(arguments, ((cur, next) => {
      return cur*next
    }), 1)
  }
}


class ProxyMult {
  static cache = {}
  constructor() {
    this.mult = new Mult()
  }
  cal() {
    let args = [].join.call(arguments, ',')
    if (args in ProxyMult.cache) {
      return ProxyMult.cache[args]
    }
    return ProxyMult.cache[args] = this.mult.cal.apply(this, arguments)
  }
}

const target = new Mult().cal
const newproxy = new Proxy(target, {
  apply(target, key, value) {
    target.cache = target.cache || {}
    let args = [].join.call(value, ',')
    if (args in target.cache) {
      return target.cache[args]
    }
    return target.cache[args] = target.apply(this, value)
  }
})
console.log(newproxy(1,2,3,4))
console.log(newproxy(1,2,3,4))
console.log(newproxy(1,2,3,4,5))
console.log(newproxy)
// Pro.cal(1,2,3,4)
// const p = new Pro()
// const proxyMult = new ProxyMult()

// console.log(proxyMult.cal(1,2,3,4))
// console.log(proxyMult.cal(1,2,3,5))
// console.log(proxyMult.cal(1,2,3,4))

// class CreateProxyFactory {
//   static cache = {}
//   constructor(fn) {
//     this.fn = new fn()
//     console.log(this.fn)
//   }
//   cal() {
//     const args = [].join.call(arguments, `,${this.fn.name}`)
//     if (args in CreateProxyFactory.cache) {
//       return CreateProxyFactory.cache[args]
//     }
//     return CreateProxyFactory.cache[args] = this.fn.cal.apply(this, arguments)
//   }
// }

// const proxyMult = new CreateProxyFactory(Mult)
// const ProxyPlus = new CreateProxyFactory(Plus)

// console.log(proxyMult.cal(1,2,3,4))
// console.log(proxyMult.cal(1,2,3,4))
// console.log(ProxyPlus.cal(1,2,3,4))
// console.log(ProxyPlus.cal(1,2,3,4))


const cat = {
  color: 'yellow',
  age: 3,
  isGirl: true
}

const handle = {
  get(target, key, value) {
      if (key === 'age') {
          console.log(`I's ${target[key]}`)
      }
      return Reflect.get(target, key, value)
  },
  set(target, key, value) {
      if (key === 'isGirl') {
        console.log(`I don't want to be transgender`)
          return Reflect.set(target, key, `I don't want to be transgender`)
      }
      return Reflect.set(target, key, value)
  }
}

const newCat = new Proxy(cat, handle)
newCat.age
newCat.isGirl = false
newCat.age = 6
console.log(newCat)