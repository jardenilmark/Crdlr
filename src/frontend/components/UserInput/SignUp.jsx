import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { firestore, auth } from '../../../backend/database'
import swal from 'sweetalert'

class SignUp extends React.Component {
  async addUser (name) {
    const { handleItemClick, setUser } = this.props
    console.log('test')
    const email = document.getElementById('email').value
    const pass = document.getElementById('pass').value
    const user = await auth.createUserWithEmailAndPassword(email, pass)
    const uid = user.uid
    firestore.collection('users').doc(uid).set({
      gender: document.getElementById('gender').firstChild.innerText,
      phone: document.getElementById('phone').innerText
    })
    const confirmation = swal('Success!', 'Sign Up Complete', 'success')
    if (await confirmation) {
      handleItemClick(name)
      await auth.signInWithEmailAndPassword(email, pass)
      localStorage.setItem('user', JSON.stringify(auth.currentUser))
      setUser(auth.currentUser)
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
              <Form size='massive' error>
                <Segment stacked>
                  <Form.Input id='email' fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                  <Form.Input id='pass' fluid icon='lock' iconPosition='left' placeholder='Password' type='password' />
                  {/* <Message error header='Action Forbidden' content='You can only sign up for an account once with a given e-mail address.' /> */}
                  <Form.Input id='phone' fluid icon='phone' iconPosition='left' placeholder='Phone Number' type='number' min={0} max={99999999999}/>
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
