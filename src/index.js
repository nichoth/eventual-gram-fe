var React = require('react')
var ReactDOM = require('react-dom')

function Ev (props) {
    return <div>example</div>
}

Ev.createElement = function (el) {
    ReactDOM.render(<Ev />, el)
}

module.exports = Ev
