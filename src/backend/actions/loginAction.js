import { getData } from './data'

export function setLoginStatus (success) {
  return (dispatch) => {
    dispatch(getData('GET_LOGIN_STATUS', success))
  }
}
