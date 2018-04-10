import { connect } from 'react-redux'
import Loader from '../../frontend/components/Items/LoaderCustom'

function mapStateToProps (state) {
  return {
    allCars: state.cars.allCars,
    filteredCars: state.cars.filteredCars,
    loader: state.cars.loader
  }
}

export default connect(mapStateToProps)(Loader)
