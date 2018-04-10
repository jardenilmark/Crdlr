import React from 'react'
import { Divider, Header, Input, Dropdown, Segment, Button, Container, Grid } from 'semantic-ui-react'
import history from '../../../backend/history'
import { addToDb, updateDocument, getDocument } from '../../firestoreActions'
import { onKeyPressHandler, onChangeHandler, getColor, isItemError } from '../../errorHandler'
import { getDocumentValues, autoFillForm, getDate } from '../../documentHandler'
import alertify from 'alertify.js'
import Validator from '../../validator'

class ConfirmationView extends React.Component {
  async onClickHandler () {
    const { item } = this.props
    const { brand, location, model, price, type } = item
    const arr = ['firstName', 'lastName', 'email', 'phone', 'gender', 'creditCard', 'address']
    const toCheck = getDocumentValues(arr)
    const validator = new Validator()
    let isAllValid = true
    for (const key in toCheck) {
      if (!validator.isValid(key, toCheck[key])) {
        isAllValid = false
      }
    }
    if (isAllValid) {
      const obj = {
        ...toCheck,
        brand: brand,
        location: location,
        carModel: model,
        type: type,
        price: parseFloat(price) * 0.98,
        advertisementFee: parseFloat(price) * 0.02,
        transactionDate: getDate(new Date()),
        status: 'bought'
      }
      await addToDb('transactions', obj)
      const cars = await getDocument('cars')
      for (let i = 0; i < cars.docs.length; i++) {
        const data = cars.docs[i].data()
        if (JSON.stringify(data) === JSON.stringify(item)) {
          await updateDocument('cars', cars.docs[i].id, { available: false })
          alertify.success(`Transaction Completed`, 3)
          history.push('/SearchView')
        }
      }
    }
  }

  async initialize () {
    const { setSuccess, getUser, item } = this.props
    try {
      const { owner } = item
      const message = `You can't purchase your own vehicle`
      if (await isItemError(owner, message) === false) {
        const parsedUser = JSON.parse(localStorage.getItem('user'))
        await getUser(parsedUser.uid, parsedUser.email)
        const { email, lastName, firstName, phone, gender } = this.props.user
        const values = { firstName: firstName, lastName: lastName, email: email, phone: phone, gender: gender }
        autoFillForm(values)
      }
    } catch (e) {
      // do nothing
    }
    setSuccess()
  }

  componentDidMount () {
    this.initialize()
  }

  render () {
    const { fnError, lnError, emailError, phoneError, genderOptions,
      genderError, creditCardError, addressError, setError } = this.props
    return (
      <Container fluid style={{paddingTop: 20}}>
        <Grid textAlign='center' verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: '80%' }}>
            <Segment stacked basic>
              <Segment style={{background: 'transparent'}}>
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
                onKeyUp={() => onKeyPressHandler('phone', 'GET_ERROR_PHONE', setError)}/> {/* should add more parameters */}
              <Divider/>
              <Input id='address' fluid icon='home' iconPosition='left' placeholder='Home Address'
                size='massive' transparent inverted style={{color: getColor(addressError)}}
                onKeyUp={() => onKeyPressHandler('address', 'GET_ERROR_ADDRESS', setError)}/>
              <Divider/>
              <Input id='creditCard' fluid icon='credit card alternative' iconPosition='left' type='password' placeholder='Credit Card Number'
                size='massive' transparent inverted style={{color: getColor(creditCardError)}}
                onKeyUp={() => onKeyPressHandler('creditCard', 'GET_ERROR_CREDITCARD', setError)}/> {/* should add more parameters */}
              <Divider/>
              <Button fluid size='large' onClick={() => this.onClickHandler()}>Confirm</Button>
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

export default ConfirmationView
