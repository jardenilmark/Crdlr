import { firestore } from '../../../backend/database'
import { getData } from '../../../backend/data'

export function setCurrentUser (name) {
  return (dispatch) => {
    dispatch(getData('GET_USER', name))
  }
}

export function getUser (uid, email) {
  return async (dispatch) => {
    const users = await getUserFromDB(uid, email)
    dispatch(getData('GET_USER_DB', users))
  }
}

async function getUserFromDB (uid, email) { // wont change this or else will query twice cause of email
  const user = await firestore.collection('users').doc(uid).get()
  const data = user.data()
  return {
    firstName: data.firstName,
    lastName: data.lastName,
    gender: data.gender,
    phone: data.phone,
    email: email,
    creditCard: data.creditCard,
    expiration: data.expirationDate
  }
}
