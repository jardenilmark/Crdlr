export default function reducer (state = {}, action) {
  if (action.type === 'GET_DATE') {
    return {
      ...state,
      date: action.payload.date,
      activeItem: action.payload.active
    }
  } else {
    return state
  }
}
