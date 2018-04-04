import React from 'react'
import ReactDOM from 'react-dom'
import store from '../backend/store'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import history from '../backend/history'
import App from './components/Views/App'

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

renderComponent(App)
