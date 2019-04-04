import reducers from './reducers/index'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import { createStore, applyMiddleware } from 'redux'
const middleware = applyMiddleware(promise(), thunk)

export default createStore(reducers, middleware)
