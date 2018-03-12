import React from 'react'
import { Popup, Button, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Login from '../UserInput/Login.jsx'

class TitleBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = { activeItem: 'Home' }
  }

  render () {
    const { activeItem } = this.props
    console.log(this.props.match)
    console.log(JSON.stringify(this.props))
    return (
      <Menu style={{margin: 0}} stackable>
        <Menu.Item header>CRDLR</Menu.Item>
        <Menu.Item name='Home' active={activeItem === 'Home'} as={Link} to='/'/>
        <Menu.Item name='Search' active={activeItem === 'Search'} as={Link} to='/Search'/>
        <Menu.Menu position='right'>
          <Menu.Item name='Login' active={activeItem === 'Login'}><Login /></Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default TitleBar
