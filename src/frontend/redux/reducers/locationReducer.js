const initialState = {
	locations: []
}

export default function reducer(state = initialState, action) {
	if (action.type === 'GET_LOCATIONS') {
		return { ...state, locations: action.payload }
	} else {
		return state
	}
}
