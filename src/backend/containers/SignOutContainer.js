import { connect } from 'react-redux'
import { logOutUser } from '../actions/logAction'
import SignOut from '../../frontend/components/UserInputs/SignOut'

function mapStateToProps (state) {
  return {}
}

function mapDispatchToProps (dispatch) {
  return ({
    logOutUser () {
      dispatch(logOutUser())
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(SignOut)
