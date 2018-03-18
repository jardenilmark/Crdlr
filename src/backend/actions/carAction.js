import { firestore } from '../database'

function getCars (cars, filtered) {
  return {
    type: 'GET_CARS_TRUE',
    payload: {
      allCars: cars,
      filteredCars: filtered
    }
  }
}

function getSelectedCar (car) {
  return {
    type: 'GET_SELECTEDCAR_TRUE',
    payload: car
  }
}

async function getFromDb () {
  const cars = await firestore.collection('cars').get()
  const arr = []
  cars.forEach(e => {
    arr.push(e.data())
  })
  return arr
}

export function setSelectedCar (car) {
  return (dispatch) => {
    dispatch(getSelectedCar(car))
  }
}
export function fetchCars () {
  return async (dispatch) => {
    const arr = await getFromDb()
    dispatch(getCars(arr, arr))
  }
}

export function updateList (arr, filtered) {
  return (dispatch) => {
    dispatch(getCars(arr, filtered))
  }
}
