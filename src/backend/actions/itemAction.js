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

export function setPeopleModals (modalArr) {
  return (dispatch) => {
    dispatch(getData('SET_PEOPLE_ARR', modalArr))
  }
}

export function setPeopleModalVisibility (num, visibility) {
  return (dispatch) => {
    dispatch(getData('SET_PEOPLE_VISIBILITY', {num: num, visibility: visibility}))
  }
}

export function setUploadStatus (status) {
  return (dispatch) => {
    dispatch(getData('GET_UPLOAD_STATUS', status))
  }
}

export function setReceipt (obj) {
  return (dispatch) => {
    dispatch(getData('GET_RECIEPT_INFO', obj))
  }
}
