import React from 'react'
import TitleBar from '../Bars/TitleBar'
import { Icon, Popup, Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { auth } from '../../../backend/database'
import { Link } from 'react-router-dom'
import history from '../../../backend/history'

class Login extends React.Component {
  async onclickHandler () {
    const { activeItem } = this.props
    const login = await this.loginUser()
    if (login && activeItem === 'SignUp') {
      history.push('/Home')
    }
  }

  async loginUser () {
    const { setUser } = this.props
    const email = document.getElementById('emailLogin').value
    const pass = document.getElementById('passwordLogin').value
    const user = await auth.signInWithEmailAndPassword(email, pass).catch(() => 'error')
    if (user !== 'error') {
      localStorage.setItem('user', auth.currentUser)
      setUser(auth.currentUser)
      return true
    }
    return false
  }

  render () {
    return (
      <div>
        <Popup wide trigger={
          <Button icon>
            <Icon name='user circle' />
          </Button>} on='click'>
          <Grid divided columns='equal'>
            <Grid.Column>
              <Form>
                <Form.Field>
                  <label>Email</label>
                  <input id='emailLogin' placeholder='Email' />
                </Form.Field>
                <Form.Field>
                  <label>Password</label>
                  <input id='passwordLogin' placeholder='Password' type='password' />
                </Form.Field>
                <Button type='submit' onClick={() => this.onclickHandler()}primary>Login</Button>
                <Button type='submit' as={Link} to='/SignUp' secondary>Sign Up</Button>
              </Form>
            </Grid.Column>
          </Grid>
        </Popup>
      </div>
    )
  }
}

export default Login
