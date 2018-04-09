import { getData, fetchFromDb } from './data'
import { compareData } from '../sort'

export function fetchLocations (data) {
  return async (dispatch) => {
    const locations = await fetchFromDb('locations')
    compareData(locations, 'name')
    const arr = []
    locations.forEach(e => {
      arr.push({key: e.name, text: e.name, value: e.name})
    })
    dispatch(getData('GET_LOCATIONS', arr))
  }
}
