import { connect } from 'react-redux'
import { fetchCars, updateList, updateLoader } from '../actions/carAction'
import Search from '../../frontend/components/Search'

function mapStateToProps (state) {
  return {
    allCars: state.cars.allCars,
    filteredCars: state.cars.filteredCars,
    loader: state.cars.loader
  }
}

function mapDispatchToProps (dispatch) {
  return ({
    getCars () {
      dispatch(fetchCars())
    },
    updateCarList (arr, filtered) {
      dispatch(updateList(arr, filtered))
    },
    updateLoader (loader) {
      dispatch(updateLoader(loader))
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
