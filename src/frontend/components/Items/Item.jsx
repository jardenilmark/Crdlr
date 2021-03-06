import React from 'react'
import { Card, Header, Image, Button, Grid, Segment, Divider, Reveal } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { loadImage, getNum } from '../../helpers/documentHandler'

const Item = (props) => {
  const { item } = props
  const { imageId } = item
  return (
    <Grid.Column mobile={16} tablet={8} computer={4}>
      <Card fluid>
        <Segment>
          <Header size='huge' style={{margin: 0}}>
            {item.type}
          </Header>
          <Header size='medium' style={{margin: 0}}>
            {item.brand} {item.model}
          </Header>
          <Reveal animated='fade' style={{margin: 0}}>
            <Reveal.Content visible style={{background: 'white', height: 300, width: '100%'}}>
              <Image verticalAlign='middle' id={imageId} fluid src={loadImage(imageId)}/>
            </Reveal.Content>
            <Reveal.Content hidden style={{height: 300}}>
              <br/><br/>
              <Header size='medium'>Additional Details:</Header>
              <Header size='small'>{item.desc}</Header>
            </Reveal.Content>
          </Reveal>
          <Card.Content>
            <Divider/>
            <Header size='medium' textAlign='center'>
              ₱{getNum(JSON.parse(item.price))}
            </Header>
            <Button.Group widths='3' size='small'>
              <Button as={Link} to={{pathname: '/Contact', state: {owner: item.owner, imageId: item.imageId}}} primary>
                CONTACT USER
              </Button>
              <Button.Or/>
              <Button as={Link} to={{pathname: '/PurchaseView', state: {item: item}}} color='black'>
                SELECT
              </Button>
            </Button.Group>
          </Card.Content>
        </Segment>
      </Card>
    </Grid.Column>
  )
}

export default Item
