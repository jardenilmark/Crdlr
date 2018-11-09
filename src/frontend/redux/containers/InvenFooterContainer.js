import { connect } from 'react-redux'
import InventoryFooter from '../../frontend/components/Items/InventoryFooter'

function mapStateToProps(state) {
	return {
		cars: state.cars.advertisedCars,
		propertyArray: state.item.tablePropertyArray,
		currentUser: state.user.currentUser
	}
}

export default connect(mapStateToProps)(InventoryFooter)
