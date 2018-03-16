import React from 'react'
import { Button, Grid, Segment, Divider, Container, Table } from 'semantic-ui-react'

class Item extends React.Component {
  render () {
    const { item } = this.props
    return (
      <Grid.Column mobile={16} tablet={8} computer={4}>
        <Segment>
          <Table basic='very'>
            <Table.Body>
              <Table.Row textAlign='center'>
                <Table.Cell>Location</Table.Cell>
                <Table.Cell>{item.location}</Table.Cell>
              </Table.Row>
              <Table.Row textAlign='center'>
                <Table.Cell>Brand</Table.Cell>
                <Table.Cell>{item.brand}</Table.Cell>
              </Table.Row>
              <Table.Row textAlign='center'>
                <Table.Cell>Type</Table.Cell>
                <Table.Cell>{item.type}</Table.Cell>
              </Table.Row>
              <Table.Row textAlign='center'>
                <Table.Cell>Model</Table.Cell>
                <Table.Cell>{item.model}</Table.Cell>
              </Table.Row>
              <Table.Row textAlign='center'>
                <Table.Cell>Price</Table.Cell>
                <Table.Cell>{item.price}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Divider horizontal><Button basic color='grey'>Book Car</Button></Divider>
        </Segment>
      </Grid.Column>
    )
  }
}

export default Item
