import React from 'react'
import { Button, OverlayTrigger, Popover, Tab, Tabs, Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './TitleBar.css'

const popoverClick = (
  <Popover id="popover-trigger-click-root-close">
    <div className="centerText">
      Login
    </div>
    <div>
      <Link to="/SignUp">SignUp</Link>
    </div>
  </Popover>
)

class Header extends React.Component {
  render () {
    return (
      <Navbar fluid style={{margin: 0}}>
        <Navbar.Header>
          <Navbar.Brand>
            CRDLR
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey="1">
              <Link to="/">
                Home
              </Link>
            </NavItem>
            <NavItem eventKey="2">
              <Link to="/Search">
                Search
              </Link>
            </NavItem>
          </Nav>
          <Nav pullRight>
            <OverlayTrigger trigger="click" placement="bottom" overlay={popoverClick}>
              <NavItem eventKey="3">
                Login
              </NavItem>
            </OverlayTrigger>
            <NavItem eventKey="4">{/* forSpacing */}
            </NavItem>
            <NavItem eventKey="5">
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Header
