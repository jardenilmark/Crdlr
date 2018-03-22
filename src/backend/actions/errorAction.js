function getErrors (error, type) {
  return {
    type: type,
    payload: error
  }
}

export function setError (error, type) {
  return (dispatch) => {
    dispatch(getErrors(error, type))
  }
}
