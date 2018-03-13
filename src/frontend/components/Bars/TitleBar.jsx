import React from 'react'
import { Popup, Button, Menu } from 'semantic-ui-react'
import Login from '../UserInput/Login.jsx'

class TitleBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const { activeItem, handleItemClick } = this.props

    return (
      <Menu style={{margin: 0}} stackable>
        <Menu.Item header>CRDLR</Menu.Item>
        <Menu.Item name='Home' active={activeItem === 'Home'} onClick={handleItemClick}/>
        <Menu.Item name='Search' active={activeItem === 'Search'} onClick={handleItemClick}/>
        <Menu.Menu position='right'>
          <Menu.Item name='Login'>
            <Login activeItem={activeItem} handleItemClick={this.props.handleItemClick}/>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default TitleBar
