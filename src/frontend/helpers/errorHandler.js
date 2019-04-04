import history from './history'
import Validator from './validator'
import swal from 'sweetalert'

export function onKeyPressHandler (name, type, func) {
  const validator = new Validator()
  const value = document.getElementById(name).value
  func(validator.isValid(name, value) === false, type)
}

export function onChangeHandler (name, type, func) {
  const validator = new Validator()
  const value = document.getElementById(name).firstChild.innerText
  func(validator.isValid(name, value) === false, type)
}

export function getColor (error) {
  if (error) {
    return 'red'
  }
  return 'white'
}

export async function isItemError (owner, message) {
  try {
    const user = localStorage.getItem('user')
    if (user && JSON.parse(user).uid === owner) {
      const confirmation = swal('Error!', message, 'error')
      if (await confirmation) {
        history.push('/SearchView')
        return true
      } else { // incase the user uses escape
        history.push('/SearchView')
        return true
      }
    }
  } catch (e) {
    const confirmation = swal('Error!', `No Item Selected`, 'error')
    if (await confirmation) {
      history.push('/SearchView')
      return true
    } else {
      history.push('/SearchView')
      return true
    }
  }
  return false
}

export async function isUserError (history) {
  if (!localStorage.getItem('user')) {
    const confirm = swal('WARNING!', 'YOU ARE NOT ALLOWED HERE', 'warning')
    if (await confirm) {
      history.push('/')
    } else {
      history.push('/')
    }
    return false
  }
  return true
}

export function isCarCreateError (car, func, file) {
  const errorMessages = []
  if (!car['desc']) {
    errorMessages.push('Please add more addition details to your car')
  }
  if (!car['price'] && /[^0-9]/g.test(car['price'])) {
    errorMessages.push('Please place a valid price for your car')
  }
  if (car['brand'] === 'Brand') {
    errorMessages.push('Please select the brand of your car')
  }
  if (car['type'] === 'Type') {
    errorMessages.push('Please select the type of car')
  }
  if (car['location'] === 'Location') {
    errorMessages.push('Please select the region of your car')
  }
  if (!file) {
    errorMessages.push('Upload a picture of your car')
  }
  if (!car['model'] && /[^a-zA-Z0-9]/g.test(car['model'])) {
    errorMessages.push('Specify the model of your car')
  }
  func(errorMessages, 'GET_CARFORM_ERROR')
  return errorMessages.length === 0
}
