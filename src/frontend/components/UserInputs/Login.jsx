import React from 'react'
import { Menu, Icon, Popup, Button, Form, Grid, Message } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import history from '../../../backend/history'

const onclickHandler = async (loginUser, status) => {
  const email = document.getElementById('emailLogin').value
  const pass = document.getElementById('passwordLogin').value
  await loginUser(email, pass)
  inSignUpScreen(status)
}

const getWarningSign = (status) => {
  if (status === 'failed') {
    return <Message error header='Login Denied' content='Email and Password do not match'/>
  }
}

const inSignUpScreen = (status) => {
  if (status && history.location.pathname === '/SignUp') {
    history.push('/')
  }
}

const Login = (props) => {
  const { status, loginUser } = props
  return (
    <Menu.Menu position='right'>
      <Menu.Item>
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
                <Button type='submit' onClick={() => onclickHandler(loginUser, status)} primary>Login</Button>
                <Button type='submit' as={Link} to='/SignUp' secondary>Sign Up</Button>
              </Form>
              {getWarningSign(status)}
            </Grid.Column>
          </Grid>
        </Popup>
      </Menu.Item>
    </Menu.Menu>
  )
}

export default Login
