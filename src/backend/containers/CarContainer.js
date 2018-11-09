import { connect } from 'react-redux'
import { fetchCars, updateList } from '../actions/carAction'
import SearchView from '../../frontend/components/Views/SearchView'

function mapStateToProps (state) {
  return {
    allCars: state.cars.allCars,
    filteredCars: state.cars.filteredCars,
    loader: state.item.loader,
    currentUser: state.user.currentUser
  }
}

function mapDispatchToProps (dispatch) {
  return ({
    async getCars (uid) {
      await dispatch(fetchCars(uid))
    },
    updateCarList (filtered) {
      dispatch(updateList(filtered))
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchView)
