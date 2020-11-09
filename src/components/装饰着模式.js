Function.prototype.before = function(beforefn) {
  var _self = this
  return function() {
    beforefn.apply(this, arguments)
    return _self.apply(this, arguments)
  }
}


Function.prototype.after = function(afterfn) {
  let _self = this
  return function() {
    let ret = _self.apply(this, arguments)
    afterfn.apply(this, arguments)
    return ret
  }
}
window.onload = function () {
  console.log(1)
}


window.onload = (window.onload || function() {}).before(function() {
  console.log(2)
  window.alert(222)
}).before(function() {
  console.log(3)
}).before(function() {
  console.log(4)
  // window.alert(333)
})




window.onload = (window.onload || function() {}).after(function() {
  console.log(2)
  window.alert(333)
}).after(function() {
  console.log(3)
}).after(function() {
  console.log(4)
  // window.alert(333)
})