import { connect } from 'react-redux'
import { getCarsAdvertised } from '../actions/carAction'
import { setPeopleModals } from '../actions/itemAction'
import Inventory from '../../frontend/components/Views/Inventory';

const mapStateToProps = (state) => {
  return {
    cars: state.cars.advertisedCars
  }
}

function mapDispatchToProps (dispatch) {
  return ({
    async getCarsAdvertised (uid) {
      await dispatch(getCarsAdvertised(uid))
    },
    setPeopleModals (modalArr) {
      dispatch(setPeopleModals(modalArr))
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Inventory)
