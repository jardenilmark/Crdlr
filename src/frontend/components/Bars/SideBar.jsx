import React from 'react'
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav'

class SideBar extends React.Component {
  render () {
    return (
      <div style={{width: '20%', backgroundColor: '#424242', height: '100%'}}>
        <SideNav>
          <Nav id='dashboard'>
            <NavText> Dashboard </NavText>
          </Nav>
          <Nav id='sales'>
            <NavText> Sales </NavText>
          </Nav>
        </SideNav>
      </div>
    )
  }
}

export default SideBar
