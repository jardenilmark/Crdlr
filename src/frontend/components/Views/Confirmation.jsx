import React from 'react'
import { Divider, Header, Input, Dropdown, Segment, Button, Container, Grid } from 'semantic-ui-react'
import history from '../../../backend/history'
import { addToDb, updateCollection, getCollection } from '../../firestoreActions'
import { onKeyPressHandler, onChangeHandler, getColor, isError } from '../../errorHandler'
import { getDocumentValues } from '../../documentHandler'
import alertify from 'alertify.js'
import swal from 'sweetalert'
import Validator from '../../validator'

class Confirmation extends React.Component {
  async onClickHandler () {
    const { item } = this.props
    const { brand, location, model, price, type, owner } = item
    const  arr = ['firstName', 'lastName', 'email', 'phone', 'gender', 'creditCard', 'address']
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
        price: parseFloat(price.slice(1)) * 0.95,
        advertisementFee: parseFloat(price.slice(1)) * 0.05,
        transactionDate: new Date(),
        status: 'bought'
      }
      addToDb('transactions', obj)
      const cars = await getCollection('cars')
      for (let i = 0; i < cars.docs.length; i++) {
        const data = cars.docs[i].data()
        if (JSON.stringify(data) === JSON.stringify(item)) {
          updateCollection('cars', cars.docs[i].id, { available: false })
          alertify.success(`Transaction Completed`, 3)
          history.push('/Search')
        }
      }
    }
  }

  async initialize () {
    const { setSuccess, getUser, history, item } = this.props
    try {
      const { owner } = item
      const message = `You can't purchase your own vehicle`
      if (await isError(owner, message) === false) {
      const parsedUser = JSON.parse(localStorage.getItem('user'))
      await getUser(parsedUser.uid, parsedUser.email)
      this.autoFillForm()
    }
    } catch (e) {
      // do nothing
    }
    setSuccess()
  }

  componentDidMount () {
    this.initialize()
  }

  autoFillForm () {
    const { email, lastName, firstName, phone, gender } = this.props.user
    const values = { firstName: firstName, lastName: lastName, email: email, phone: phone, gender: gender }
    for (const key in values) {
      if (document.getElementById(key).className.includes('dropdown')) {
        document.getElementById(key).innerText = values[key]
      } else {
        document.getElementById(key).value = values[key]
        document.getElementById(key).readOnly = true
      }
    }
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
                onKeyUp={() => onKeyPressHandler('lastName','GET_ERROR_LASTNAME', setError)}/>
              <Divider/>
              <Dropdown style={{fontSize: 20, background: 'transparent', color: getColor(genderError)}} id='gender' selection
                fluid options={genderOptions} placeholder={'Gender'}
                onChange={() => onChangeHandler('gender','GET_ERROR_GENDER', setError)} />
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
              <Button fluid size='large' onClick={() => this.onClickHandler()}>Confirm</Button>
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

export default Confirmation
