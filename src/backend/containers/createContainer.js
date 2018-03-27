import { connect } from 'react-redux'
import { fetchCarTypes, fetchCarBrands } from '../actions/carAction'
import CarCreate from '../../frontend/components/UserInput/CarCreate';

const mapStateToProps = (state) => {
  return {
    brands: state.cars.brands,
    types: state.cars.types
  }
}

function mapDispatchToProps (dispatch) {
  return ({
    fetchCarTypes () {
      dispatch(fetchCarTypes())
    },
    fetchCarBrands () {
      dispatch(fetchCarBrands())
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(CarCreate)
