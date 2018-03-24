import React from 'react'
import { Divider, Header, Input, Dropdown, Segment, Button, Container, Grid } from 'semantic-ui-react'
import { firestore } from '../../backend/database'
import history from '../../backend/history'
import Validator from '../validator'
import alertify from 'alertify.js'

class Confirmation extends React.Component {
  async onClickHandler () {
    const { email, firstName, lastName, phone, gender, item } = this.props
    const { brand, location, model, price, type } = item
    const arr = [
      document.getElementById(`firstNameConfirm`).value,
      document.getElementById(`lastNameConfirm`).value,
      document.getElementById(`emailConfirm`).value,
      document.getElementById(`phoneConfirm`).value,
      document.getElementById(`genderConfirm`).innerText,
      document.getElementById(`creditCardConfirm`).value,
      document.getElementById(`homeAddressConfirm`).value,
      document.getElementById(`dateConfirm`).value
    ]
    const sellerProfit = parseFloat(price.slice(1)) * 0.95
    const advertFee = parseFloat(price.slice(1)) * 0.5
    let isAllValid = true
    const validator = new Validator()
    for (const key in arr) {
      if (validator.isValid(arr[key], key)) {
        isAllValid = false
      }
    }
    if (isAllValid) {
      await firestore.collection('transactions').add({
        firstname: arr[0],
        lastname: arr[1],
        email: arr[2],
        phone: arr[3],
        gender: arr[4],
        creditCard: arr[5],
        homeAddress: arr[6],
        dateToMeet: arr[7],
        brand: brand,
        location: location,
        carModel: model,
        price: sellerProfit,
        type: type,
        advertisementFee: advertFee,
        transactionDate: new Date()
      })
      const cars = await firestore.collection('cars').get()
      let id
      for (let i = 0; i < cars.docs.length; i++) {
        let bool = true
        const data = cars.docs[i].data()
        if (JSON.stringify(data) === JSON.stringify(item)) {
          id = cars.docs[i].id
        }
      }
      const ref = await firestore.collection('cars').doc(id)
      await ref.update({ available: false })
      alertify.success(`Transaction Completed`, 3)
      history.push('/Search')
    }
  }

  async initializeForm () {
    const { getUsers } = this.props
    const user = localStorage.getItem('user')
    if (user) {
      const parsedUser = JSON.parse(user)
      await getUsers(parsedUser.uid, parsedUser.email)
    }
  }

  onKeyPressHandler (name, id, type) {
    const validator = new Validator()
    const { setError } = this.props
    let value = document.getElementById(id).value
    if (name === 'gender') {
      value = document.getElementById(id).innerText
    }
    setError(validator.isValid(name, value) === false, type)
  }

  componentDidMount () {
    const { setSuccess } = this.props
    this.initializeForm()
    setSuccess()
  }

  getColor (error) {
    if (error) {
      return 'red'
    } 
    return 'white'
  }

  autoFillForm () {
    const { email, lastName, firstName, phone, gender } = this.props
    const values = { firstName: firstName, lastName: lastName, email: email, phone: phone, gender: gender }
    if (email) {
      for (const key in values) {
        if (key === 'gender') {
          document.getElementById(`${key}Confirm`).innerText = values[key]
        } else {
          document.getElementById(`${key}Confirm`).value = values[key]
          document.getElementById(`${key}Confirm`).readOnly = true
        }
      }
    }
  }

  render () {
    const { fnError, lnError, emailError, passError,
      phoneError, genderError, creditCardError, addressError } = this.props
    const options = [
      { key: 'm', text: 'Male', value: 'male' },
      { key: 'f', text: 'Female', value: 'female' }
    ]
    this.autoFillForm()
    return (
      <Container fluid style={{paddingTop: 20}}>
        <Grid textAlign='center' verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: '80%' }}>
            <Segment stacked basic>
              <Segment style={{background: 'transparent'}}>
                <Header inverted size='huge'>CONFIRM PURCHASE</Header>
              </Segment>
              <Divider/>
              <Input id={`firstNameConfirm`} fluid placeholder={'firstName'}
                size='massive' transparent inverted error={fnError} style={{color: this.getColor(fnError)}}
                onKeyUp={() => this.onKeyPressHandler('firstName', `firstNameConfirm`, 'GET_ERROR_FIRSTNAME')}/>
              <Divider/>
              <Input id={`lastNameConfirm`} fluid placeholder={'LastName'} style={{color: this.getColor(lnError)}}
                size='massive' transparent inverted error={lnError}
                onKeyUp={() => this.onKeyPressHandler('lastName', `lastNameConfirm`,'GET_ERROR_LASTNAME')}/>
              <Divider/>
              <Dropdown style={{fontSize: 20, background: 'transparent', color: this.getColor(genderError)}} id={`genderConfirm`} selection
                fluid options={options} placeholder={'Gender'} error={genderError}
                onKeyUp={() => this.onKeyPressHandler('gender', `genderConfirm`,'GET_ERROR_GENDER')} />
              <Divider/>
              <Input id={`emailConfirm`} fluid icon='user' iconPosition='left' placeholder={'Email-Address'}
                size='massive' transparent inverted error={emailError} style={{color: this.getColor(emailError)}}
                onKeyUp={() => this.onKeyPressHandler('email', `emailConfirm`, 'GET_ERROR_EMAIL')}/>
              <Divider/>
              <Input id={`phoneConfirm`} fluid icon='phone' iconPosition='left' placeholder={'Phone Number'} transparent inverted
                size='massive' type='number' min={0} max={99999999999} error={phoneError} style={{color: this.getColor(phoneError)}}
                onKeyUp={() => this.onKeyPressHandler('phone', `phoneConfirm`, 'GET_ERROR_PHONE')}/>
              <Divider/>
              <Input id={`homeAddressConfirm`} fluid icon='home' iconPosition='left' placeholder='Home Address' 
                size='massive' transparent inverted error={addressError} style={{color: this.getColor(addressError)}}
                onKeyUp={() => this.onKeyPressHandler('address', `homeAddressConfirm`, 'GET_ERROR_ADDRESS')}/>
              <Divider/>
              <Input id={`creditCardConfirm`} fluid icon='credit card alternative' iconPosition='left' type='password' placeholder='Credit Card Number' 
                size='massive' transparent inverted error={creditCardError} style={{color: this.getColor(creditCardError)}}
                onKeyUp={() => this.onKeyPressHandler('creditCard', `creditCardConfirm`, 'GET_ERROR_CREDITCARD')}/>
              <Divider/>
              <Input id={`dateConfirm`} fluid icon='calendar' iconPosition='left' type='date' placeholder='Credit Card Number' 
                size='massive' transparent inverted/>
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
