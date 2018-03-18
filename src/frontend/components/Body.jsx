import React from 'react'
import { Container } from 'semantic-ui-react'
import Home from './Home'
import SignUp from './UserInput/SignUp'
import CarContainer from '../../backend/containers/carContainer'
import SignUpContainer from '../../backend/containers/signUpContainer'
import Rent from './Rent'

class Body extends React.Component {
  getActiveComponent () {
    const { activeItem, setUser, handleItemClick, setCar, car } = this.props
    if (activeItem === 'Home' || !activeItem) {
      return <Home />
    } else if (activeItem === 'Search') {
      return <CarContainer handleItemClick={handleItemClick} setCar={setCar}/>
    } else if (activeItem === 'SignUp') {
      return <SignUpContainer handleItemClick={handleItemClick} setUser={setUser}/>
    } else if (activeItem === 'RentCar') {
      return <Rent handleItemClick={handleItemClick} activeItem={activeItem}/>
    } else {
      return <Home />
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
