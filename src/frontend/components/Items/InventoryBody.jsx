import React from 'react'
import { Icon, Table, Image, Popup } from 'semantic-ui-react'
import { isAcceptedKey } from '../../inventoryActions'
import { loadImage } from '../../documentHandler'
import Receipt from '../../../backend/containers/SellerReceiptContainer'
import Mail from '../../../backend/containers/MailContainer'
import { onClickHandler } from '../../inventoryBodyHandler'

const getRowSubContents = (key, num, props) => {
	const { peopleModals, cars } = props
	const obj = cars[num][key]
	if (isAcceptedKey(key)) {
		return <Table.Cell key={this.keyCount++}>{obj}</Table.Cell>
	}
	if (key === 'peopleInterested') {
		if (cars[num]['sold']) {
			return <Table.Cell key={this.keyCount++}>N/A</Table.Cell>
		} else if (obj.length === 0) {
			return <Table.Cell key={this.keyCount++}>None</Table.Cell>
		} else if (obj.length === 1 && peopleModals.length > 0) {
			return (
				<Table.Cell key={this.keyCount++}>
					<Mail id={num} obj={obj} arrayId={cars[num]['arrayId']} message={'person interested'} />
				</Table.Cell>
			)
		} else if (obj.length > 1 && peopleModals.length > 0) {
			return (
				<Table.Cell key={this.keyCount++}>
					<Mail id={num} obj={obj} arrayId={cars[num]['arrayId']} message={'people interested'} />
				</Table.Cell>
			)
		}
	}
}

const getRowContents = (num, props) => {
	const { cars, receiptModals } = props
	const toRender = []
	const imageKey = `${cars[num]['imageId']}`
	toRender.push(
		<Table.Cell key={this.keyCount++}>
			<Image id={imageKey} rounded size="small" src={loadImage(imageKey)} />
		</Table.Cell>
	)
	for (const key in cars[num]) {
		const obj = cars[num][key]
		if (obj === true) {
			toRender.push(
				<Table.Cell key={this.keyCount++}>
					<Icon color="green" name="checkmark" size="large" />
				</Table.Cell>
			)
		} else if (obj === false) {
			toRender.push(
				<Table.Cell key={this.keyCount++}>
					<Popup
						trigger={
							<Icon
								color="red"
								name="close"
								size="large"
								onClick={() => onClickHandler(cars[num]['imageId'], cars[num], props)}
							/>
						}
						content="**Click on this icon to cancel advertisment"
					/>
				</Table.Cell>
			)
		} else {
			toRender.push(getRowSubContents(key, num))
		}
	}
	if (cars[num]['sold'] && receiptModals.length !== 0) {
		toRender.push(
			<Table.Cell key={this.keyCount++}>
				<Receipt num={this.receiptCount++} />
			</Table.Cell>
		)
	} else {
		toRender.push(<Table.Cell key={this.keyCount++}>N/A</Table.Cell>)
	}
	return toRender
}

const getEmptyRows = (size, props) => {
	const { propertyArray } = props
	const emptyRows = []
	for (let i = 0; i < size; i++) {
		emptyRows.push(
			<Table.Row key={this.keyCount++}>
				{/* used count to prevent duplicate map keys */}
				<Table.Cell>
					<Image rounded size="small" src={require('../../../../public/images/blank.jpg')} />
				</Table.Cell>
				{propertyArray.map(e => {
					return <Table.Cell key={this.keyCount++} />
				})}
				<Table.Cell />
			</Table.Row>
		)
	}
	return emptyRows
}

const InventoryBody = props => {
	const { cars } = props
	const minSize = 8
	let count = 0
	this.keyCount = 0
	this.receiptCount = 0
	const arr = cars.map(e => {
		return <Table.Row key={this.keyCount}>{getRowContents(count++, props)}</Table.Row>
	})
	const emptyCells = getEmptyRows(minSize - cars.length, props)
	return [...arr, ...emptyCells]
}

export default InventoryBody
