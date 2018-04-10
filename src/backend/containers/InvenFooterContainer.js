import { connect } from 'react-redux'
import InventoryFooter from '../../frontend/components/Items/InventoryFooter'

function mapStateToProps (state) {
  return {
    cars: state.cars.advertisedCars,
    propertyArray: state.item.tablePropertyArray
  }
}

export default connect(mapStateToProps)(InventoryFooter)
