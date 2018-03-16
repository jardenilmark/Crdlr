import { connect } from 'react-redux'
import { fetchCars, updateList } from '../actions/carAction'
import Search from '../../frontend/components/Search'

function mapStateToProps (state) {
  return {
    allCars: state.cars.allCars,
    filteredCars: state.cars.filteredCars
  }
}

function mapDispatchToProps (dispatch) {
  return ({
    getCars () {
      dispatch(fetchCars())
    },
    updateCarList (arr, filtered) {
      dispatch(updateList(arr, filtered))
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
