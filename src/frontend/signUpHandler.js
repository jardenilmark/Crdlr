import { getDocumentValues } from './documentHandler'
import { setDocument } from '../backend/data'
import swal from 'sweetalert'
import Validator from './validator'
import history from '../backend/history'
import { auth } from '../backend/database'

function addAction (props) {
  const { setCurrentUser } = props
  localStorage.setItem('user',
    JSON.stringify({uid: auth.currentUser.uid, email: auth.currentUser.email})) // stringified since it will return [Object: object] when refreshed
  setCurrentUser(auth.currentUser)
  history.push('/')
}

export async function addUser (props) {
  const { setError } = props
  const email = document.getElementById('email').value
  const pass = document.getElementById('pass').value
  const userArr = ['firstName', 'lastName', 'gender', 'phone', 'creditCard']
  const user = getDocumentValues(userArr)
  const validator = new Validator()
  const toCheck = {...user, email: email, pass: pass}
  let isAllValid = true
  for (const key in toCheck) {
    if (!validator.isValid(key, toCheck[key])) {
      isAllValid = false
    }
  }
  if (!document.getElementById('expirationDate').value) {
    isAllValid = false
    setError(true, 'GET_ERROR_EXPIRATIONDATE')
  } else {
    setError(false, 'GET_ERROR_EXPIRATIONDATE')
  }
  if (isAllValid) {
    try {
      const create = await auth.createUserWithEmailAndPassword(email, pass)
      const id = create.uid
      user['isAdmin'] = false
      user['expirationDate'] = document.getElementById('expirationDate').value
      setDocument('users', id, user)
      const confirmation = swal('Success!', 'Sign Up Complete', 'success')
      if (await confirmation) {
        addAction(props)
      } else { // incase the user uses escape
        addAction(props)
      }
    } catch (e) {
      setError(true, 'GET_ERROR_EMAIL')
    }
  } else {
    swal('Error!', 'Sign Up Error', 'error')
  }
}
