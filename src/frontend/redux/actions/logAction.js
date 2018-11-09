import { getData } from '../data'
import { auth } from '../database'

export function loginUser(email, pass) {
	return async dispatch => {
		const user = await auth.signInWithEmailAndPassword(email, pass).catch(() => 'error')
		if (user !== 'error') {
			dispatch(getData('GET_LOGIN_STATUS', 'success'))
			localStorage.setItem(
				'user',
				JSON.stringify({ uid: auth.currentUser.uid, email: auth.currentUser.email })
			)
			dispatch(getData('GET_USER', JSON.stringify(auth.currentUser)))
		} else {
			dispatch(getData('GET_LOGIN_STATUS', 'failed'))
		}
	}
}

export function logOutUser() {
	return async dispatch => {
		await auth.signOut()
		localStorage.clear()
		dispatch(getData('GET_USER', ''))
		dispatch(getData('SET_PEOPLE_ARR', []))
	}
}
