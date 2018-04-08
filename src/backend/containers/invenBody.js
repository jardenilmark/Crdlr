import { connect } from 'react-redux'
import InventoryBody from '../../frontend/components/Items/InventoryBody'

function mapStateToProps (state) {
  return {
    cars: state.cars.advertisedCars,
    peopleModals: state.item.peopleModals
  }
}

export default connect(mapStateToProps)(InventoryBody)
