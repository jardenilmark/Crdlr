import React from 'react'
import TitleBar from '../Bars/TitleBar'
import { Icon, Popup, Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { auth } from '../../../backend/database'
import { Link } from 'react-router-dom'
import history from '../../../backend/history'

class Login extends React.Component {
  async onclickHandler () {
    const login = await this.loginUser()
    if (login && history.location.pathname === '/SignUp') {
      history.push('/Home')
    }
  }

  async loginUser () {
    const { setUser, setLoginStatus } = this.props
    const email = document.getElementById('emailLogin').value
    const pass = document.getElementById('passwordLogin').value
    const user = await auth.signInWithEmailAndPassword(email, pass).catch(() => 'error')
    if (user !== 'error') {
      localStorage.setItem('user', auth.currentUser)
      setUser(auth.currentUser)
      setLoginStatus('success')
      return true
    }
    setLoginStatus('failed')
    return false
  }

  getWarningSign (status) {
    if (status === 'failed') {
      return <Message error header='Login Denied' content='Email and Password do not match'/>
    }
  }
  render () {
    const { status } = this.props
    console.log(this.props)
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
              {this.getWarningSign(status)}
            </Grid.Column>
          </Grid>
        </Popup>
      </div>
    )
  }
}

export default Login
