import React from 'react'
import { Header, Icon, Button, Modal, Container } from 'semantic-ui-react'
import ConfirmationContainer from '../../../backend/containers/confirmationContainer'
import { Link } from 'react-router-dom'

class Purchase extends React.Component {
  render () {
    const { history, num } = this.props
    let item
    if (history.location.state) {
      item = history.location.state.item
    }
    return (
      <Container fluid style={{height: '100%', background: `url(${require('../../images/e.png')})`}}>
        <Modal basic open>
          <Modal.Actions>
            <Button as={Link} to={{pathname: '/Search'}} inverted color='black'>
              <Icon name='remove' /> BACK
            </Button>
          </Modal.Actions>
          <ConfirmationContainer item={item} num={num}/>
        </Modal>
      </Container>
    )
  }
}

export default Purchase
