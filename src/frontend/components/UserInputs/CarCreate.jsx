import { Form } from './CarCreateForm'
import React from 'react'
import { Message, Input, Button, Form, Grid, Segment, Container } from 'semantic-ui-react'
import { isUserError } from '../../helpers/errorHandler'
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

	render() {
		const { brands, types, locations, progress, setImageFile } = this.props
		const { uploadStatus, carFormErrors } = this.props
		const isUploading = uploadStatus === 'processing'
		const carFormError = carFormErros.length > 0
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
						<Form
							brands={brands}
							types={types}
							locations={locations}
							marginTop={marginTop}
							marginBottom={marginBottom}
							width={width}
							height={height}
							progress={progress}
							isUploading={isUploading}
							carFormError={carFormError}
							carFormErrors={carFormErrors}
						/>
					</Grid.Column>
				</Grid>
			</Container>
		)
	}
}

export default CarCreate
