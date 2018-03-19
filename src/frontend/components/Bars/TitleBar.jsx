import React from 'react'
import Login from '../UserInput/Login'
import SignOut from '../UserInput/SignOut'
import { Button, Menu, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import SignUpContainer from '../../../backend/containers/signUpContainer'

class TitleBar extends React.Component {
  getComponent () {
    const { activeItem, currentUser, setCurrentUser } = this.props
    if (currentUser) {
      return <SignOut setUser={setCurrentUser} />
    }
    return <Login activeItem={activeItem} setUser={setCurrentUser}/>
  }

  render () {
    const { activeItem } = this.props
    return (
      <Menu inverted borderless compact attached='top' style={{margin: -1}} stackable>
        <Menu.Item />
        <Menu.Item header>
          <Header inverted>
            CRDLR
          </Header>
        </Menu.Item>
        <Menu.Item />
        <Menu.Item as={Link} to='/Home' name='Home' active={activeItem === 'Home' || !activeItem}/>
        <Menu.Item as={Link} to='/Search' name='Search' active={activeItem === 'Search'}/>
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
