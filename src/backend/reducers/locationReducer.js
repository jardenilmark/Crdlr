export default function reducer (state = {}, action) {
  if (action.type === 'GET_LOCATIONS') {
    return {...state, locations: action.payload}
  } else {
    return state
  }
}
