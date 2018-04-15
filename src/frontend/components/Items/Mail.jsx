import React from 'react'
import { Header, Modal, Card, Image, Button, Icon } from 'semantic-ui-react'
import { getDocumentUID, updateDocument } from '../../../backend/data'
import history from '../../../backend/history'

class Mail extends React.Component {
  componentDidMount () {
    const { currentUser } = this.props
    if (!currentUser) {
      history.push('/')
    }
  }

  renderCardContent () {
    try {
      const { obj } = this.props
      const toRender = []
      let count = 0
      obj.forEach(elem => {
        let imageSrc = require('../../../../public/images/male.jpg')
        const innerCount = count
        if (elem.gender === 'Female') {
          imageSrc = require('../../../../public/images/female.png')
        }
        toRender.push(
          <Card key={innerCount}>
            <Card.Content>
              <Image floated='right' size='mini' src={imageSrc} />
              <Card.Header>
                {elem.firstName} {elem.lastName}
              </Card.Header>
              <Card.Meta>
                Interested Buyer
              </Card.Meta>
              <Card.Description>
                {elem.message}<br/>
                Contact Number: {elem.phone}<br/>
                Preferred Date of Meet Up: {elem.date}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button onClick={() => this.onClickHandler(innerCount)}
                fluid basic color='green'>MARKED AS READ</Button>
            </Card.Content>
          </Card>
        )
        count++
      })
      return toRender
    } catch (e) {
      return null
    }
  }

  async onClickHandler (count) {
    const { getCarsAdvertised, arrayId, currentUser } = this.props
    const people = await getDocumentUID('contacts', arrayId)
    const peopleData = people.data().people
    peopleData.splice(count, 1)
    await updateDocument('contacts', arrayId, {people: peopleData})
    await getCarsAdvertised(JSON.parse(currentUser).uid)
  }

  render () {
    const { obj, message, peopleModals, id, setPeopleModalVisibility } = this.props
    const visibility = peopleModals[id].visibility
    return (
      <Modal trigger={
        <Header size='tiny' onClick={() => setPeopleModalVisibility(id, true)}>
          <Icon name='mail'/>{obj.length} {message}
        </Header>
      } open={visibility} dimmer='blurring' onClose={() => setPeopleModalVisibility(id, false)}
      basic size='fullscreen' style={{top: '20%'}}>
        <Modal.Actions>
          <Button onClick={() => setPeopleModalVisibility(id, false)} inverted color='black'>
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
