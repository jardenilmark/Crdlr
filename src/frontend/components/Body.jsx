import React from 'react'
import Home from './Home'
import CarContainer from '../../backend/containers/carContainer'
import SignUpContainer from '../../backend/containers/signUpContainer'
import { Container } from 'semantic-ui-react'
import { Switch, Route } from 'react-router-dom'
import RentContainer from '../../backend/containers/rentContainer'
import BodyListener from './BodyListener'

class Body extends React.Component {
  render () {
    const { setItemName } = this.props
    return (
      <Container fluid>
        <BodyListener setItemName={setItemName}>
          <Route exact path='/' component={Home} />
          <Route exact path='/Home' component={Home} />
          <Route exact path='/Search' component={CarContainer} />
          <Route exact path='/SignUp' component={SignUpContainer} />
          <Route exact path='/RentCar' component={RentContainer} />
        </BodyListener>
      </Container>
    )
  }
}

export default Body
