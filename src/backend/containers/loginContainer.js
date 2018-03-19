import { connect } from 'react-redux'
import { setLoginStatus } from '../actions/loginAction'
import Login from '../../frontend/components/UserInput/Login'

const mapStateToProps = (state) => {
  return {
    status: state.login.status
  }
}

function mapDispatchToProps (dispatch) {
  return ({
    setLoginStatus (status) {
      dispatch(setLoginStatus(status))
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
