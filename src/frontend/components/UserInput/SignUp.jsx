import React from 'react'
import { Container, Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { firestore, auth } from '../../../backend/database'
import Validator from '../../validator'
import swal from 'sweetalert'
import { Link } from 'react-router-dom'
import history from '../../../backend/history'

class SignUp extends React.Component {
  async addUser () {
    const { setError } = this.props
    const user = {
      email: document.getElementById('email').value,
      pass: document.getElementById('pass').value,
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      gender: document.getElementById('gender').firstChild.innerText,
      phone: document.getElementById('phone').value
    }
    let isAllValid = true
    const validator = new Validator()
    for (const key in user) {
      if (validator.isValid(user[key], key)) {
        isAllValid = false
      }
    }
    if (isAllValid) {
      try {
        const create = await auth.createUserWithEmailAndPassword(user.email, user.pass)
        user['uid'] = create.uid
        firestore.collection('users').doc(user.uid).set({
          gender: user.gender,
          phone: user.phone,
          firstName: user.firstName,
          lastName: user.lastName
        })
        const confirmation = swal('Success!', 'Sign Up Complete', 'success')
        if (await confirmation) {
          history.push('/')
        }
      } catch (e) {
        setError(true, 'GET_ERROR_EMAIL')
      }
    }
  }

  onKeyPressHandler (name, type) {
    const validator = new Validator()
    const { setError } = this.props
    let value = document.getElementById(name).value
    if (name === 'gender') {
      value = document.getElementById(name).firstChild.innerText
    }
    setError(validator.isValid(name, value) === false, type)
  }

  componentDidMount () {
    const { setSuccess } = this.props
    setSuccess()
  }

  render () {
    console.log(this.props)
    const options = [
      { key: 'm', text: 'Male', value: 'male' },
      { key: 'f', text: 'Female', value: 'female' }
    ]
    const { fnError, lnError, emailError, passError, phoneError, genderError } = this.props
    return (
      <Container fluid style={{height: '100%', background: `url(${require('../../images/c.png')})`}}>
        <Grid textAlign='center' verticalAlign='middle' style={{height: '80%'}}>
          <Grid.Column style={{ maxWidth: 700 }}>
            <Segment inverted style={{margin: 0}}>
              <Header as='h2' color='black' textAlign='center'>
                Sign Up
              </Header>
            </Segment>
            <Form size='massive' error>
              <Segment stacked>
                <Form.Input id='firstName' placeholder='Firstname' error={fnError} onKeyUp={() => this.onKeyPressHandler('firstName', 'GET_ERROR_FIRSTNAME')}/>
                <Form.Input id='lastName' placeholder='Lastname' error={lnError} onKeyUp={() => this.onKeyPressHandler('lastName', 'GET_ERROR_LASTNAME')}/>
                <Form.Input id='email' fluid icon='user' iconPosition='left' placeholder='E-mail address' error={emailError}
                  onKeyUp={() => this.onKeyPressHandler('email', 'GET_ERROR_EMAIL')}/>
                <Form.Input id='pass' fluid icon='lock' iconPosition='left' placeholder='Password' type='password' error={passError}
                  onKeyUp={() => this.onKeyPressHandler('pass', 'GET_ERROR_PASS')}/>
                <Form.Input id='phone' fluid icon='phone' iconPosition='left' placeholder='Phone Number' type='number' min={0} max={99999999999} error={phoneError}
                  onKeyUp={() => this.onKeyPressHandler('phone', 'GET_ERROR_PHONE')}/>
                <Form.Select id='gender' fluid options={options} placeholder='Gender' error={genderError}
                  onKeyUp={() => this.onKeyPressHandler('gender', 'GET_ERROR_GENDER')}/>
                <Button color='black' fluid size='large' onClick={() => this.addUser()}>Confirm</Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

export default SignUp
