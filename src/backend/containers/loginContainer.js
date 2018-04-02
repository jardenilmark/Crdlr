import { connect } from 'react-redux'
import { setLoginStatus } from '../actions/loginAction'
import { setCurrentUser } from '../actions/userAction'
import Login from '../../frontend/components/UserInputs/Login'

const mapStateToProps = (state) => {
  return {
    status: state.login.status
  }
}

function mapDispatchToProps (dispatch) {
  return ({
    setLoginStatus (status) {
      dispatch(setLoginStatus(status))
    },
    setCurrentUser (user) {
      dispatch(setCurrentUser(user))
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
