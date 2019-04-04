import { connect } from 'react-redux'
import SignUp from '../../components/UserInputs/SignUp'
import { setError, setSuccess } from '../actions/errorAction'
import { setCurrentUser } from '../actions/userAction'

function mapStateToProps (state) {
  return {
    fnError: state.error.fnError,
    lnError: state.error.lnError,
    emailError: state.error.emailError,
    passError: state.error.passError,
    phoneError: state.error.phoneError,
    genderError: state.error.genderError,
    genderOptions: state.user.genderOptions,
    creditCardError: state.error.creditCardError,
    expirationDateError: state.error.expirationDateError
  }
}

function mapDispatchToProps (dispatch) {
  return ({
    setError (error, type) {
      dispatch(setError(error, type))
    },
    setSuccess () {
      dispatch(setSuccess())
    },
    setCurrentUser (user) {
      dispatch(setCurrentUser(user))
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
