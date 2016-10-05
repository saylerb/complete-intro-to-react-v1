var div = React.DOM.div
var h1 = React.DOM.h1

var MyFirstComponent = (
  div(null,
    h1(null, 'Hello, World! First Component!')
  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
