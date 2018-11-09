import { connect } from 'react-redux'
import { updateList } from '../actions/carAction'
import Dropdown from '../../frontend/components/Items/DropdownCustom'

function mapStateToProps(state) {
	return {
		allCars: state.cars.allCars
	}
}

function mapDispatchToProps(dispatch) {
	return {
		updateCarList(filtered) {
			dispatch(updateList(filtered))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Dropdown)
