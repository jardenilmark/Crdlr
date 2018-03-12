import React from 'react'
import TitleBar from '../Bars/TitleBar.jsx'
import { Icon, Popup, Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Login extends React.Component {
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
                  <label>First Name</label>
                  <input placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                  <label>Last Name</label>
                  <input placeholder='Last Name' />
                </Form.Field>
                <Button type='submit'primary>Login</Button>
                <Button type='submit' secondary as={Link} to={'/SignUp'}>Sign Up</Button>
              </Form>
            </Grid.Column>
          </Grid>
        </Popup>
      </div>
    )
  }
}

export default Login
