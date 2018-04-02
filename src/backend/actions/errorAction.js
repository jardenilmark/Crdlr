import { getData } from './data'

export function setError (error, type) {
  return (dispatch) => {
    dispatch(getData(type, error))
  }
}

export function setSuccess () {
  return (dispatch) => {
    dispatch(getData('GET_SUCCESS'))
  }
}