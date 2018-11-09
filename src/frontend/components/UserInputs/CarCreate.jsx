import React from 'react'
import { Message, Input, Button, Form, Grid, Segment, Container } from 'semantic-ui-react'
import { isUserError } from '../../errorHandler'
import ProgressBar from '../../../backend/containers/ProgressBarContainer'
import { onClickHandler } from '../../carCreateHandler'

class CarCreate extends React.Component {
	componentDidMount() {
		this.initialize()
	}

	async initialize() {
		const { setProgressBar, fetchCarBrands, fetchCarTypes, fetchLocations, history } = this.props
		if (await isUserError(history)) {
			fetchCarBrands()
			fetchCarTypes()
			fetchLocations()
			setProgressBar(-1)
		}
	}

	getWarningSign() {
		const { uploadStatus, carFormErrors } = this.props
		if (uploadStatus === 'processing') {
			return (
				<Message
					error
					header="Unable to Comply!"
					content="Please wait until the data has been uploaded"
				/>
			)
		} else if (carFormErrors.length > 0) {
			return (
				<Message error header="There were some errors with your submission" list={carFormErrors} />
			)
		}
	}

	render() {
		const { brands, types, locations, progress, setImageFile } = this.props
		return (
			<Container
				fluid
				style={{
					height: '100%',
					background: `url(${require('../../../../public/images/d.jpg')})`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: '100% 100%'
				}}>
				<Grid textAlign="center" verticalAlign="middle" style={{ paddingTop: '7%' }}>
					<Grid.Column style={{ maxWidth: '35%', paddingTop: 60 }}>
						<Segment piled textAlign="center" color="grey">
							<ProgressBar />
							<Form>
								<Form.Group>
									<Form.Input id="model" placeholder="Car Model" width={12} />
									<Form.Input id="price" placeholder="Price in php" type="number" width={6} />
								</Form.Group>
								<Form.Group>
									<Form.Dropdown
										id="brand"
										selection
										placeholder="Brand"
										options={brands}
										width={8}
									/>
									<Form.Dropdown id="type" selection placeholder="Type" options={types} width={8} />
								</Form.Group>
								<Form.Dropdown id="location" selection placeholder="Location" options={locations} />
							</Form>
							<Input type="file" onChange={e => setImageFile(e.target.files[0])} />
							<Form.TextArea
								id="desc"
								placeholder="Additional Details"
								maxLength="255"
								style={{ marginTop: 20, marginBottom: 20, width: '100%', height: '10%' }}
							/>
							<Button
								loading={progress > -1 && progress < 100}
								onClick={() => onClickHandler()}
								content="Submit"
								secondary
								fluid
							/>
							{this.getWarningSign()}
						</Segment>
					</Grid.Column>
				</Grid>
			</Container>
		)
	}
}

export default CarCreate
