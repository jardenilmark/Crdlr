export default function reducer (state = {}, action) {
  if (action.type === 'GET_IMAGE_FILE') {
    return {...state, file: action.payload}
  } else {
    return state
  }
}
