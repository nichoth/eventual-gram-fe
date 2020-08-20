var Ev = require('../src')
var struct = require('observ-struct')

function subscribe () {

}

var state = struct({})
var { bus, view } = Ev(state)

subscribe(bus, state)

Ev.createElement(view, document.getElementById('content'))
