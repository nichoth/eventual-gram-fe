var React = require('react')
var { Component, createElement } = React
var h = createElement
var ReactDOM = require('react-dom')
var Bus = require('@nichoth/events')
var xtend = require('xtend')
// var struct = require('observ-struct')

function connect (state, View) {
    var bus = Bus({ memo: true })

    function emit () {
        return _bus.emit.apply(_bus, arguments)
    }

    class Connector extends Component {
        constructor(props) {
            super(props)
            this.state = state()
        }

        componentDidMount () {
            var self = this
            state(function onChange (data) {
                self.setState(data)
            })
        }

        render () {
            return h(View, xtend(this.props, { emit }), this.props.children)
        }
    }

    return { bus, view: Connector }
}

function Ev (state) {
    var view = () => (<div>example</div>)
    var { bus, view } = connect(state, view)
    return { bus, view }
}

Ev.createElement = function (EventualView, el) {
    ReactDOM.render(<EventualView />, el)
}

module.exports = Ev
