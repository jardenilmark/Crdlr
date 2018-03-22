import { connect } from 'react-redux'
import SignUp from '../../frontend/components/UserInput/SignUp'
import { setError, setSuccess } from '../actions/errorAction'

function mapStateToProps (state) {
  return {
    fnError: state.error.fnError,
    lnError: state.error.lnError,
    emailError: state.error.emailError,
    passError: state.error.passError,
    phoneError: state.error.phoneError,
    genderError: state.error.genderError,
    success: state.error.success
  }
}

function mapDispatchToProps (dispatch) {
  return ({
    setError (error, type) {
      dispatch(setError(error, type))
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
