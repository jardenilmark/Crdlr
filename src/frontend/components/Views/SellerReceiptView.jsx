import React from 'react'
import { Segment, Divider, Header, Modal, Grid, Button, Icon } from 'semantic-ui-react'

const SellerReceiptView = props => {
	const { receiptModals, num, setReceiptModalVisibility } = props
	const receipt = receiptModals[num]
	const data = receipt.item
	return (
		<Modal
			trigger={
				<Header size="tiny" onClick={() => setReceiptModalVisibility(num, true)}>
					Show Receipt
				</Header>
			}
			dimmer="blurring"
			open={receipt.visibility}
			basic
			size="fullscreen">
			<Grid textAlign="center" verticalAlign="middle">
				<Grid.Column style={{ maxWidth: '50%' }}>
					<Segment stacked basic>
						<Segment basic>
							<Header inverted size="huge">
								Receipt
							</Header>
						</Segment>
						<Divider />
						<Header
							size="medium"
							textAlign="left"
							inverted
							content={`Date of Transaction: ${data.transactionDate}`}
						/>
						<Divider />
						<Header
							size="medium"
							textAlign="left"
							inverted
							content={`Location: ${data.location}`}
						/>
						<Divider />
						<Header size="medium" textAlign="left" inverted content={`Car: ${data.car}`} />
						<Divider />
						<Header
							size="medium"
							textAlign="left"
							inverted
							content={`Advertisment Fee: ₱${data.advertisementFee}`}
						/>
						<Divider />
						<Header
							size="medium"
							textAlign="left"
							inverted
							content={`Seller Profit: ₱${data.price}`}
						/>
						<Divider />
						<Header
							size="medium"
							textAlign="left"
							inverted
							content={`Total Payment: ₱${parseFloat(data.advertisementFee) +
								parseFloat(data.price)}`}
						/>
						<Divider />
						<Header inverted size="huge">
							Thank you for your purchase!
						</Header>
						<Button
							onClick={() => setReceiptModalVisibility(num, false)}
							fluid
							inverted
							color="black">
							<Icon name="remove" /> BACK
						</Button>
					</Segment>
				</Grid.Column>
			</Grid>
		</Modal>
	)
}

export default SellerReceiptView
