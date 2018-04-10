import React from 'react'
import LoginContainer from '../../../backend/containers/LoginContainer'
import { Button, Menu, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import history from '../../../backend/history'
import SignedInView from '../../../backend/containers/SignedInContainer'

class TitleBar extends React.Component {
  getComponent () {
    const { currentUser } = this.props
    if (currentUser) {
      return <SignedInView/>
    }
    return <LoginContainer/>
  }

  getActiveItem () {
    let { activeItem } = this.props
    if (!activeItem) {
      activeItem = history.location.pathname.slice(1)
    }
    return activeItem
  }

  render () {
    const activeItem = this.getActiveItem()
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
        <Menu.Item as={Link} to='/SearchView' name='Search' active={activeItem === 'SearchView'}/>
        {this.getComponent()}
      </Menu>
    )
  }
}

export default TitleBar
