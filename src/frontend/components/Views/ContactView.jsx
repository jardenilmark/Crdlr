import React from 'react'
import { Modal, Divider, Input, Button, Header, TextArea, Icon, Container, Segment, Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { onKeyPressHandler, onChangeHandler, getColor, isItemError } from '../../errorHandler'
import { getDocumentValues, autoFillForm } from '../../documentHandler'
import { getDocument, updateDocument, getDocumentUID } from '../../firestoreActions'
import swal from 'sweetalert'
import Validator from '../../validator'
import alertify from 'alertify.js'

class ContactView extends React.Component {
  async initialize () {
    const { setSuccess, getUser, history } = this.props
    try {
      const { owner } = history.location.state
      const message = `You can't contact yourself`
      if (await isItemError(owner, message) === false) {
        const user = JSON.parse(localStorage.getItem('user'))
        await getUser(user.uid, user.email)
        const { lastName, firstName, phone, gender } = this.props.user
        const values = { firstName: firstName, lastName: lastName, phone: phone, gender: gender }
        autoFillForm(values)
      }
    } catch (e) {
      // do nothing
    }
    setSuccess()
  }

  async onClickHandler () {
    const { history } = this.props
    const inputArr = ['firstName', 'lastName', 'gender', 'phone', 'message']
    const values = getDocumentValues(inputArr)
    const validator = new Validator()
    let isAllValid = true
    for (const key in values) {
      if (!validator.isValid(key, values[key])) {
        isAllValid = false
        break
      }
    }
    if (isAllValid) {
      values['owner'] = history.location.state.owner
      const car = await getDocument('cars', 'image', history.location.state.image)
      const arrId = car.docs[0].data().peopleInterested
      const peopleInterested = await getDocumentUID('peopleInterested', arrId)
      const dataToSend = {people: [...peopleInterested.data().people, values]}
      await updateDocument('peopleInterested', arrId, dataToSend)
      history.push('/Search')
      alertify.success(`Message has been sent`, 3)
    } else {
      swal('Error!', 'Please fill up all inputs', 'error')
    }
  }

  componentDidMount () {
    this.initialize()
  }

  render () {
    const { setError, fnError, lnError, genderError, phoneError, genderOptions } = this.props
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
              <Dropdown style={{background: 'transparent', color: getColor(genderError)}} id='gender' selection
                fluid options={genderOptions} placeholder={'Gender'}
                onChange={() => onChangeHandler('gender', 'GET_ERROR_GENDER', setError)} />
              <Divider />
              <Input fluid id='phone' placeholder='Contact Number' inverted transparent style={{color: getColor(phoneError)}}
                type='number' min={0} max={99999999999} onKeyUp={() => onKeyPressHandler('phone', 'GET_ERROR_PHONE', setError)} />
              <Divider />
              <TextArea id='message' autoHeight style={{width: '100%'}} rows={5} placeholder='Message'
                style={{background: 'transparent', width: '100%', color: 'white'}} />
              <Divider hidden />
              <Button onClick={() => this.onClickHandler()} fluid inverted>Confirm</Button>
            </Modal.Content>
          </Segment>
        </Modal>
      </Container>
    )
  }
}

export default ContactView
