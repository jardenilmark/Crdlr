export default function reducer (state = {}, action) {
  if (action.type === 'GET_ERROR_STATUS') {
    return {
      ...state,
      fnError: action.payload.fnError,
      lnError: action.payload.lnError,
      emailError: action.payload.emailError,
      passError: action.payload.passError,
      phoneError: action.payload.phoneError,
      genderError: action.payload.genderError
    }
  } else {
    return state
  }
}
