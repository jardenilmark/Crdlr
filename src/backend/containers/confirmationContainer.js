import { connect } from 'react-redux'
import { getUsers } from '../actions/userAction'
import { setError, setSuccess } from '../actions/errorAction'
import Confirmation from '../../frontend/components/Views/Confirmation'

const mapStateToProps = (state) => {
  return {
    user: state.user.userInfo,
    fnError: state.error.fnError,
    lnError: state.error.lnError,
    emailError: state.error.emailError,
    passError: state.error.passError,
    phoneError: state.error.phoneError,
    genderError: state.error.genderError,
    creditCardError: state.error.creditCardError,
    addressError: state.error.addressError
  }
}

function mapDispatchToProps (dispatch) {
  return ({
    async getUsers (uid, email) {
      await dispatch(getUsers(uid, email))
    },
    setError (error, type) {
      dispatch(setError(error, type))
    },
    setSuccess () {
      dispatch(setSuccess())
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation)
