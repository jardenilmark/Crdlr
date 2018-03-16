import React from 'react'
import TitleBar from './Bars/TitleBar'
import Body from './Body'

class App extends React.Component {
  render () {
    const { activeItem, getItemName } = this.props
    return (
      <div>
        <TitleBar activeItem={activeItem} handleItemClick={getItemName}/>
        <Body activeItem={activeItem} handleItemClick={getItemName} />
      </div>
    )
  }
}

export default App
