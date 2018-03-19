function getErrors (error) {
  return {
    type: 'GET_ERROR_STATUS',
    payload: {
      fnError: error.fnError,
      lnError: error.lnError,
      emailError: error.emailError,
      passError: error.passError,
      phoneError: error.phoneError,
      genderError: error.genderError
    }
  }
}

function getSuccess () {
  return {
    type: 'GET_ERROR_STATUS',
    payload: {
      fnError: false,
      lnError: false,
      emailError: false,
      passError: false,
      phoneError: false,
      genderError: false
    }
  }
}
export function setErrors (error) {
  return (dispatch) => {
    dispatch(getErrors(error))
  }
}

export function setSuccess () {
  return (dispatch) => {
    dispatch(getSuccess())
  }
}
