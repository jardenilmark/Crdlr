import { getData, fetchFromDb } from '../../../backend/data'
import { compareData } from '../../helpers/sort'

export function fetchLocations (data) {
  return async (dispatch) => {
    const locations = await fetchFromDb('locations')
    compareData(locations, 'name')
    dispatch(getData('GET_LOCATIONS', locations.map(e => ({key: e.name, text: e.name, value: e.name}))))
  }
}
