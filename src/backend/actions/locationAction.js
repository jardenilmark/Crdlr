import { getData, fetchFromDb } from './data'

export function fetchLocations (data) {
  return async (dispatch) => {
    const brands = await fetchFromDb('locations')
    const arr = []
    brands.forEach(e => {
      arr.push({key: e.name.substring(0, 3), text: e.name, value: e.name})
    })
    dispatch(getData('GET_LOCATIONS', arr))
  }
}
