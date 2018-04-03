import React from 'react'
import { Icon, Modal, Header, Image, Button, Grid, Segment, Divider, Reveal } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { storage } from '../../../backend/database'

class Item extends React.Component {
  async loadImage (imageId) {
    const { id } = this.props
    const { image, model, location } = this.props.item
    const url = await storage.ref().child(`cars/${image}`).getDownloadURL()
    const imgURL = document.getElementById(imageId)
    if (imgURL) {
      imgURL.src = url
    }
  }

  renderModal () {
    const { itemModals, id } = this.props
    const bool = itemModals[id].visibility
    return (
      <Modal trigger={<Button primary onClick={() => this.onClickHandler(true)}>CONTACT USER</Button>}
        open={bool} onClose={() => this.onClickHandler(false)} size='small'>
        <Header icon='browser' content='Cookies policy' />
        <Modal.Content>
          <h3>This website uses cookies to ensure the best user experience.</h3>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={() => this.onClickHandler(false)} inverted>
            <Icon name='checkmark' /> Got it
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }

  onClickHandler (visibility) {
    const { setItemModalVisibility, id } = this.props
    setItemModalVisibility(id, {visibility: visibility})
  }

  render () {
    const { item, id } = this.props
    const imageId = `img${item.model}${item.location}${id}`
    return (
      <Grid.Column mobile={16} tablet={8} computer={4}>
        <Segment>
          <Header size='huge' style={{margin: 0}}>
            {item.type}
          </Header>
          <Header size='medium' style={{margin: 0}}>
            {item.brand} {item.model}
          </Header>
          <Image verticalAlign='middle' id={imageId} style={{height: 250}} src={this.loadImage(imageId)}/>
          <Divider/>
          <Header size='medium' textAlign='center'>
            {item.price}
          </Header>
          <Button.Group widths='3' size='small'>
            {this.renderModal()}
            <Button.Or/>
            <Button as={Link} to={{pathname: '/Purchase', state: {item: item}}} color='black'>
              SELECT
            </Button>
          </Button.Group>
        </Segment>
      </Grid.Column>
    )
  }
}

export default Item
