import React from 'react'
import Route from './Route/Route.jsx'
import TitleBar from './Bars/TitleBar.jsx'
import Body from './Body.jsx'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { activeItem: 'Home' }
    this.handleItemClick = this.handleItemClick.bind(this)
  }

  handleItemClick (e, { name }) {
    this.setState({ activeItem: name })
  }

  render () {
    return (
      <div>
        <TitleBar handleItemClick={this.handleItemClick} activeItem={this.state.activeItem} />
        <Body handleItemClick={this.handleItemClick} activeItem={this.state.activeItem} />
      </div>
    )
  }
}

export default App
