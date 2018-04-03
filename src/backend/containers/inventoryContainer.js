import { connect } from 'react-redux'
import { getCarsAdvertised } from '../actions/carAction'
import { setPeopleModals, setPeopleModalVisibility } from '../actions/itemAction'
import Inventory from '../../frontend/components/Views/Inventory';

const mapStateToProps = (state) => {
  return {
    cars: state.cars.advertisedCars,
    peopleModals: state.item.peopleModals
  }
}

function mapDispatchToProps (dispatch) {
  return ({
    async getCarsAdvertised (uid) {
      await dispatch(getCarsAdvertised(uid))
    },
    setPeopleModals (modalArr) {
      dispatch(setPeopleModals(modalArr))
    },
    setPeopleModalVisibility (num, visbility) {
      dispatch(setPeopleModalVisibility(num, visbility))
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Inventory)
