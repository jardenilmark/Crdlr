import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  }
  render () {
    const { activeItem } = this.state
    return (
      <Menu style={{margin: 0}} stackable>
        <Menu.Item header>CRDLR</Menu.Item>
        <Menu.Item name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick} as={Link} to='/'/>
        <Menu.Item name='Search' active={activeItem === 'Search'} onClick={this.handleItemClick} as={Link} to='/Search'/>
        <Menu.Menu position='right'>
          <Menu.Item name='Login' active={activeItem === 'Login'} onClick={this.handleItemClick}/>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default Header
