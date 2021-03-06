import { getData, fetchFromDbDoc, fetchFromDb, fetchFromDbFilter } from '../../../backend/data'
import { compareData } from '../../helpers/sort'
import { getNum } from '../../helpers/documentHandler'

async function fetchCarsConnected (uid) {
  const collection = await fetchFromDbFilter('cars', 'owner', uid)
  const toSend = []
  await Promise.all(
    collection.map(
      async e => {
        const contacts = await fetchFromDbDoc('contacts', e.peopleInterested)
        const car = await fetchFromDbFilter('cars', 'imageId', e.imageId)
        const obj = {
          brand: car[0].brand,
          location: car[0].location,
          model: car[0].model,
          price: getNum(JSON.parse(car[0].price)),
          type: car[0].type,
          imageId: e.imageId,
          arrayId: e.peopleInterested,
          peopleInterested: contacts.people,
          sold: !e.available
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
    compareData(arr, 'brand')
    dispatch(getData('GET_CARS_OWNER', arr))
  }
}

export function fetchCars (uid) {
  return async (dispatch) => {
    const arr = await fetchFromDbFilter('cars', 'available', true)
    let filteredArr = arr
    if (uid) {
      filteredArr = arr.filter(e => e.owner !== uid)
    }
    compareData(filteredArr, 'brand')
    dispatch(getData('GET_CARS', filteredArr))
  }
}

export function fetchCarTypes () {
  return async (dispatch) => {
    const types = await fetchFromDb('carTypes')
    compareData(types, 'type')
    dispatch(getData('GET_LOADER', true))
    dispatch(getData('GET_CAR_TYPES', types.map(e => ({key: e.type, text: e.type, value: e.type}))))
  }
}

export function fetchCarBrands () {
  return async (dispatch) => {
    const brands = await fetchFromDb('carBrands')
    compareData(brands, 'brand')
    dispatch(getData('GET_CAR_BRANDS', brands.map(e => ({key: e.brand, text: e.brand, value: e.brand}))))
  }
}

export function updateList (filtered) {
  return (dispatch) => {
    dispatch(getData('GET_FILTERED', filtered))
  }
}
