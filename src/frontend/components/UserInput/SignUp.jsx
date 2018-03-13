import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import database from '../../../backend/database.js'
import swal from 'sweetalert'

class SignUp extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedValue: ''
    }
    this.handleOnChange = this.handleOnChange.bind(this)
  }

  handleOnChange (e, { value }) {
    this.setState({ selectedValue: value })
  }

  async addUser (event, {name}) {
    database.collection('users').add({
      email: document.getElementById('email').value,
      password: document.getElementById('pass').value,
      gender: this.state.selectedValue
    })
    const confirmation = swal("Success!", "Sign Up Complete", "success")
    if (await confirmation) {
      this.props.handleItemClick(event, {name})
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
                  <Form.Select id='gender' fluid options={options} placeholder='Gender' onChange={this.handleOnChange}/>
                  <Button color='teal' name='Home' fluid size='large' onClick={(e, { name }) => this.addUser(e, { name })}>Confirm</Button>
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
