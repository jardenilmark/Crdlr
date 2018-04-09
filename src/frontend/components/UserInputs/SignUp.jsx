import React from 'react'
import { Container, Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react'
import { auth } from '../../../backend/database'
import { setDocument } from '../../firestoreActions'
import { onKeyPressHandler, onChangeHandler } from '../../errorHandler'
import { getDocumentValues } from '../../documentHandler'
import swal from 'sweetalert'
import history from '../../../backend/history'
import Validator from '../../validator'

class SignUp extends React.Component {
  addAction () {
    const { setCurrentUser } = this.props
    localStorage.setItem('user', JSON.stringify(auth.currentUser))
    setCurrentUser(auth.currentUser)
    history.push('/')
  }

  async addUser () {
    const { setError } = this.props
    const email = document.getElementById('email').value
    const pass = document.getElementById('pass').value
    const userArr = ['firstName', 'lastName', 'gender', 'phone']
    const user = getDocumentValues(userArr)
    const validator = new Validator()
    const toCheck = {...user, email: email, pass: pass}
    let isAllValid = true
    for (const key in toCheck) {
      if (!validator.isValid(key, toCheck[key])) {
        isAllValid = false
      }
    }
    if (isAllValid) {
      try {
        const create = await auth.createUserWithEmailAndPassword(email, pass)
        const id = create.uid
        setDocument('users', id, user)
        const confirmation = swal('Success!', 'Sign Up Complete', 'success')
        if (await confirmation) {
          this.addAction()
        } else { // incase the user uses escape
          this.addAction()
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
    const { fnError, lnError, emailError, passError, phoneError, genderError, setError, genderOptions } = this.props
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
                <Form.Select id='gender' fluid options={genderOptions} placeholder='Gender' error={genderError}
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
