import { connect } from 'react-redux'
import App from '../../frontend/components/Views/App'
import { setActiveItem } from '../actions/itemAction'
import { setCurrentUser } from '../actions/userAction'

function mapStateToProps (state) {
  return {
    activeItem: state.item.activeItem
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
