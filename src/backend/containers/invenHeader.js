import { connect } from 'react-redux'
import InventoryHeader from '../../frontend/components/Items/InventoryHeader'

function mapStateToProps (state) {
  return {
    cars: state.cars.advertisedCars
  }
}

export default connect(mapStateToProps)(InventoryHeader)
