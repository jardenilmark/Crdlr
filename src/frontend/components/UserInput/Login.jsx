import React from 'react'
import TitleBar from '../Bars/TitleBar.jsx'
import { Icon, Popup, Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  async loginUser () {
    const payload = {
      email: document.getElementById('emailLogin').value,
      pass: document.getElementById('passwordLogin').value
    }
    const response = await fetch('/getUser', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const result = await response.json()
    console.log(result)
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
                <Button type='submit' primary onClick={this.loginUser}>Login</Button>
                <Button type='submit' secondary name='SignUp' onClick={this.props.handleItemClick}>Sign Up</Button>
              </Form>
            </Grid.Column>
          </Grid>
        </Popup>
      </div>
    )
  }
}

export default Login
