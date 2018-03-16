export default function reducer (state = {}, action) {
  if (action.type === 'GET_USER') {
    return {...state, currentUser: action.payload}
  } else {
    return state
  }
}
