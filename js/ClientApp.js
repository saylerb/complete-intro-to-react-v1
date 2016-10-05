var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render() {
    return (
      div(null,
        h1(null, 'Check out this other thing.')
      )
    )
  }
})


var MyTitleFact = React.createFactory(MyTitle) // we won't this with JSX
var ce = React.createElement

var MyFirstComponent = (
  div(null,
    // All these next three lines are equivalent:
    MyTitleFact(null),  
    React.createElement(MyTitle, null),
    ce(MyTitle, null)
  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
