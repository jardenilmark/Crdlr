import React from 'react'
import { Container } from 'semantic-ui-react'
import Home from './Home'
import Search from './Search'
import SignUp from './UserInput/SignUp'
import CarContainer from '../../backend/containers/carContainer'

class Body extends React.Component {
  getActiveComponent () {
    const { activeItem } = this.props
    if (activeItem === 'Home' || !activeItem) {
      return <Home />
    } else if (activeItem === 'Search') {
      return <CarContainer />
    } else {
      return <SignUp handleItemClick={this.props.handleItemClick}/>
    }
  }

  render () {
    return (
      <Container fluid>
        {this.getActiveComponent()}
      </Container>
    )
  }
}

export default Body
