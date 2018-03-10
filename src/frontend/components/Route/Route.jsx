import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Home from '../Home'
import Search from '../Search'
import SignUp from '../UserInput/SignUp'

export default () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Search" component={Search} />
      <Route exact path="/SignUp" component={SignUp} />
    </Switch>
  </HashRouter>
)
