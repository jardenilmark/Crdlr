export default function reducer (state = {}, action) {
  if (action.type === 'GET_DATE') {
    return {
      ...state,
      dateStart: action.payload.dateStart,
      dateEnd: action.payload.dateEnd,
      activeItem: action.payload.active
    }
  } else {
    return state
  }
}