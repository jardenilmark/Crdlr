import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import database from '../../../backend/database'
import swal from 'sweetalert'

class SignUp extends React.Component {
  async addUser (name) {
    const { handleItemClick } = this.props
    database.collection('users').add({
      email: document.getElementById('email').value,
      password: document.getElementById('pass').value,
      gender: document.getElementById('gender').firstChild.innerText
    })
    const confirmation = swal('Success!', 'Sign Up Complete', 'success')
    if (await confirmation) {
      handleItemClick(name)
    }
  }

  render () {
    const options = [
      { key: 'm', text: 'Male', value: 'male' },
      { key: 'f', text: 'Female', value: 'female' }
    ]
    return (
      <div>
        <div className='login-form'>
          <Grid textAlign='center' style={{ height: '80vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 700 }}>
              <Header as='h2' color='teal' textAlign='center'>
                Sign Up
              </Header>
              <Form size='massive'>
                <Segment stacked>
                  <Form.Input id='email' fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                  <Form.Input id='pass' fluid icon='lock' iconPosition='left' placeholder='Password' type='password' />
                  <Form.Select id='gender' fluid options={options} placeholder='Gender'/>
                  <Button color='teal' fluid size='large' onClick={() => this.addUser('Home')}>Confirm</Button>
                </Segment>
              </Form>
            </Grid.Column>
          </Grid>
        </div>
      </div>
    )
  }
}

export default SignUp
