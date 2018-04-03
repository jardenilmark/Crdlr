export default function reducer (state = {}, action) {
  if (action.type === 'GET_ITEM') {
    return {...state, activeItem: action.payload}
  } else if (action.type === 'GET_PROGRESS') {
    return {...state, progress: action.payload}
  } else if (action.type === 'SET_MODAL_ARR') {
    return {...state, itemModals: action.payload}
  } else if (action.type === 'SET_MODAL_VISIBILITY') {
    const newArr = [...state.itemModals]
    newArr[action.payload.num] = action.payload.visibility
    return {...state, itemModals: newArr}
  } else if (action.type === 'SET_PEOPLE_ARR') {
    return {...state, peopleModals: action.payload}
  } else if (action.type === 'SET_PEOPLE_VISIBILITY') {
    const newArr = [...state.peopleModals]
    newArr[action.payload.num] = action.payload.visibility
    return {...state, peopleModals: newArr}
  } else {
    return state
  }
}
