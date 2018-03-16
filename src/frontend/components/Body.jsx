import React from 'react'
import { Container } from 'semantic-ui-react'
import Home from './Home'
import SignUp from './UserInput/SignUp'
import CarContainer from '../../backend/containers/carContainer'

class Body extends React.Component {
  getActiveComponent () {
    const { activeItem, setUser, handleItemClick } = this.props
    if (activeItem === 'Home' || !activeItem) {
      return <Home />
    } else if (activeItem === 'Search') {
      return <CarContainer />
    } else if (activeItem === 'SignUp') {
      return <SignUp handleItemClick={handleItemClick} setUser={setUser}/>
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
