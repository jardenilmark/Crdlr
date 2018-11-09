import { connect } from 'react-redux'
import { logOutUser } from '../actions/logAction'
import SignedIn from '../../frontend/components/Views/SignedInView'

function mapStateToProps(state) {
	return {}
}

function mapDispatchToProps(dispatch) {
	return {
		logOutUser() {
			dispatch(logOutUser())
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SignedIn)
