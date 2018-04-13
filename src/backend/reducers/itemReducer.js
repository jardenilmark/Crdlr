import history from '../history'

const initialState = {
  activeItem: history.location.pathname.slice(1),
  progress: -1,
  tablePropertyArray: ['Brand', 'Location', 'Model', 'Price', 'Type', 'Interested', 'Sold'],
  peopleModals: [],
  loader: false,
  uploadStatus: 'done'
}

export default function reducer (state = initialState, action) {
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
  } else if (action.type === 'GET_LOADER') {
    return {...state, loader: action.payload}
  } else if (action.type === 'GET_UPLOAD_STATUS') {
    return {...state, uploadStatus: action.payload}
  } else if (action.type === 'GET_RECIEPT_INFO') {
    return {
      ...state,
      receiptName: `${action.payload.firstName} ${action.payload.lastName}`,
      receiptEmail: action.payload.email,
      receiptLocation: action.payload.location,
      totalPrice: action.payload.totalPrice,
      receiptCar: `${action.payload.brand} ${action.payload.carModel}`,
      transactionDate: action.payload.transactionDate
    }
  } else {
    return state
  }
}
