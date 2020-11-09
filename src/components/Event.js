let Event = (function() {
    const global = this
    const _default = 'default'
    let Event
    Event = function() {
        let _listen,
            _tirgger,
            _remove,
            _find,
            _create;
        const _slice = Array.prototype.slice,
              _shift = Array.prototype.shift,
              _unshift = Array.prototype.unshift,
              namespaceCache = {};
        const each = (ary, fn) => {
            let ret;
            ary.forEach((item, index) => {
                ret = fn.call(item, index, item)
            });
            return ret
        }

        _listen = (key, fn, cache) => {
            if (!cache[key]) {
                cache[key] = []
            }
            cache[key].push(fn)
        }

        _remove = (key, cache, fn) => {
            if (cache[key]) {
                if (fn) {
                    cache[key].forEach(_ => {
                        if (cache[key][i] === fn) {
                            cache[key].splice(i, i)
                        }
                    })
                } else {
                    cache[key] = []
                }
            }
        }

        _tirgger = function() {
            let cache = _shift.call(arguments)
            let key = _shift.call(arguments)
            let args = arguments
            let _self = this,
                stack = cache[key]
            if (!stack || !stack.length) {
                return
            }

            return each(stack, function() {
                this.apply(_self, args)
            })

        }



        _create = (namespace) => {
            namespace = namespace || _default
            const cache = {}
            let offlineStack = []; //离线事件
            const ret = {
                listen: (key, fn, last) => {
                    _listen(key, fn, cache) // ???
                    
                    if (offlineStack === null) {
                        return
                    }
                    if (last === 'last') {
                        offlineStack.length && offlineStack.pop()()
                    } else {
                        each(offlineStack, function() {
                            this()
                        })// ???
                    }

                    offlineStack = null
                },
                one: function(key, fn, last) {
                    _remove(key, cache)
                    this.listen(key, fn, last)
                },
                remove: function(key, fn) {
                    _remove(key, cache, fn)
                },
                trigger: function() {
                    let fn,
                        args,
                        _self = this // ???
                    _unshift.call(arguments, cache)
                    args = arguments
                    fn = () => _tirgger.apply(_self, args)
                    if (offlineStack) {
                        return offlineStack.push(fn)
                    }
                }
            }

            return namespace ? (namespaceCache[namespace] ? namespaceCache[namespace] : namespaceCache[namespace] = ret) : ret

        }

        return {
            create: _create,
            one(key, fn, last) {
                let event = this.create()
                event.one(key, fn, last)
            },
            remove(key, fn) {
                var event = this.create()
                event.remove(key, fn)
            },
            listen(key, fn, last) {
                let event = this.create()
                debugger
                event.listen(key, fn, last)
            },
            trigger: function() {
                let event = this.create()
                event.trigger.apply(this, arguments)
            }
        }
    }()
    return Event
})()

Event.trigger('click', 1)
Event.listen('click', (a) => {
    console.log(a+'ppp')
})

Event.create('namespace1').trigger('click', 'space2')
Event.create('namespace1').trigger('click', 'space1')

Event.create('namespace1').listen('click', a => {
    console.log(a)
}, 'last')

Event.create('namespace1').listen('click', a => {
    console.log(a)
}, 'last')
