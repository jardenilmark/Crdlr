import { combineReducers } from 'redux'
import carReducer from './carReducer'
import activeReducer from './activeReducer'
import userReducer from './userReducer'
import errorReducer from './errorReducer'
import loginReducer from './loginReducer'

export default combineReducers({
  cars: carReducer,
  activeItem: activeReducer,
  user: userReducer,
  error: errorReducer,
  login: loginReducer
})
