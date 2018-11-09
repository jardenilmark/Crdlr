import React from 'react'
import { Dropdown, Grid } from 'semantic-ui-react'
import { compareData } from '../../../backend/sort'
import { getDropdownValues, getFilteredList } from '../../carFilter'

const DropdownCustom = props => {
	const { allCars } = props
	const placeholders = ['Location', 'Brand', 'Type', 'Model']
	let dropDownArr = []
	let count = 0
	if (allCars) {
		dropDownArr = getDropdownValues(placeholders, props)
	}
	return dropDownArr.map(e => {
		const placeholder = placeholders[count++]
		const array = [...e]
		compareData(array, 'text')
		array.push({ key: 'Show All', value: 'Show All', text: 'Show All' })
		return (
			<Grid.Column name={placeholder} key={placeholder}>
				<Dropdown
					fluid
					button
					noResultsMessage="No Results Found"
					placeholder={placeholder}
					onClose={() => getFilteredList(placeholders, props)}
					search
					options={array}
					selection
					id={placeholder}
				/>
			</Grid.Column>
		)
	})
}

export default DropdownCustom
