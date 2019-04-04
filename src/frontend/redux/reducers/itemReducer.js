import history from '../history'

const initialState = {
  activeItem: history.location.pathname.slice(1),
  progress: -1,
  tablePropertyArray: ['Brand', 'Location', 'Model', 'Price', 'Type', 'Interested', 'Sold'],
  peopleModals: [],
  receiptModals: [],
  buyerReceiptModal: false,
  loader: false,
  uploadStatus: 'done'
}

export default function reducer (state = initialState, action) {
  if (action.type === 'GET_ITEM') {
    return {...state, activeItem: action.payload}
  } else if (action.type === 'GET_PROGRESS') {
    return {...state, progress: action.payload}
  } else if (action.type === 'SET_PEOPLE_ARR') {
    return {...state, peopleModals: action.payload}
  } else if (action.type === 'SET_PEOPLE_VISIBILITY') {
    const newArr = [...state.peopleModals]
    newArr[action.payload.num].visibility = action.payload.visibility
    return {...state, peopleModals: newArr}
  } else if (action.type === 'SET_RECEIPT_ARR') {
    return {...state, receiptModals: action.payload}
  } else if (action.type === 'SET_RECEIPT_VISIBILITY') {
    const newArr = [...state.receiptModals]
    newArr[action.payload.num].visibility = action.payload.visibility
    return {...state, receiptModals: newArr}
  } else if (action.type === 'GET_LOADER') {
    return {...state, loader: action.payload}
  } else if (action.type === 'GET_UPLOAD_STATUS') {
    return {...state, uploadStatus: action.payload}
  } else if (action.type === 'GET_RECIEPT_INFO') {
    return {
      ...state,
      receiptLocation: action.payload.location,
      totalPrice: action.payload.totalPrice,
      receiptCar: action.payload.car,
      transactionDate: action.payload.transactionDate
    }
  } else if (action.type === 'SET_RECEIPT_BUYER_VISIBILITY') {
    return {...state, buyerReceiptModal: action.payload}
  } else {
    return state
  }
}
