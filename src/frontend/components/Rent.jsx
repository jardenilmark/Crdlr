import React from 'react'
import { Container } from 'semantic-ui-react'
import RentBar from './RentBar'
import LocationDate from './LocationDate'
import Confirmation from './Confirmation'

class Rent extends React.Component {
  getPage () {
    const { currentlyActive, setTransactionInfo } = this.props
    if (currentlyActive === 'confirmation') {
      return <Confirmation/>
    } else {
      return <LocationDate setTransactionInfo={setTransactionInfo}/>
    }
  }
  render () {
    const { currentlyActive } = this.props
    return (
      <Container fluid>
        <RentBar currentlyActive={currentlyActive}/>
        {this.getPage()}
      </Container>
    )
  }
}

export default Rent
