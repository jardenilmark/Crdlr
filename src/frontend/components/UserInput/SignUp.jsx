import React from 'react'
import { Container, Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { firestore, auth } from '../../../backend/database'
import Validator from '../../validator'
import swal from 'sweetalert'
import { Link } from 'react-router-dom'
import history from '../../../backend/history'

class SignUp extends React.Component {
  async addUser () {
    const { setErrors, signUpDone } = this.props
    const user = {
      email: document.getElementById('email').value,
      pass: document.getElementById('pass').value,
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      gender: document.getElementById('gender').firstChild.innerText,
      phone: document.getElementById('phone').value
    }
    const validator = new Validator(user)
    if (validator.isAllValid()) {
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
          history.push('/Home')
          signUpDone()
        }
      } catch (e) {
        setErrors({
          emailError: validator.isEmail() === false,
          passError: validator.isPass() === false
        })
      }
    } else {
      setErrors({
        fnError: validator.isFirstName() === false,
        lnError: validator.isLastName() === false,
        emailError: validator.isEmail() === false,
        passError: validator.isPass() === false,
        phoneError: validator.isPhoneNum() === false,
        genderError: validator.isGender() === false
      })
    }
  }
  render () {
    const options = [
      { key: 'm', text: 'Male', value: 'male' },
      { key: 'f', text: 'Female', value: 'female' }
    ]
    const { fnError, lnError, emailError, passError, phoneError, genderError } = this.props
    return (
      <Container fluid style={{height: '100%'}}>
        <Grid textAlign='center' verticalAlign='middle' style={{height: '80%'}}>
          <Grid.Column style={{ maxWidth: 700 }}>
            <Header as='h2' color='teal' textAlign='center'>
              Sign Up
            </Header>
            <Form size='massive' error>
              <Segment stacked>
                <Form.Input id='firstName' placeholder='Firstname' error={fnError}/>
                <Form.Input id='lastName' placeholder='Lastname' error={lnError}/>
                <Form.Input id='email' fluid icon='user' iconPosition='left' placeholder='E-mail address' error={emailError}/>
                <Form.Input id='pass' fluid icon='lock' iconPosition='left' placeholder='Password' type='password' error={passError}/>
                <Form.Input id='phone' fluid icon='phone' iconPosition='left' placeholder='Phone Number' type='number' min={0} max={99999999999} error={phoneError}/>
                <Form.Select id='gender' fluid options={options} placeholder='Gender' error={genderError}/>
                <Button color='teal' fluid size='large' onClick={() => this.addUser()}>Confirm</Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

export default SignUp
