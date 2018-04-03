import React from 'react'
import { Divider, Header, Input, Dropdown, Segment, Button, Container, Grid } from 'semantic-ui-react'
import history from '../../../backend/history'
import Validator from '../../validator'
import { addToDb, updateCollection, getCollection } from '../../firestoreActions'
import alertify from 'alertify.js'
import swal from 'sweetalert'

class Confirmation extends React.Component {
  async onClickHandler () {
    const { brand, location, model, price, type, owner } = this.props.item
    const toCheck = {
      firstName: document.getElementById(`firstName`).value,
      lastName: document.getElementById(`lastName`).value,
      email: document.getElementById(`email`).value,
      phone: document.getElementById(`phone`).value,
      gender: document.getElementById(`gender`).innerText,
      creditCard: document.getElementById(`creditCard`).value,
      address: document.getElementById(`address`).value
    }
    const sellerProfit = parseFloat(price.slice(1)) * 0.95
    const advertFee = parseFloat(price.slice(1)) * 0.5
    let isAllValid = true
    const validator = new Validator()
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
        price: sellerProfit,
        type: type,
        advertisementFee: advertFee,
        transactionDate: new Date()
      }
      addToDb('transactions', obj)
      const cars = await getCollection('cars')
      let id
      for (let i = 0; i < cars.docs.length; i++) {
        let bool = true
        const data = cars.docs[i].data()
        if (JSON.stringify(data) === JSON.stringify(item)) {
          id = cars.docs[i].id
        }
      }
      updateCollection('cars', id, { available: false })
      alertify.success(`Transaction Completed`, 3)
      history.push('/Search')
    }
  }

  async initialize () {
    const { setSuccess, getUsers } = this.props
    if (await this.isError() === false) {
      const user = localStorage.getItem('user')
      if (user) {
        const parsedUser = JSON.parse(user)
        await getUsers(parsedUser.uid, parsedUser.email)
        this.autoFillForm()
      }
      setSuccess()
    }
  }

  onKeyPressHandler (name, type) {
    const validator = new Validator()
    const { setError } = this.props
    let value = document.getElementById(name).value
    if (name === 'gender') {
      value = document.getElementById(name).innerText
    }
    setError(validator.isValid(name, value) === false, type)
  }

  async isError () {
    try {
      const { owner } = this.props.item
      const user = localStorage.getItem('user')
      if (user && JSON.parse(user).uid === owner) {
        const confirmation = swal('Error!', `You can't purchase your own vehicle`, 'error')
        if (await confirmation) {
          history.push('/Search')
          return true
        } else { // incase the user uses escape
          history.push('/Search')
          return true
        }
      }
    } catch (e) {
      const confirmation = swal('Error!', `No Item Selected`, 'error')
      if (await confirmation) {
        history.push('/Search')
        return true
      } else {
        history.push('/Search')
        return true
      }
    }
    return false
  }

  componentDidMount () {
    this.initialize()
  }

  getColor (error) {
    if (error) {
      return 'red'
    } 
    return 'white'
  }

  autoFillForm () {
    const { email, lastName, firstName, phone, gender } = this.props.user
    const values = { firstName: firstName, lastName: lastName, email: email, phone: phone, gender: gender }
    for (const key in values) {
      if (key === 'gender') {
        document.getElementById(key).innerText = values[key]
      } else {
        document.getElementById(key).value = values[key]
        document.getElementById(key).readOnly = true
      }
    }
  }

  render () {
    console.log(this.props)
    const { fnError, lnError, emailError, passError,
      phoneError, genderError, creditCardError, addressError } = this.props
    const options = [
      { key: 'm', text: 'Male', value: 'male' },
      { key: 'f', text: 'Female', value: 'female' }
    ]
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
                size='massive' transparent inverted error={fnError} style={{color: this.getColor(fnError)}}
                onKeyUp={() => this.onKeyPressHandler('firstName', 'GET_ERROR_FIRSTNAME')}/>
              <Divider/>
              <Input id='lastName' fluid placeholder='LastName' style={{color: this.getColor(lnError)}}
                size='massive' transparent inverted error={lnError}
                onKeyUp={() => this.onKeyPressHandler('lastName','GET_ERROR_LASTNAME')}/>
              <Divider/>
              <Dropdown style={{fontSize: 20, background: 'transparent', color: this.getColor(genderError)}} id='gender' selection
                fluid options={options} placeholder={'Gender'} error={genderError}
                onKeyUp={() => this.onKeyPressHandler('gender','GET_ERROR_GENDER')} />
              <Divider/>
              <Input id='email' fluid icon='user' iconPosition='left' placeholder='Email-Address'
                size='massive' transparent inverted error={emailError} style={{color: this.getColor(emailError)}}
                onKeyUp={() => this.onKeyPressHandler('email', 'GET_ERROR_EMAIL')}/>
              <Divider/>
              <Input id='phone' fluid icon='phone' iconPosition='left' placeholder='Phone Number' transparent inverted
                size='massive' type='number' min={0} max={99999999999} error={phoneError} style={{color: this.getColor(phoneError)}}
                onKeyUp={() => this.onKeyPressHandler('phone', 'GET_ERROR_PHONE')}/>
              <Divider/>
              <Input id='address' fluid icon='home' iconPosition='left' placeholder='Home Address' 
                size='massive' transparent inverted error={addressError} style={{color: this.getColor(addressError)}}
                onKeyUp={() => this.onKeyPressHandler('address', 'GET_ERROR_ADDRESS')}/>
              <Divider/>
              <Input id='creditCard' fluid icon='credit card alternative' iconPosition='left' type='password' placeholder='Credit Card Number' 
                size='massive' transparent inverted error={creditCardError} style={{color: this.getColor(creditCardError)}}
                onKeyUp={() => this.onKeyPressHandler('creditCard', 'GET_ERROR_CREDITCARD')}/>
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
