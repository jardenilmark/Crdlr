import { getDocumentValues } from './documentHandler'
import { getDocument, updateDocument, getDocumentUID } from '../backend/data'
import swal from 'sweetalert'
import Validator from './validator'
import alertify from 'alertify.js'

export async function contactHandler () {
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
    values['date'] = document.getElementById('date').value
    const car = await getDocument('cars', 'imageId', history.location.state.imageId)
    const arrId = car.docs[0].data().peopleInterested
    const peopleInterested = await getDocumentUID('contacts', arrId)
    const dataToSend = {people: [...peopleInterested.data().people, values]}
    await updateDocument('contacts', arrId, dataToSend)
    history.push('/SearchView')
    alertify.success(`Message has been sent`, 3)
  } else {
    swal('Error!', 'Please fill up all inputs', 'error')
  }
}
