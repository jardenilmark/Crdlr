import React from 'react'
import TitleBar from '../Bars/TitleBar.jsx'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

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

  async addUser () {
    const payload = {
      email: document.getElementById('email').value,
      pass: document.getElementById('pass').value,
      gender: this.state.selectedValue
    }
    const response = await fetch('/addUser', {
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
    const options = [
      { key: 'm', text: 'Male', value: 'male' },
      { key: 'f', text: 'Female', value: 'female' }
    ]
    return (
      <div>
        <TitleBar />
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
                  <Button color='teal' fluid size='large' onClick={(e) => this.addUser()}>Confirm</Button>
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
