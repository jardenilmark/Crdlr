import { connect } from 'react-redux'
import SignedIn from '../../frontend/components/Views/SignedInView'
import { setCurrentUser } from '../actions/userAction'
function mapStateToProps (state) {
  return {
    activeItem: state.item.activeItem
  }
}

function mapDispatchToProps (dispatch) {
  return ({
    setCurrentUser (user) {
      dispatch(setCurrentUser(user))
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(SignedIn)
