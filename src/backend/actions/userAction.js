import { firestore } from '../database'

function getUser (name) {
  return {
    type: 'GET_USER',
    payload: name
  }
}

export function setCurrentUser (name) {
  return (dispatch) => {
    dispatch(getUser(name))
  }
}

export function getUsers (uid, email) {
  return async (dispatch) => {
    const users = await getUserFromDB(uid, email)
    dispatch(users)
  }
}

async function getUserFromDB (uid, email) {
  const user = await firestore.collection('users').doc(uid).get()
  const data = user.data()
  return {
    type: 'GET_USER_DB',
    payload: {
      firstName: data.firstName,
      lastName: data.lastName,
      gender: data.gender,
      phone: data.phone,
      email: email
    }
  }
}
