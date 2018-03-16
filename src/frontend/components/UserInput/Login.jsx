import React from 'react'
import TitleBar from '../Bars/TitleBar'
import { Icon, Popup, Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { auth } from '../../../backend/database'

class Login extends React.Component {
  async onclickHandler (name) {
    const { activeItem } = this.props
    const { handleItemClick } = this.props
    const login = await this.loginUser()
    if (login && activeItem === 'SignUp') {
      handleItemClick(name)
    }
  }

  async loginUser () {
    const { setUser } = this.props
    const email = document.getElementById('emailLogin').value
    const pass = document.getElementById('passwordLogin').value
    const user = await auth.signInWithEmailAndPassword(email, pass).catch(() => 'error')
    if (user !== 'error') {
      localStorage.setItem('user', JSON.stringify(auth.currentUser))
      setUser(auth.currentUser)
      return true
    }
    return false
  }

  render () {
    const { handleItemClick } = this.props
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
                <Button type='submit' primary onClick={() => this.onclickHandler('Home')}>Login</Button>
                <Button type='submit' secondary name='SignUp' onClick={() => handleItemClick('SignUp')}>Sign Up</Button>
              </Form>
            </Grid.Column>
          </Grid>
        </Popup>
      </div>
    )
  }
}

export default Login
