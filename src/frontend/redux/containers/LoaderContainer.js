import { connect } from 'react-redux'
import Loader from '../../components/Items/LoaderCustom'

function mapStateToProps (state) {
  return {
    allCars: state.cars.allCars,
    filteredCars: state.cars.filteredCars,
    loader: state.item.loader
  }
}

export default connect(mapStateToProps)(Loader)
