import React from 'react'
import { Table } from 'semantic-ui-react'
import { isAcceptedKey } from '../../inventoryActions'

class InventoryHeader extends React.Component {
  getHeaders () {
    const { propertyArray } = this.props
    const toRender = []
    let count = 0
    toRender.push(<Table.HeaderCell key={count++}/>)
    propertyArray.forEach(e => {
      if (e === 'peopleInterested') {
        toRender.push(<Table.HeaderCell key={count++}>Interested Buyers</Table.HeaderCell>)
      } else {
        toRender.push(<Table.HeaderCell key={count++}>{e}</Table.HeaderCell>)
      }
    })
    return toRender
  }

  render () {
    return (
      this.getHeaders()
    )
  }
}

export default InventoryHeader
