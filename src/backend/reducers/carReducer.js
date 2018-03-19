export default function reducer (state = {}, action) {
  if (action.type === 'GET_CARS_TRUE') {
    return {...state, allCars: action.payload.allCars, filteredCars: action.payload.filteredCars}
  } else {
    return state
  }
}
