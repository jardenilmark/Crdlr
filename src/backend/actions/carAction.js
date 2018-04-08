import { getData, fetchFromDbDoc, fetchFromDb, fetchFromDbFilter } from './data'

async function fetchCarsConnected (uid) {
  const collection = await fetchFromDbFilter('cars', 'owner', uid, true)
  const toSend = []
  await Promise.all(
    collection.map(
      async e => {
        const peopleInterested = await fetchFromDbDoc('peopleInterested', e.peopleInterested)
        const obj = {
          Brand: e.brand,
          Location: e.location,
          Model: e.model,
          Price: e.price,
          Type: e.type,
          ImageId: e.image,
          Id: e.id,
          arrayId: e.peopleInterested,
          peopleInterested: peopleInterested.people,
          Sold: !e.available
        }
        toSend.push(obj)
      }
    )
  )
  return toSend
}

export function getCarsAdvertised (uid) {
  return async (dispatch) => {
    const arr = await fetchCarsConnected(uid)
    dispatch(getData('GET_CARS_OWNER', arr))
  }
}

export function fetchCars () {
  return async (dispatch) => {
    const arr = await fetchFromDbFilter('cars', 'available', true)
    dispatch(getData('GET_CARS', arr))
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
    dispatch(getData('GET_FILTERED', filtered))
  }
}
