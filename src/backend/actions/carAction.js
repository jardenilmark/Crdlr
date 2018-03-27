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
function getData (type, data) {
  return {
    type: type,
    payload: data
  }
}

async function fetchFromDb (name) {
  const collection = await firestore.collection(name).get()
  const arr = []
  collection.forEach(e => {
    arr.push(e.data())
  })
  return arr
}

async function fetchAvailCars () {
  const collection = await firestore.collection('cars').where('available', '==', true).get()
  const arr = []
  collection.forEach(e => {
    arr.push(e.data())
  })
  return arr
}

export function fetchCars () {
  return async (dispatch) => {
    const arr = await fetchAvailCars()
    dispatch(getCars(arr))
  }
}

export function fetchCarTypes () {
  return async (dispatch) => {
    const brands = await fetchFromDb('carTypes')
    const arr = []
    brands.forEach(e => {
      arr.push({key: e.type.substring(0, 3), text: e.type, value: e.type})
    })
    dispatch(getData('GET_CAR_TYPES', arr))
  }
}

export function fetchCarBrands () {
  return async (dispatch) => {
    const brands = await fetchFromDb('carBrands')
    const arr = []
    brands.forEach(e => {
      arr.push({key: e.brand.substring(0, 3), text: e.brand, value: e.brand})
    })
    dispatch(getData('GET_CAR_BRANDS', arr))
  }
}
export function updateLoader (loader) {
  return (dispatch) => {
    dispatch(getData('GET_LOADER', loader))
  }
}

export function updateList (filtered) {
  return (dispatch) => {
    dispatch(getFilteredCars(filtered))
  }
}
