import React from 'react'
import ContactView from '../Views/ContactView'
import { TextArea, Input, Icon, Modal, Header, Image, Button, Grid, Segment, Divider, Reveal } from 'semantic-ui-react'
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
            <Button as={Link} to={{pathname: '/Contact', state: {item: item}}} primary>
              CONTACT USER
            </Button>
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
