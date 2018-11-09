import { connect } from 'react-redux'
import { getCarsAdvertised } from '../actions/carAction'
import { setPeopleModals, setReceiptModals } from '../actions/itemAction'
import InventoryView from '../../frontend/components/Views/InventoryView'

const mapStateToProps = state => {
	return {
		cars: state.cars.advertisedCars,
		currentUser: state.user.currentUser
	}
}

function mapDispatchToProps(dispatch) {
	return {
		async getCarsAdvertised(uid) {
			await dispatch(getCarsAdvertised(uid))
		},
		setPeopleModals(modalArr) {
			dispatch(setPeopleModals(modalArr))
		},
		setReceiptModals(modalArr) {
			dispatch(setReceiptModals(modalArr))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(InventoryView)
