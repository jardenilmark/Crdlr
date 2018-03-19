import React from 'react'
import { Header, Image, Button, Grid, Segment, Divider, Container, Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { storage } from '../../backend/database'

class Item extends React.Component {
  async loadImage (model) {
    const url = await storage.ref().child(`cars/${model}.png`).getDownloadURL()
    document.getElementById(`img${model}`).src = url
  }

  componentDidMount () {
    this.loadImage(this.props.item.model)
  }

  render () {
    const { item } = this.props
    return (
      <Grid.Column mobile={16} tablet={8} computer={4}>
        <Segment>
          <Header size='huge' style={{margin: 0}}>
            {item.type}
          </Header>
          <Header size='medium' style={{margin: 0}}>
            {item.brand} {item.model}
          </Header>
          <Image id={`img${item.model}`} src=''/>
          <Divider/>
          <Header size='small' textAlign='center'>
            {item.price} per day
          </Header>
          <Button as={Link} to={{pathname: '/RentCar', state: {item: item}}} fluid color='black'>
            SELECT
          </Button>
        </Segment>
      </Grid.Column>
    )
  }
}

export default Item
