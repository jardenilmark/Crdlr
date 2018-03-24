function getErrors (error, type) {
  return {
    type: type,
    payload: error
  }
}

function getSuccess (type) {
  return {
    type: type,
    payload: {
      emailError: false,
      fnError: false,
      lnError: false,
      passError: false,
      phoneError: false,
      genderError: false,
      creditCardError: false,
      addressError: false
    }
  }
}

export function setError (error, type) {
  return (dispatch) => {
    dispatch(getErrors(error, type))
  }
}

export function setSuccess () {
  return (dispatch) => {
    dispatch(getSuccess('GET_SUCCESS'))
  }
}