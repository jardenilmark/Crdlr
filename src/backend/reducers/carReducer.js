export default function reducer (state = {}, action) {
  if (action.type === 'GET_CARS_TRUE') {
    return {...state, allCars: action.payload.allCars}
  } else if (action.type === 'GET_FILTERED_TRUE') {
    return {...state, filteredCars: action.payload.filteredCars}
  } else if (action.type === 'GET_LOADER') {
    return {...state, loader: action.payload}
  } else {
    return state
  }
}
