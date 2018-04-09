import React from 'react'
import HomeView from './HomeView'
import CarContainer from '../../../backend/containers/carContainer'
import SignUpContainer from '../../../backend/containers/signUpContainer'
import CreateContainer from '../../../backend/containers/createContainer'
import InventoryContainer from '../../../backend/containers/inventoryContainer'
import TitleBar from '../../../backend/containers/titleBarContainer'
import Body from '../../../backend/containers/bodyContainer'
import ContactView from '../../../backend/containers/contactContainer'
import { Container } from 'semantic-ui-react'
import { Route } from 'react-router-dom'
import PurchaseView from './PurchaseView'

class AppView extends React.Component {
  render () {
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
}

export default AppView
