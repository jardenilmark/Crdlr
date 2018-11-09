import React from 'react'
import { Divider, Header, Input, Dropdown, Icon, Button, Modal, Segment, Container, Grid } from 'semantic-ui-react'
import { onKeyPressHandler, onChangeHandler, getColor } from '../../errorHandler'
import { autoFillForm, getDate } from '../../documentHandler'
import { confirmationHandler } from '../../confirmationHandler'
import { Link } from 'react-router-dom'

class ConfirmationView extends React.Component {
  async initialize () {
    const { setSuccess, getUser, currentUser } = this.props
    try {
      const parsedUser = JSON.parse(currentUser)
      await getUser(parsedUser.uid, parsedUser.email)
      const { email, lastName, firstName, phone, gender, creditCard, expiration } = this.props.user
      const values = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        gender: gender,
        creditCard: creditCard,
        expirationDate: expiration
      }
      autoFillForm(values)
    } catch (e) {
      // do nothing
    }
    setSuccess()
  }

  componentDidMount () {
    this.initialize()
  }

  render () {
    const { fnError, lnError, emailError, phoneError, genderOptions, buyerReceiptModal,
      genderError, creditCardError, addressError, setError, expirationDateError } = this.props
    return (
      <Modal basic open={!buyerReceiptModal}>
        <Modal.Actions>
          <Button as={Link} to={{pathname: '/SearchView'}} inverted color='black'>
            <Icon name='remove' /> BACK
          </Button>
        </Modal.Actions>
        <Container fluid style={{paddingTop: 20}}>
          <Grid textAlign='center' verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: '80%' }}>
              <Segment stacked basic>
                <Segment basic>
                  <Header inverted size='huge'>CONFIRM PURCHASE</Header>
                </Segment>
                <Divider/>
                <Input id='firstName' fluid placeholder='firstName'
                  size='massive' transparent inverted style={{color: getColor(fnError)}}
                  onKeyUp={() => onKeyPressHandler('firstName', 'GET_ERROR_FIRSTNAME', setError)}/>
                <Divider/>
                <Input id='lastName' fluid placeholder='LastName' style={{color: getColor(lnError)}}
                  size='massive' transparent inverted
                  onKeyUp={() => onKeyPressHandler('lastName', 'GET_ERROR_LASTNAME', setError)}/>
                <Divider/>
                <Dropdown style={{fontSize: 20, background: 'transparent', color: getColor(genderError)}} id='gender' selection
                  fluid options={genderOptions} placeholder={'Gender'}
                  onChange={() => onChangeHandler('gender', 'GET_ERROR_GENDER', setError)} />
                <Divider/>
                <Input id='email' fluid icon='user' iconPosition='left' placeholder='Email-Address'
                  size='massive' transparent inverted style={{color: getColor(emailError)}}
                  onKeyUp={() => onKeyPressHandler('email', 'GET_ERROR_EMAIL', setError)}/>
                <Divider/>
                <Input id='phone' fluid icon='phone' iconPosition='left' placeholder='Phone Number' transparent inverted
                  size='massive' type='number' min={0} max={99999999999} style={{color: getColor(phoneError)}}
                  onKeyUp={() => onKeyPressHandler('phone', 'GET_ERROR_PHONE', setError)}/>
                <Divider/>
                <Input id='address' fluid icon='home' iconPosition='left' placeholder='Home Address'
                  size='massive' transparent inverted style={{color: getColor(addressError)}}
                  onKeyUp={() => onKeyPressHandler('address', 'GET_ERROR_ADDRESS', setError)}/>
                <Divider/>
                <Input id='creditCard' fluid icon='credit card alternative' iconPosition='left' type='password' placeholder='Credit Card Number'
                  size='massive' transparent inverted style={{color: getColor(creditCardError)}}
                  onKeyUp={() => onKeyPressHandler('creditCard', 'GET_ERROR_CREDITCARD', setError)}/>
                <Divider/>
                <Input id='expirationDate' fluid icon='calendar' iconPosition='left' type='date' style={{color: getColor(expirationDateError)}}
                  size='massive' transparent inverted min={getDate(new Date())}/>
                <Divider/>
                <Button fluid size='large' onClick={() => confirmationHandler()}>Confirm</Button>
              </Segment>
            </Grid.Column>
          </Grid>
        </Container>
      </Modal>
    )
  }
}

export default ConfirmationView
