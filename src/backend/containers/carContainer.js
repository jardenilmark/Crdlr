import { connect } from 'react-redux'
import { fetchCars, updateList, updateLoader } from '../actions/carAction'
import Search from '../../frontend/components/Views/Search'

function mapStateToProps (state) {
  return {
    allCars: state.cars.allCars,
    filteredCars: state.cars.filteredCars,
    loader: state.cars.loader
  }
}

function mapDispatchToProps (dispatch) {
  return ({
    async getCars () {
      await dispatch(fetchCars())
    },
    updateCarList (filtered) {
      dispatch(updateList(filtered))
    },
    updateLoader (loader) {
      dispatch(updateLoader(loader))
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
