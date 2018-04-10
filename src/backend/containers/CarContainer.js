import { connect } from 'react-redux'
import { fetchCars, updateLoader, updateList } from '../actions/carAction'
import SearchView from '../../frontend/components/Views/SearchView'

function mapStateToProps (state) {
  return {
    allCars: state.cars.allCars,
    filteredCars: state.cars.filteredCars,
    loader: state.item.loader
  }
}

function mapDispatchToProps (dispatch) {
  return ({
    async getCars () {
      await dispatch(fetchCars())
    },
    updateLoader (loader) {
      dispatch(updateLoader(loader))
    },
    updateCarList (filtered) {
      dispatch(updateList(filtered))
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchView)
