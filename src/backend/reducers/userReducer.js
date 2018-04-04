const initialeState = {
  currentUser: localStorage.getItem('user')
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
