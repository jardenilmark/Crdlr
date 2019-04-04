import React from 'react'
import LoginContainer from '../../redux/containers/LoginContainer'
import { Menu, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import history from '../../redux/history'
import SignedInView from '../../redux/containers/SignedInContainer'

const component = (props) => {
  const { currentUser } = props
  if (currentUser) {
    return <SignedInView/>
  }
  return <LoginContainer/>
}

const highlight = (props) => {
  let { activeItem } = props
  if (!activeItem) {
    activeItem = history.location.pathname.slice(1)
  }
  return activeItem
}

const TitleBar = (props) => {
  const activeItem = highlight(props)
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
      {component(props)}
    </Menu>
  )
}

export default TitleBar
