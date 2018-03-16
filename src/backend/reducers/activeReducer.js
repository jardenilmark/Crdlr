export default function reducer (state = {}, action) {
  if (action.type === 'GET_ITEM') {
    return {...state, activeItem: action.payload}
  } else {
    return state
  }
}
