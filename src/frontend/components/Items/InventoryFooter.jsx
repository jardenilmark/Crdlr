import React from 'react'
import { Header, Table } from 'semantic-ui-react'
import { getNumberCarsSold } from '../../inventoryActions'

class InventoryFooter extends React.Component {
  getFooterContents (toMinus) {
    const { cars } = this.props
    if (cars && cars.length > 0) {
      const renderEmptyRows = []
      const toRender = []
      let count = 0
      for (let i = 0; i < Object.keys(cars[0]).length - toMinus; i++) {
        renderEmptyRows.push(<Table.HeaderCell key={count++}/>)
      }
      toRender.push(
        <Table.Row key={count++}>{renderEmptyRows}
          <Table.HeaderCell><Header size='medium'>Number Sold:</Header></Table.HeaderCell>
          <Table.HeaderCell><Header size='medium'>{getNumberCarsSold(cars)}</Header></Table.HeaderCell>
        </Table.Row>
      )
      return toRender
    }
    return <Table.Row/>
  }

  render () {
    return (
      this.getFooterContents(4)
    )
  }
}

export default InventoryFooter
