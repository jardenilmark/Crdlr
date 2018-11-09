import React from 'react'
import { Dimmer, Loader, Header } from 'semantic-ui-react'

const InventoryHeader = props => {
	const { filteredCars, loader } = props
	return filteredCars.length === 0 ? (
		loader ? (
			<Dimmer active>
				<Loader size="massive" indeterminate>
					Preparing Selection
				</Loader>
			</Dimmer>
		) : (
			<Header size="large">No Available Cars</Header>
		)
	) : (
		<div />
	)
}

export default InventoryHeader
