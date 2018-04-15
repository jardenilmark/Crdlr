import { connect } from 'react-redux'
import { fetchCarTypes, fetchCarBrands } from '../actions/carAction'
import { setImageFile } from '../actions/imgAction'
import { setProgressBar, setUploadStatus } from '../actions/itemAction'
import { fetchLocations } from '../actions/locationAction'
import { setError } from '../actions/errorAction'
import CarCreate from '../../frontend/components/UserInputs/CarCreate'

const mapStateToProps = (state) => {
  return {
    brands: state.cars.brands,
    types: state.cars.types,
    locations: state.location.locations,
    file: state.img.file,
    progress: state.item.progress,
    uploadStatus: state.item.uploadStatus,
    carFormErrors: state.error.carFormErrors,
    currentUser: state.user.currentUser
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
    },
    setUploadStatus (status) {
      dispatch(setUploadStatus(status))
    },
    setError (name, error) {
      dispatch(setError(name, error))
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(CarCreate)
