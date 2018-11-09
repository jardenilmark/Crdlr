import React from 'react'
import { Header, Table } from 'semantic-ui-react'
import { getNumberCarsSold } from '../../inventoryActions'

const InventoryFooter = props => {
	const { cars, propertyArray } = props
	const emptyRows = []
	const numberSold = cars.length > 0 ? getNumberCarsSold(cars) : 'N/A'
	let count = 0
	for (let i = 0; i < propertyArray.length; i++) {
		emptyRows.push(<Table.HeaderCell key={count++} />)
	}
	return [
		<Table.Row key={count++}>
			{renderEmptyRows}
			<Table.HeaderCell>
				<Header size="medium">Number Sold:</Header>
			</Table.HeaderCell>
			<Table.HeaderCell>
				<Header size="medium">{numberSold}</Header>
			</Table.HeaderCell>
		</Table.Row>
	]
}

export default InventoryFooter
