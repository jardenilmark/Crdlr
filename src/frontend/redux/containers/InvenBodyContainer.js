import { connect } from 'react-redux'
import { getCarsAdvertised } from '../actions/carAction'
import InventoryBody from '../../components/Items/InventoryBody'

function mapStateToProps (state) {
  return {
    cars: state.cars.advertisedCars,
    peopleModals: state.item.peopleModals,
    propertyArray: state.item.tablePropertyArray,
    receiptModals: state.item.receiptModals,
    currentUser: state.user.currentUser
  }
}

function mapDispatchToProps (dispatch) {
  return ({
    async getCarsAdvertised (uid) {
      await dispatch(getCarsAdvertised(uid))
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(InventoryBody)
