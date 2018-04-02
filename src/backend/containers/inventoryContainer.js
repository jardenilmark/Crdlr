import { connect } from 'react-redux'
import { getCarsAdvertised } from '../actions/carAction'
import Inventory from '../../frontend/components/Views/Inventory';

const mapStateToProps = (state) => {
  return {
    cars: state.cars.advertisedCars
  }
}

function mapDispatchToProps (dispatch) {
  return ({
    getCarsAdvertised (uid) {
      dispatch(getCarsAdvertised(uid))
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Inventory)
