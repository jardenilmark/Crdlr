import React from 'react'
import { Table } from 'semantic-ui-react'

const InventoryHeader = props => {
	let count = 0
	const { propertyArray } = props
	const header = [
		<Table.HeaderCell key={count++} />,
		propertyArray.map(e => {
			return e === 'peopleInterested' ? (
				<Table.HeaderCell key={count++}>Interested Buyers</Table.HeaderCell>
			) : (
				<Table.HeaderCell key={count++}>{e}</Table.HeaderCell>
			)
		}),
		<Table.HeaderCell key={count++}>Receipt</Table.HeaderCell>
	]
	return header
}

export default InventoryHeader
