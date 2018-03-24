import React from 'react'
import { Header, Icon, Button, Modal, Container } from 'semantic-ui-react'
import ConfirmationContainer from '../../backend/containers/confirmationContainer'
import { Link } from 'react-router-dom'

class Purchase extends React.Component {
  render () {
    const { history, num } = this.props
    return (
      <Modal basic open>
        <Modal.Actions>
          <Button as={Link} to={{pathname: '/Search'}} inverted color='black'>
            <Icon name='remove' /> BACK
          </Button>
        </Modal.Actions>
        <ConfirmationContainer item={history.location.state.item} num={num}/>
      </Modal>
    )
  }
}

export default Purchase
