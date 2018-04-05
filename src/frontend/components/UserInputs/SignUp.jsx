import React from 'react'
import { Container, Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react'
import { auth } from '../../../backend/database'
import { setCollection } from '../../firestoreActions'
import swal from 'sweetalert'
import { Link } from 'react-router-dom'
import history from '../../../backend/history'
import { onKeyPressHandler, onChangeHandler } from '../../errorHandler'
import Validator from '../../validator' 

class SignUp extends React.Component {
  async addUser () {
    const { setError, setCurrentUser } = this.props
    const email = document.getElementById('email').value
    const pass = document.getElementById('pass').value
    const user = {
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      gender: document.getElementById('gender').firstChild.innerText,
      phone: document.getElementById('phone').value
    }
    let isAllValid = true
    const validator = new Validator()
    for (const key in user) {
      if (!validator.isValid(key, user[key])) {
        isAllValid = false
      }
    }
    if (!validator.isValid('email', email) || !validator.isValid('pass', pass)) {
      isAllValid = false
    }
    if (isAllValid) {
      try {
        const create = await auth.createUserWithEmailAndPassword(email, pass)
        const id = create.uid
        setCollection('users', id, user)
        const confirmation = swal('Success!', 'Sign Up Complete', 'success')
        if (await confirmation) {
          localStorage.setItem('user', JSON.stringify(auth.currentUser))
          setCurrentUser(auth.currentUser)
          history.push('/')
        } else { // incase the user uses escape
          localStorage.setItem('user', JSON.stringify(auth.currentUser))
          setCurrentUser(auth.currentUser)
          history.push('/')
        }
      } catch (e) {
        setError(true, 'GET_ERROR_EMAIL')
      }
    } else {
      swal('Error!', 'Sign Up Error', 'error')
    }
  }

  componentDidMount () {
    const { setSuccess } = this.props
    setSuccess()
  }

  render () {
    const options = [
      { key: 'm', text: 'Male', value: 'male' },
      { key: 'f', text: 'Female', value: 'female' }
    ]
    const { fnError, lnError, emailError, passError, phoneError, genderError, setError } = this.props
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
                <Form.Input id='firstName' placeholder='Firstname' error={fnError} onKeyUp={() => onKeyPressHandler('firstName', 'GET_ERROR_FIRSTNAME', setError)}/>
                <Form.Input id='lastName' placeholder='Lastname' error={lnError} onKeyUp={() => onKeyPressHandler('lastName', 'GET_ERROR_LASTNAME', setError)}/>
                <Form.Input id='email' fluid icon='user' iconPosition='left' placeholder='E-mail address' error={emailError}
                  onKeyUp={() => onKeyPressHandler('email', 'GET_ERROR_EMAIL', setError)}/>
                <Form.Input id='pass' fluid icon='lock' iconPosition='left' placeholder='Password' type='password' error={passError}
                  onKeyUp={() => onKeyPressHandler('pass', 'GET_ERROR_PASS', setError)}/>
                <Form.Input id='phone' fluid icon='phone' iconPosition='left' placeholder='Phone Number' type='number' min={0} max={99999999999} error={phoneError}
                  onKeyUp={() => onKeyPressHandler('phone', 'GET_ERROR_PHONE', setError)}/>
                <Form.Select id='gender' fluid options={options} placeholder='Gender' error={genderError}
                  onChange={() => onChangeHandler('gender', 'GET_ERROR_GENDER', setError)}/>
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
