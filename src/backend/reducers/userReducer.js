const initialeState = {
  currentUser: localStorage.getItem('user'),
  genderOptions: [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' }
  ]
}

export default function reducer (state = initialeState, action) {
  if (action.type === 'GET_USER') {
    return {...state, currentUser: action.payload}
  } else if (action.type === 'GET_USER_DB') {
    return {...state, userInfo: action.payload}
  } else {
    return state
  }
}
