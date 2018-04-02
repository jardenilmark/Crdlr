import { connect } from 'react-redux'
import { fetchCarTypes, fetchCarBrands } from '../actions/carAction'
import { setImageFile } from '../actions/imgAction'
import { setProgressBar } from '../actions/itemAction'
import { fetchLocations } from '../actions/locationAction'
import CarCreate from '../../frontend/components/UserInputs/CarCreate';

const mapStateToProps = (state) => {
  return {
    brands: state.cars.brands,
    types: state.cars.types,
    locations: state.location.locations,
    file: state.img.file,
    progress: state.item.progress
  }
}

function mapDispatchToProps (dispatch) {
  return ({
    fetchCarTypes () {
      dispatch(fetchCarTypes())
    },
    fetchLocations () {
      dispatch(fetchLocations())
    },
    fetchCarBrands () {
      dispatch(fetchCarBrands())
    },
    setImageFile (file) {
      dispatch(setImageFile(file))
    },
    setProgressBar (progress) {
      dispatch(setProgressBar(progress))
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(CarCreate)
