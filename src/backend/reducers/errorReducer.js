export default function reducer (state = {}, action) {
  if (action.type === 'GET_ERROR_EMAIL') {
    return {...state, emailError: action.payload}
  } else if (action.type === 'GET_ERROR_FIRSTNAME') {
    return {...state, fnError: action.payload}
  } else if (action.type === 'GET_ERROR_LASTNAME') {
    return {...state, lnError: action.payload}
  } else if (action.type === 'GET_ERROR_PASS') {
    return {...state, passError: action.payload}
  } else if (action.type === 'GET_ERROR_PHONE') {
    return {...state, phoneError: action.payload}
  } else if (action.type === 'GET_ERROR_GENDER') {
    return {...state, genderError: action.payload}
  } else if (action.type === 'GET_ERROR_CREDITCARD') {
    return {...state, creditCardError: action.payload}
  } else if (action.type === 'GET_ERROR_ADDRESS') {
    return {...state, addressError: action.payload}
  } else if (action.type === 'GET_SUCCESS') {
    return {...state,
      emailError: false,
      fnError: false,
      lnError: false,
      passError: false,
      phoneError: false,
      genderError: false,
      creditCardError: false,
      addressError: false
    }
  } else {
    return state
  }
}
