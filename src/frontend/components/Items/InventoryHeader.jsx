import React from 'react'
import { Table } from 'semantic-ui-react'
import { isAcceptedKey } from '../../inventoryActions'

class InventoryHeader extends React.Component {
  getHeaders () {
    const { cars } = this.props
    if (cars && cars.length > 0) {
      const toRender = []
      let count = 0
      toRender.push(<Table.HeaderCell key={count++}/>)
      for (const key in cars[0]) {
        if (isAcceptedKey(key)) {
          toRender.push(<Table.HeaderCell key={count++}>{key}</Table.HeaderCell>)
        } else if (key === 'peopleInterested') {
          toRender.push(<Table.HeaderCell key={count++}>Interested Buyers</Table.HeaderCell>)
        }
      }
      return toRender
    } else {
      return <Table.Cell/>
    }
  }

  render () {
    return (
      this.getHeaders()
    )
  }
}

export default InventoryHeader
