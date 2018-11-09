export default function reducer(state = {}, action) {
	if (action.type === 'GET_LOGIN_STATUS') {
		return { ...state, status: action.payload }
	} else {
		return state
	}
}
