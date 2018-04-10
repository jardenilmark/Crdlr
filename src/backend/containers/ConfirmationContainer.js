import { connect } from 'react-redux'
import { getUser } from '../actions/userAction'
import { setError, setSuccess } from '../actions/errorAction'
import ConfirmationView from '../../frontend/components/Views/ConfirmationView'

const mapStateToProps = (state) => {
  return {
    user: state.user.userInfo,
    fnError: state.error.fnError,
    lnError: state.error.lnError,
    emailError: state.error.emailError,
    phoneError: state.error.phoneError,
    genderError: state.error.genderError,
    creditCardError: state.error.creditCardError,
    addressError: state.error.addressError,
    genderOptions: state.user.genderOptions
  }
}

function mapDispatchToProps (dispatch) {
  return ({
    async getUser (uid, email) {
      await dispatch(getUser(uid, email))
    },
    setError (error, type) {
      dispatch(setError(error, type))
    },
    setSuccess () {
      dispatch(setSuccess())
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmationView)
