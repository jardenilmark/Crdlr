export default function reducer (state = {}, action) {
  if (action.type === 'GET_USER') {
    return {...state, currentUser: action.payload}
  } else if (action.type === 'GET_USER_DB') {
    return {...state,
      firstName: action.payload.firstName,
      lastName: action.payload.lastName,
      gender: action.payload.gender,
      phone: action.payload.phone,
      email: action.payload.email}
  } else {
    return state
  }
}
