var plane = function() {
    
}

plane.prototype.file = function() {
    console.log('发射普通子弹')
    debugger
}

var MissleDecorator = function(plane) {
    this.plane = plane
}

MissleDecorator.prototype.file = function() {
    this.plane.file()
    debugger
    console.log('发射导弹')
}

var AtomDecorator = function (plane) {
    this.plane = plane
}

AtomDecorator.prototype.file = function() {
    this.plane.file()
    debugger
    console.log('发射原子弹')
}
debugger
var fly = new plane()
debugger
fly = new MissleDecorator(fly)
debugger
fly = new AtomDecorator(fly)

fly.file()