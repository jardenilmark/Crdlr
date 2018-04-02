import { getData } from './data'

export function setActiveItem (name) {
  return (dispatch) => {
    dispatch(getData('GET_ITEM', name))
  }
}

export function setProgressBar (progress) {
  return (dispatch) => {
    dispatch(getData('GET_PROGRESS', progress))
  }
}
