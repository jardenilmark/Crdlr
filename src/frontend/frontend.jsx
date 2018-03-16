import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import store from '../backend/store'
import { Provider } from 'react-redux'
import appContainer from '../backend/containers/appContainer'

function renderComponent (Component) {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById('mount')
  )
}

renderComponent(appContainer)
