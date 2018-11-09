import { getData, fetchFromDb } from '../data'
import { compareData } from '../sort'

export function fetchLocations(data) {
	return async dispatch => {
		const locations = await fetchFromDb('locations')
		compareData(locations, 'name')
		dispatch(
			getData('GET_LOCATIONS', locations.map(e => ({ key: e.name, text: e.name, value: e.name })))
		)
	}
}
