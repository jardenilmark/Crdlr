function getActiveItem (name) {
  return {
    type: 'GET_ITEM',
    payload: name
  }
}

export function setActiveItem (name) {
  return (dispatch) => {
    dispatch(getActiveItem(name))
  }
}
