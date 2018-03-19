import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import store from '../backend/store'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import history from '../backend/history'
import appContainer from '../backend/containers/appContainer'

function renderComponent (Component) {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Component />
      </Router>
    </Provider>,
    document.getElementById('mount')
  )
}

renderComponent(appContainer)
