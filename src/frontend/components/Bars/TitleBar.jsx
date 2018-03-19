import React from 'react'
import LoginContainer from '../../../backend/containers/loginContainer'
import SignOut from '../UserInput/SignOut'
import { Button, Menu, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import SignUpContainer from '../../../backend/containers/signUpContainer'
import history from '../../../backend/history'

class TitleBar extends React.Component {
  getComponent () {
    const { currentUser, setCurrentUser } = this.props
    if (currentUser) {
      return <SignOut setUser={setCurrentUser} />
    }
    return <LoginContainer setUser={setCurrentUser}/>
  }

  render () {
    let { activeItem } = this.props
    if (!activeItem) {
      activeItem = history.location.pathname.slice(1)
    }
    return (
      <Menu inverted borderless compact attached='top' style={{margin: -1}} stackable>
        <Menu.Item />
        <Menu.Item header>
          <Header inverted>
            CRDLR
          </Header>
        </Menu.Item>
        <Menu.Item />
        <Menu.Item as={Link} to='/Home' name='Home' active={activeItem === 'Home'}/>
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
