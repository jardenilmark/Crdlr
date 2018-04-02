import { combineReducers } from 'redux'
import carReducer from './carReducer'
import itemReducer from './itemReducer'
import userReducer from './userReducer'
import errorReducer from './errorReducer'
import loginReducer from './loginReducer'
import imgReducer from './imgReducer'
import locationReducer from './locationReducer'

export default combineReducers({
  cars: carReducer,
  item: itemReducer,
  user: userReducer,
  error: errorReducer,
  login: loginReducer,
  img: imgReducer,
  location: locationReducer
})
