import React from 'react'
import { Header, Modal, Card, Image, Button, Icon } from 'semantic-ui-react'
import { onClickHandler } from '../../helpers/mailHandler'

const renderCardContent = (props) => {
  try {
    const { obj } = props
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
            <Button onClick={() => onClickHandler(innerCount, props)}
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

const Mail = (props) => {
  const { obj, message, peopleModals, id, setPeopleModalVisibility } = props
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
          {renderCardContent(props)}
        </Card.Group>
      </Modal.Content>
    </Modal>
  )
}

export default Mail
