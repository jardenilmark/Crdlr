import { combineReducers } from 'redux'
import carReducer from './carReducer'
import activeReducer from './activeReducer'
import userReducer from './userReducer'

export default combineReducers({
  cars: carReducer,
  activeItem: activeReducer,
  user: userReducer
})
