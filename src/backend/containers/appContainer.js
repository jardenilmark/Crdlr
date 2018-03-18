import { connect } from 'react-redux'
import App from '../../frontend/components/App'
import { setActiveItem } from '../actions/activeItemAction'
import { setCurrentUser } from '../actions/userAction'
import { setSelectedCar } from '../actions/carAction'

function mapStateToProps (state) {
  return {
    activeItem: state.activeItem.activeItem,
    currentUser: state.user.currentUser,
    selectedCar: state.cars.selectedCar
  }
}

function mapDispatchToProps (dispatch) {
  return ({
    setItemName (type) {
      dispatch(setActiveItem(type))
    },
    setCurrentUser (user) {
      dispatch(setCurrentUser(user))
    },
    setSelectedCar (car) {
      dispatch(setSelectedCar(car))
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
