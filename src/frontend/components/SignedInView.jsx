import React from 'react'
import LoginContainer from '../../backend/containers/loginContainer'
import SignOut from './UserInput/SignOut'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class SignIn extends React.Component {
  render () {
    const { activeItem, setCurrentUser } = this.props
    return (
      <Menu.Menu position='right'>
        <Menu.Item name='CarCreate' active={activeItem === 'CarCreate'} as={Link} to='/CarCreate'>
          Register Car
        </Menu.Item>
        <Menu.Item>
          <SignOut setUser={setCurrentUser} />
        </Menu.Item>
      </Menu.Menu>
    )
  }
}

export default SignIn
