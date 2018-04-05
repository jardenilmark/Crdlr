import { setError } from '../backend/actions/errorAction'
import history from '../backend/history'
import Validator from '../frontend/validator'
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

export async function isError (owner, message) {
  try {
    const user = localStorage.getItem('user')
    if (user && JSON.parse(user).uid === owner) {
      const confirmation = swal('Error!', message, 'error')
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
