import React from 'react'
import { Modal, Divider, Input, Button, Header, TextArea, Icon, Container, Segment, Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { onKeyPressHandler, onChangeHandler, getColor, isError } from '../../errorHandler'

class ContactView extends React.Component {
  autoFillForm () {
    const { lastName, firstName, phone, gender } = this.props.user
    const values = { firstName: firstName, lastName: lastName, phone: phone, gender: gender }
    for (const key in values) {
      if (key === 'gender') {
        document.getElementById(key).innerText = values[key]
      } else {
        document.getElementById(key).value = values[key]
        document.getElementById(key).readOnly = true
      }
    }
  }

  async initialize () {
    const { setSuccess, getUser, history } = this.props
    try {
      const { owner } = history.location.state.item
      const message = `You can't contact yourself`
      if (await isError(owner, message) === false) {
      const user = JSON.parse(localStorage.getItem('user'))
      await getUser(user.uid, user.email)
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

  render () {
    const { setError, fnError, lnError, genderError, phoneError } = this.props
    const options = [
      { key: 'm', text: 'Male', value: 'male' },
      { key: 'f', text: 'Female', value: 'female' }
    ]
    return (
      <Container fluid style={{height: '100%', background: `url(${require('../../images/e.jpg')})`}}>
        <Modal open basic size='small' style={{top: '45%'}}>
          <Modal.Actions>
            <Button as={Link} to={{pathname: '/Search'}} inverted color='black'>
              <Icon name='remove' /> BACK
            </Button>
          </Modal.Actions>
          <Segment basic>
            <Header textAlign='center' inverted>Contact User</Header>
            <Divider />
            <Modal.Content>
              <Input fluid id='firstName' placeholder='First Name' inverted transparent style={{color: getColor(fnError)}}
                onKeyUp={() => onKeyPressHandler('firstName', 'GET_ERROR_FIRSTNAME', setError)} />
              <Divider />
              <Input fluid id='lastName' placeholder='Last Name' inverted transparent style={{color: getColor(lnError)}}
                onKeyUp={() => onKeyPressHandler('lastName', 'GET_ERROR_LASTNAME', setError)} />
              <Divider />
              <Dropdown style={{ background: 'transparent', color: getColor(genderError)}} id='gender' selection
                fluid options={options} placeholder={'Gender'}
                onChange={() => onChangeHandler('gender','GET_ERROR_GENDER', setError)} />
              <Divider />
              <Input fluid id='phone' placeholder='Contact Number' inverted transparent style={{color: getColor(phoneError)}}
                type='number' min={0} max={99999999999} onKeyUp={() => onKeyPressHandler('phone', 'GET_ERROR_PHONE', setError)} />
              <Divider />
              <TextArea autoHeight style={{width: '100%'}} rows={5} placeholder='Message'
                style={{background: 'transparent', width: '100%', color: 'white'}} />
              <Divider hidden />
              <Button fluid inverted>Confirm</Button>
            </Modal.Content>
          </Segment>
        </Modal>
      </Container>
    )
  }
}

export default ContactView
