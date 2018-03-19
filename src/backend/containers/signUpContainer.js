import { connect } from 'react-redux'
import SignUp from '../../frontend/components/UserInput/SignUp'
import { setErrors, setSuccess } from '../actions/errorAction'

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
    setErrors (error) {
      dispatch(setErrors(error))
    },
    signUpDone () {
      dispatch(setSuccess())
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
