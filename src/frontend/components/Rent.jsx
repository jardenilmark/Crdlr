import React from 'react'
import { Container } from 'semantic-ui-react'
import RentBar from './RentBar'
import LocationDate from './LocationDate'

class Rent extends React.Component {
  render () {
    const { activeItem } = this.props
    return (
      <Container fluid>
        <RentBar activeItem={activeItem}/>
        <LocationDate />
      </Container>
    )
  }
}

export default Rent
