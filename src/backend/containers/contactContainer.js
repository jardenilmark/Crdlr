import { connect } from 'react-redux'
import { getUser } from '../actions/userAction'
import { setError, setSuccess } from '../actions/errorAction'
import Contact from '../../frontend/components/Views/ContactView'

const mapStateToProps = (state) => {
  return {
    user: state.user.userInfo,
    fnError: state.error.fnError,
    lnError: state.error.lnError,
    phoneError: state.error.phoneError,
    genderError: state.error.genderError
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

export default connect(mapStateToProps, mapDispatchToProps)(Contact)
