import { connect } from 'react-redux'
import Body from '../../frontend/components/Views/Body'
import { setActiveItem } from '../actions/itemAction'

function mapStateToProps(state) {
	return {}
}

function mapDispatchToProps(dispatch) {
	return {
		setItemName(type) {
			dispatch(setActiveItem(type))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Body)
