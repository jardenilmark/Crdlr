import { connect } from 'react-redux'
import { loginUser } from '../actions/logAction'
import { setCurrentUser } from '../actions/userAction'
import Login from '../../frontend/components/UserInputs/Login'

const mapStateToProps = (state) => {
  return {
    status: state.login.status
  }
}

function mapDispatchToProps (dispatch) {
  return ({
    loginUser (email, pass) {
      dispatch(loginUser(email, pass))
    },
    setCurrentUser (user) {
      dispatch(setCurrentUser(user))
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
