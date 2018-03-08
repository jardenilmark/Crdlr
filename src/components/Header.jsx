import React from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

class Header extends React.Component {
  render () {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">CRDLR</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
        </Nav>
      </Navbar>
    )
  }
}

export default Header
