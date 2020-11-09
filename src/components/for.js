// var happy = ['baseball', 'footbal', 'soccour', 'pingpang', 'pinting','swiming']

// for (var i = 0, h; h = happy[i++]; i++) {
//     console.log(h)
// }

function mult() {
    console.log('开始计算')
    var a = 1
    for (let i in arguments) {
        a *= arguments[i]
    }
    console.log(a)
    return a
}
var proxyMult = (function(){
    var cache = {}
    return function () {
        var args = Array.prototype.join.call(arguments, ',')
        if ( cache[args] != void 0) {
            return cache[args]
        }
        return cache[args] = mult.apply(this,arguments)
    }
})()
proxyMult(12,2,3,4)
proxyMult(12,2,3,4)
proxyMult(12,2,3,4)
proxyMult(4,5,6)
proxyMult(4,5,6)
proxyMult(4,5,6,0)

//缓存代理模式

