import React from 'react'
import { Button, Menu, Header } from 'semantic-ui-react'
import Login from '../UserInput/Login'
import SignOut from '../UserInput/SignOut'

class TitleBar extends React.Component {
  getComponent () {
    const { activeItem, handleItemClick, setUser, user } = this.props
    if (user) {
      return <SignOut activeItem={activeItem} handleItemClick={handleItemClick} setUser={setUser} />
    }
    return <Login activeItem={activeItem} handleItemClick={handleItemClick} setUser={setUser}/>
  }
  render () {
    const { activeItem, handleItemClick } = this.props
    return (
      <Menu inverted borderless compact attached='top' style={{margin: -1}} stackable>
        <Menu.Item />
        <Menu.Item header>
          <Header inverted>
            CRDLR
          </Header>
        </Menu.Item>
        <Menu.Item />
        <Menu.Item name='Home' active={activeItem === 'Home' || !activeItem} onClick={() => handleItemClick('Home')} />
        <Menu.Item name='Search' active={activeItem === 'Search'} onClick={() => handleItemClick('Search')} />
        <Menu.Menu position='right'>
          <Menu.Item name='Login'>
            {this.getComponent()}
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default TitleBar
