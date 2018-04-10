import React from 'react'
import { Header, Image, Button, Grid, Segment, Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { loadImage } from '../../documentHandler'

class Item extends React.Component {
  render () {
    const { item } = this.props
    const { image } = item
    return (
      <Grid.Column mobile={16} tablet={8} computer={4}>
        <Segment>
          <Header size='huge' style={{margin: 0}}>
            {item.type}
          </Header>
          <Header size='medium' style={{margin: 0}}>
            {item.brand} {item.model}
          </Header>
          <Image verticalAlign='middle' id={image} fluid style={{height: 300}} src={loadImage(image)}/>
          <Divider/>
          <Header size='medium' textAlign='center'>
            P{item.price}
          </Header>
          <Button.Group widths='3' size='small'>
            <Button as={Link} to={{pathname: '/Contact', state: {owner: item.owner, image: item.image}}} primary>
              CONTACT USER
            </Button>
            <Button.Or/>
            <Button as={Link} to={{pathname: '/PurchaseView', state: {item: item}}} color='black'>
              SELECT
            </Button>
          </Button.Group>
        </Segment>
      </Grid.Column>
    )
  }
}

export default Item
