import { connect } from 'react-redux'
import App from '../../frontend/components/App'
import { setActiveItem } from '../actions/activeItemAction'
import { setCurrentUser } from '../actions/userAction'

function mapStateToProps (state) {
  return {
    activeItem: state.activeItem.activeItem,
    currentUser: state.user.currentUser
  }
}

function mapDispatchToProps (dispatch) {
  return ({
    setItemName (type) {
      dispatch(setActiveItem(type))
    },
    setCurrentUser (user) {
      dispatch(setCurrentUser(user))
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
