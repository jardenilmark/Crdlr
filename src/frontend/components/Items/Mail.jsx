import React from 'react'
import { Header, Modal, Card, Image, Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { storage } from '../../../backend/database'
import history from '../../../backend/history'

class Mail extends React.Component {
  componentDidMount () {
    if (!localStorage.getItem('user')) {
      history.push('/')
    }
  }

  renderCardContent () {
    try {
      const { obj } = this.props
      const toRender = []
      let count = 0
      obj.forEach(elem => {
        let imageSrc = '../../images/male.jpg'
        if (elem.gender === 'Female') {
          imageSrc = '../../images/female.png'
        }
        toRender.push(
          <Card key={count++}>
            <Card.Content>
              <Image floated='right' size='mini' src={require('../../images/male.jpg')} />
              <Card.Header>
                {elem.firstName} {elem.lastName}
              </Card.Header>
              <Card.Meta>
                Interested Buyer
              </Card.Meta>
              <Card.Description>
                {elem.message}<br/>
                Contact Number: {elem.contactNumber}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button fluid basic color='green'>Set Date</Button>
            </Card.Content>
          </Card>
        ) // add set date
      })
      return toRender
    } catch (e) {
      return null
    }
  }

  render () {
    const { obj, message, peopleModals, id, setPeopleModalVisibility } = this.props
    const visibility = peopleModals[id].visibility
    return (
      <Modal trigger={
        <Header size='tiny' onClick={() => setPeopleModalVisibility(id, {visibility: true})}>
          <Icon name='mail'/>{obj.length} {message}
        </Header>
      } open={visibility} onClose={() => setPeopleModalVisibility(id, {visibility: false})} basic size='fullscreen' style={{top: '20%'}}>
        <Modal.Actions>
          <Button onClick={() => setPeopleModalVisibility(id, {visibility: false})} inverted color='black'>
            <Icon name='remove'/> BACK
          </Button>
        </Modal.Actions>
        <Modal.Content>
          <Card.Group itemsPerRow='3'>
            {this.renderCardContent()}
          </Card.Group>
        </Modal.Content>
      </Modal>
    )
  }
}

export default Mail
