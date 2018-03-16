import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import store from '../backend/store'
import { Provider } from 'react-redux'
import itemContainer from '../backend/containers/itemContainer'

function renderComponent (Component) {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById('mount')
  )
}

renderComponent(itemContainer)
