function getLoginStatus (success) {
  return {
    type: 'GET_LOGIN_STATUS',
    payload: success
  }
}

export function setLoginStatus (success) {
  return (dispatch) => {
    dispatch(getLoginStatus(success))
  }
}
