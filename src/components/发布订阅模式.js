// var salesOffices = {}  // 定义一个售楼处

// // salesOffices.clientList = []  // 缓存列表， 存放订阅者的回调函数
// salesOffices.clientList = {}  // 缓存列表， 存放订阅者的回调函数

// salesOffices.listen = function (key, fn) { // 增加订阅者
//     if (!this.clientList[key]) {
//         this.clientList[key] = []
//     }
//     this.clientList[key].push(fn)
// }

// salesOffices.tigger = function() {  //发布消息
//     // for (var i = 0, fn; fn = this.clientList[i++];) {
//     //     fn.apply(this, arguments)
//     // }
//     var key = Array.prototype.shift.call(arguments)
//     var fns = this.clientList[key]
    
//     if (!fns || fns.length === 0) {
//         return false
//     }

//     for (var i = 0, fn; fn = fns[i++];) {
//         fn.apply(this, arguments)
//     }
// }

// salesOffices.listen('200平米',function(price, squareMeter) {
//     console.log(`订阅200平米房子的发送该消息，${price}万的房子`)
// })

// salesOffices.listen('300平米',function(price, squareMeter) {
//     console.log(`订阅300平米，${price}万的房子`)
// })

// salesOffices.tigger('200平米', 420)
// salesOffices.tigger('300平米', 680)


let event = {
    clientList: {},
    listen: function(key, fn) {
        if(!event.clientList[key]) {
            event.clientList[key] = []
        }
        event.clientList[key].push(fn)
    },
    tigger() {
        let key = Array.prototype.shift.call(arguments)
        let fns = this.clientList[key]
        if (!fns || fns.length === 0) {
            return false
        }
        for (var i = 0, fn; fn = fns[i++]; ) {
            fn.apply(this, arguments)
        }
    }
}

// // console.log(event)
event.listen('200平', function (price = '400平'){
    console.log('订阅了200平的房子')
})
// event.listen('300平', function (){
//     console.log('订阅了300平的房子')
// })

// event.tigger('200平')
// event.tigger('300平')
// event.tigger('400平')

var installEvent = function(obj) {
    debugger
    for (var i in event) {
        obj[i] = event[i]
    }
}

var salesOffices = {}
installEvent( salesOffices )
salesOffices.listen('200平', function(price) {
    console.log(`订阅200平${price}`)
})

salesOffices.listen('300平', function(price) {
    console.log(`订阅300平${price}`)
})

salesOffices.tigger('200平', '400w')
salesOffices.tigger('300平', '500w')