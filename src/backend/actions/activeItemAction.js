function getActiveItem (name) {
  return {
    type: 'GET_ITEM',
    payload: name
  }
}

export function fetchActiveItem (name) {
  return (dispatch) => {
    dispatch(getActiveItem(name))
  }
}
