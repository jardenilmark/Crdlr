import React from 'react'
import { Button, Grid, Segment, Divider, Container, Table } from 'semantic-ui-react'

class Item extends React.Component {
  constructor (props) {
    super(props)
    this.item = props.item
  }

  render () {
    return (
      <Grid.Column mobile={16} tablet={8} computer={4}>
        <Segment>
          <Table basic='very'>
            <Table.Body>
              <Table.Row textAlign='center'>
                <Table.Cell>Location</Table.Cell>
                <Table.Cell>{this.item.location}</Table.Cell>
              </Table.Row>
              <Table.Row textAlign='center'>
                <Table.Cell>Brand</Table.Cell>
                <Table.Cell>{this.item.brand}</Table.Cell>
              </Table.Row>
              <Table.Row textAlign='center'>
                <Table.Cell>Type</Table.Cell>
                <Table.Cell>{this.item.type}</Table.Cell>
              </Table.Row>
              <Table.Row textAlign='center'>
                <Table.Cell>Model</Table.Cell>
                <Table.Cell>{this.item.model}</Table.Cell>
              </Table.Row>
              <Table.Row textAlign='center'>
                <Table.Cell>Price</Table.Cell>
                <Table.Cell>{this.item.price}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Divider horizontal><Button basic color='grey'>Contact User</Button></Divider>
        </Segment>
      </Grid.Column>
    )
  }
}

export default Item
