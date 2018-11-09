import { connect } from 'react-redux'
import TitleBar from '../../frontend/components/Bars/TitleBar'

function mapStateToProps(state) {
	return {
		activeItem: state.item.activeItem,
		currentUser: state.user.currentUser
	}
}

export default connect(mapStateToProps)(TitleBar)
