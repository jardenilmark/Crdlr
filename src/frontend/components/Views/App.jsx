import React from 'react'
import Home from './Home'
import CarContainer from '../../../backend/containers/carContainer'
import SignUpContainer from '../../../backend/containers/signUpContainer'
import CreateContainer from '../../../backend/containers/createContainer'
import InventoryContainer from '../../../backend/containers/inventoryContainer'
import TitleBar from '../../../backend/containers/titleBarContainer'
import BodyListener from '../../../backend/containers/bodyContainer'
import { Container } from 'semantic-ui-react'
import { Route } from 'react-router-dom'
import Purchase from './Purchase'

class Body extends React.Component {
  render () {
    return (
      <Container fluid>
        <TitleBar/>
        <BodyListener>
          <Route exact path='/' component={Home} />
          <Route exact path='/Search' component={CarContainer} />
          <Route exact path='/SignUp' component={SignUpContainer} />
          <Route exact path='/CarCreate' component={CreateContainer} />
          <Route exact path='/Purchase' component={Purchase} />
          <Route exact path='/Inventory' component={InventoryContainer} />
        </BodyListener>
      </Container>
    )
  }
}

export default Body
