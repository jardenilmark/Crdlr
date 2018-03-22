import React from 'react'
import LoginContainer from '../../../backend/containers/loginContainer'
import SignOut from '../UserInput/SignOut'
import { Button, Menu, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import SignUpContainer from '../../../backend/containers/signUpContainer'
import history from '../../../backend/history'
import CarCreate from '../UserInput/CarCreate'

class TitleBar extends React.Component {
  getComponent () {
    const { currentUser, setCurrentUser, activeItem } = this.props
    if (currentUser) {
      return <Menu.Menu position='right'>
        <Menu.Item name='CarCreate' active={activeItem === 'CarCreate'} as={Link} to='/CarCreate'>
          Register Car
        </Menu.Item>
        <Menu.Item>
          <SignOut setUser={setCurrentUser} />
        </Menu.Item>
      </Menu.Menu>
    }
    return <Menu.Menu position='right'>
      <Menu.Item>
        <LoginContainer setUser={setCurrentUser}/>
      </Menu.Item>
    </Menu.Menu>
  }

  render () {
    let { activeItem } = this.props
    if (!activeItem) {
      activeItem = history.location.pathname.slice(1)
    }
    console.log(activeItem)
    return (
      <Menu inverted borderless compact attached='top' style={{margin: -1}} stackable>
        <Menu.Item />
        <Menu.Item header>
          <Header inverted>
            CRDLR
          </Header>
        </Menu.Item>
        <Menu.Item />
        <Menu.Item as={Link} to='/' name='Home' active={activeItem === '/' || activeItem === ''}/>
        <Menu.Item as={Link} to='/Search' name='Search' active={activeItem === 'Search'}/>
        {this.getComponent()}
      </Menu>
    )
  }
}

export default TitleBar
