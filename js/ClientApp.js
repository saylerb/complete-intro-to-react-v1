var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  // two things about render
  //  -- must return a valid react component
  //  -- must be pure (a given input will always give the same output)
  render() {
    return (
      div(null,
        h1(null, this.props.title)
      )
    )
  }
})


var MyTitleFact = React.createFactory(MyTitle) // we won't this with JSX
var ce = React.createElement

var MyFirstComponent = (
  div(null,
    // All these next three lines are equivalent:
    MyTitleFact({title: 'Props are great!'}),  
    React.createElement(MyTitle, {title: 'Use props everywhere!'}),
    ce(MyTitle, {title: 'Props are the best!'})
  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
