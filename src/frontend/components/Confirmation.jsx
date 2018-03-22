import React from 'react'
import { Form, Segment, Button, Container, Grid } from 'semantic-ui-react'
import { firestore } from '../../backend/database'

class Confirmation extends React.Component {
  async getElementArray () {
    const { firstName, lastName, email, phone, gender } = this.props
    const arr = [
      document.getElementById('firstNameConfirm'),
      document.getElementById('lastNameConfirm'),
      document.getElementById('emailConfirm'),
      document.getElementById('phoneConfirm'),
      document.getElementById('genderConfirm')
    ]
    const dbArr = [firstName, lastName, email, phone, gender]
    for (let i = 0; i < arr.length; i++) {
      arr[i].readOnly = true
      arr[i].value = dbArr[i]
      arr[i].placeholder = dbArr[i]
      if (i === arr.length - 1) {
        arr[i].disabled = true
        arr[i].innerText = dbArr[i]
      }
    }
    arr.push(document.getElementById('creditCard'))
    arr.push(document.getElementById('homeAddress'))
    return arr
  }

  async onClickHandler () {
    const arr = [...this.arr]
    const { brand, location, model, price, type } = this.props.item
    const { date } = this.props
    const sellerProfit = parseFloat(price.slice(1)) * 0.95
    const advertFee = parseFloat(price.slice(1)) * 0.5
    await firestore.collection('transactions').add({
      firstname: arr[0].value,
      lastname: arr[1].value,
      email: arr[2].value,
      phone: arr[3].value,
      gender: arr[4].innerText,
      creditCard: arr[5].value,
      homeAddress: arr[6].value,
      brand: brand,
      location: location,
      carModel: model,
      price: sellerProfit,
      type: type,
      dateToMeet: date,
      advertisementFee: advertFee,
      transactionDate: new Date()
    })
  }

  async initializeProps () {
    const { getUsers } = this.props
    const user = localStorage.getItem('user')
    if (user) {
      const parsedUser = JSON.parse(user)
      await getUsers(parsedUser.uid, parsedUser.email)
    }
  }

  componentDidMount () {
    this.initializeProps()
  }

  render () {
    if (this.props.email) {
      this.arr = this.getElementArray()
    }
    const options = [
      { key: 'm', text: 'Male', value: 'male' },
      { key: 'f', text: 'Female', value: 'female' }
    ]
    return (
      <Container fluid style={{paddingTop: 20}}>
        <Grid textAlign='center' verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: '80%' }}>
            <Form size='massive' error>
              <Segment stacked>
                <Form.Input id='firstNameConfirm' placeholder='Firstname'/>
                <Form.Input id='lastNameConfirm' placeholder='Lastname'/>
                <Form.Input id='emailConfirm' fluid icon='user' iconPosition='left' placeholder='E-mail address'/>
                <Form.Input id='phoneConfirm' fluid icon='phone' iconPosition='left' placeholder='Phone Number' type='number' min={0} max={99999999999}/>
                <Form.Select id='genderConfirm' fluid options={options} placeholder='Gender'/>
                <Form.Input id='homeAddress' fluid icon='home' iconPosition='left' placeholder='Home Address'/>
                <Form.Input id='creditCard' fluid icon='credit card alternative' iconPosition='left' type='password' placeholder='Credit Card Number'/>
                <Button color='black' fluid size='large' onClick={() => this.onClickHandler()}>Confirm</Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

export default Confirmation
