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

export function setItemModals (modalArr) {
  return (dispatch) => {
    dispatch(getData('SET_MODAL_ARR', modalArr))
  }
}

export function setItemModalVisibility (num, visibility) {
  return (dispatch) => {
    dispatch(getData('SET_MODAL_VISIBILITY', {num: num, visibility:visibility}))
  }
}

export function setPeopleModals (modalArr) {
  return (dispatch) => {
    dispatch(getData('SET_PEOPLE_ARR', modalArr))
  }
}

export function setPeopleModalVisibility (num, visibility) {
  return (dispatch) => {
    dispatch(getData('SET_PEOPLE_VISIBILITY', {num: num, visibility:visibility}))
  }
}
