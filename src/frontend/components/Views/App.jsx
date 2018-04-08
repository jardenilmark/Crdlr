import React from 'react'
import Home from './Home'
import CarContainer from '../../../backend/containers/carContainer'
import SignUpContainer from '../../../backend/containers/signUpContainer'
import CreateContainer from '../../../backend/containers/createContainer'
import InventoryContainer from '../../../backend/containers/inventoryContainer'
import TitleBar from '../../../backend/containers/titleBarContainer'
import Body from '../../../backend/containers/bodyContainer'
import ContactView from '../../../backend/containers/contactContainer'
import { Container } from 'semantic-ui-react'
import { Route } from 'react-router-dom'
import Purchase from './Purchase'

class App extends React.Component {
  render () {
    return (
      <Container fluid>
        <TitleBar/>
        <Body>
          <Route exact path='/' component={Home} />
          <Route exact path='/Search' component={CarContainer} />
          <Route exact path='/SignUp' component={SignUpContainer} />
          <Route exact path='/CarCreate' component={CreateContainer} />
          <Route exact path='/Purchase' component={Purchase} />
          <Route exact path='/Inventory' component={InventoryContainer} />
          <Route exact path='/Contact' component={ContactView} />
        </Body>
      </Container>
    )
  }
}

export default App
