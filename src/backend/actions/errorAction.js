function getErrors (error) {
  return {
    type: 'GET_ERROR',
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

export function setErrors (error) {
  return (dispatch) => {
    dispatch(getErrors(error))
  }
}
