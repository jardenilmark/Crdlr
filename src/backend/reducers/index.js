import { combineReducers } from 'redux'
import carReducer from './carReducer'
import activeReducer from './activeReducer'

export default combineReducers({
  cars: carReducer,
  activeItem: activeReducer
})
