const initialState = {
  brands: [],
  types: [],
  filteredCars: [],
  allCars: [],
  advertisedCars: []
}

export default function reducer (state = initialState, action) {
  if (action.type === 'GET_CARS') {
    return {...state, allCars: action.payload}
  } else if (action.type === 'GET_FILTERED') {
    return {...state, filteredCars: action.payload}
  } else if (action.type === 'GET_CAR_BRANDS') {
    return {...state, brands: action.payload}
  } else if (action.type === 'GET_CAR_TYPES') {
    return {...state, types: action.payload}
  } else if (action.type === 'GET_CARS_OWNER') {
    return {...state, advertisedCars: action.payload}
  } else {
    return state
  }
}
