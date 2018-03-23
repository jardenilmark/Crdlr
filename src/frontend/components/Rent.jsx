import React from 'react'
import { Container } from 'semantic-ui-react'
import RentBar from './RentBar'
import LocationDate from './LocationDate'
import ConfirmationContainer from '../../backend/containers/confirmationContainer'

class Rent extends React.Component {
  getPage () {
    const { date, currentlyActive, setTransactionInfo, history } = this.props
    if (currentlyActive === 'confirmation') {
      return <ConfirmationContainer item={history.location.state.item} date={date}/>
    } else {
      // return <LocationDate setTransactionInfo={setTransactionInfo}/>
    }
  }

  componentDidMount () { // to refactor
    const { setTransactionInfo, history } = this.props
    setTransactionInfo({
      activeItem: 'date'
    })
    if (!history.location.state) {
      history.push('/Search')
    }
  }

  render () {
    const { currentlyActive } = this.props
    return (
      <Container fluid>
        <RentBar currentlyActive={currentlyActive}/>
        {/* {this.getPage()} */}
      </Container>
    )
  }
}

export default Rent
