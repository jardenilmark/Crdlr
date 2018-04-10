import React from 'react'
import { Header, Table } from 'semantic-ui-react'
import { getNumberCarsSold } from '../../inventoryActions'

class InventoryFooter extends React.Component {
  getFooterContents () {
    const { cars, propertyArray } = this.props
    const renderEmptyRows = []
    const toRender = []
    let numberSold = 'N/A'
    if (cars.length > 0) {
      numberSold = getNumberCarsSold(cars)
    }
    let count = 0
    for (let i = 0; i < propertyArray.length - 1; i++) {
      renderEmptyRows.push(<Table.HeaderCell key={count++}/>)
    }
    toRender.push(
      <Table.Row key={count++}>
        {renderEmptyRows}
        <Table.HeaderCell><Header size='medium'>Number Sold:</Header></Table.HeaderCell>
        <Table.HeaderCell><Header size='medium'>{numberSold}</Header></Table.HeaderCell>
      </Table.Row>
    )
    return toRender
  }

  render () {
    return (
      this.getFooterContents()
    )
  }
}

export default InventoryFooter
