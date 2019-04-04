import React from 'react'
import HomeView from './HomeView'
import CarContainer from '../../redux/containers/CarContainer'
import SignUpContainer from '../../redux/containers/SignUpContainer'
import CreateContainer from '../../redux/containers/CreateContainer'
import InventoryContainer from '../../redux/containers/InventoryContainer'
import TitleBar from '../../redux/containers/TitleBarContainer'
import Body from '../../redux/containers/BodyContainer'
import ContactView from '../../redux/containers/ContactContainer'
import { Container } from 'semantic-ui-react'
import { Route } from 'react-router-dom'
import PurchaseView from './PurchaseView'

const AppView = (props) => {
  return (
    <Container fluid>
      <TitleBar/>
      <Body>
        <Route exact path='/' component={HomeView} />
        <Route exact path='/SearchView' component={CarContainer} />
        <Route exact path='/SignUp' component={SignUpContainer} />
        <Route exact path='/CarCreate' component={CreateContainer} />
        <Route exact path='/PurchaseView' component={PurchaseView} />
        <Route exact path='/InventoryView' component={InventoryContainer} />
        <Route exact path='/Contact' component={ContactView} />
      </Body>
    </Container>
  )
}

export default AppView
