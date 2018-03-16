function getUser (name) {
  return {
    type: 'GET_USER',
    payload: name
  }
}

export function setCurrentUser (name) {
  return (dispatch) => {
    dispatch(getUser(name))
  }
}
