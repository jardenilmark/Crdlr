import React from 'react'
import { Popup, Button, Menu } from 'semantic-ui-react'
import Login from '../UserInput/Login'

class TitleBar extends React.Component {
  render () {
    const { activeItem, handleItemClick, setUser } = this.props

    return (
      <Menu style={{margin: 0}} stackable>
        <Menu.Item header>CRDLR</Menu.Item>
        <Menu.Item name='Home' active={activeItem === 'Home' || !activeItem} onClick={() => handleItemClick('Home')} />
        <Menu.Item name='Search' active={activeItem === 'Search'} onClick={() => handleItemClick('Search')} />
        <Menu.Menu position='right'>
          <Menu.Item name='Login'>
            <Login activeItem={activeItem} handleItemClick={handleItemClick} setUser={setUser}/>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default TitleBar
