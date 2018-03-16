import { connect } from 'react-redux'
import App from '../../frontend/components/App'
import { fetchActiveItem } from '../actions/activeItemFetch'

function mapStateToProps (state) {
  return { activeItem: state.activeItem.activeItem }
}

function mapDispatchToProps (dispatch) {
  return ({
    getItemName (type) {
      dispatch(fetchActiveItem(type))
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
