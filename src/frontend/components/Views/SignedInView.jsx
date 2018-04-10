import React from 'react'
import SignOut from '../../../backend/containers/SignOutContainer'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class SignIn extends React.Component {
  render () {
    const { activeItem, setCurrentUser } = this.props
    return (
      <Menu.Menu position='right'>
        <Menu.Item name='Inventory' active={activeItem === 'InventoryView'} as={Link} to='/InventoryView' />
        <Menu.Item name='Register Car' active={activeItem === 'CarCreate'} as={Link} to='/CarCreate' />
        <Menu.Item>
          <SignOut setUser={setCurrentUser} />
        </Menu.Item>
      </Menu.Menu>
    )
  }
}

export default SignIn
