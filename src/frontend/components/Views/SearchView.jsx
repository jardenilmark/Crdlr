import React from 'react'
import Item from '../Items/Item'
import { Container, Grid, Divider } from 'semantic-ui-react'
import Dropdown from '../../../backend/containers/DropdownContainer'
import Loader from '../../../backend/containers/LoaderContainer'

class SearchView extends React.Component {
	componentDidMount() {
		this.intialize()
	}

	async intialize() {
		const { getCars, updateCarList, currentUser } = this.props
		let uid
		try {
			uid = JSON.parse(currentUser).uid
		} catch (e) {
			// do nothing
		}
		await getCars(uid)
		const { allCars } = this.props // separated because of getCars
		updateCarList(allCars)
	}

	renderItems() {
		const { filteredCars } = this.props
		const carArr = filteredCars ? filteredCars : []
		let count = 0
		return carArr.map(e => <Item item={e} key={count++} />)
	}

	render() {
		return (
			<Container fluid>
				<Grid style={{ marginTop: 1, marginLeft: 10, marginRight: 10 }} columns="equal">
					<Grid.Row>
						<Dropdown />
					</Grid.Row>
				</Grid>
				<Divider />
				<Container fluid textAlign="center">
					<Loader />
				</Container>
				<Grid
					style={{ marginTop: 30, marginBottom: 30, paddingLeft: 20, paddingRight: 20 }}
					relaxed>
					{this.renderItems()}
				</Grid>
			</Container>
		)
	}
}

export default SearchView
