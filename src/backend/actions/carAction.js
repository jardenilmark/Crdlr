import { firestore } from '../database'

function getCars (cars) {
  return {
    type: 'GET_CARS_TRUE',
    payload: {
      allCars: cars
    }
  }
}

function getFilteredCars (filtered) {
  return {
    type: 'GET_FILTERED_TRUE',
    payload: {
      filteredCars: filtered
    }
  }
}
function getLoader (loader) {
  return {
    type: 'GET_LOADER',
    payload: loader
  }
}

async function getFromDb (collection) {
  const cars = await firestore.collection(collection).get()
  const arr = []
  cars.forEach(e => {
    arr.push(e.data())
  })
  return arr
}

export function fetchCars () {
  return async (dispatch) => {
    const arr = await getFromDb('cars')
    dispatch(getCars(arr))
  }
}

export function updateLoader (loader) {
  return (dispatch) => {
    dispatch(getLoader(loader))
  }
}

export function updateList (filtered) {
  return (dispatch) => {
    dispatch(getFilteredCars(filtered))
  }
}
