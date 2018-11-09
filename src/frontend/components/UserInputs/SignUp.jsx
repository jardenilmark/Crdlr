import { SignUpForm } from './SignUpForm'
import React from 'react'
import { Container, Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import { onKeyPressHandler, onChangeHandler } from '../../helpers/errorHandler'
import { getDate } from '../../documentHandler'
import { addUser } from '../../signUpHandler'

class SignUp extends React.Component {
	componentDidMount() {
		this.props.setSuccess()
	}

	render() {
		const {
			fnError,
			lnError,
			emailError,
			passError,
			phoneError,
			genderError,
			setError,
			creditCardError,
			genderOptions,
			expirationDateError
		} = this.props
		return (
			<Container
				fluid
				style={{
					height: '100%',
					background: `url(${require('../../../../public/images/c.png')})`
				}}>
				<Grid textAlign="center" verticalAlign="middle" style={{ height: '80%' }}>
					<Grid.Column style={{ maxWidth: 700 }}>
						<Segment inverted style={{ margin: 0 }}>
							<Header as="h2" color="black" textAlign="center">
								Sign Up
							</Header>
						</Segment>
						<SignUpForm
							fnError={fnError}
							lnError={lnError}
							emailError={emailError}
							passError={passError}
							phoneError={phoneError}
							creditCardError={creditCardError}
							getDate={getDate}
							Date={Date}
							expirationDateError={expirationDateError}
							genderOptions={genderOptions}
							genderError={genderError}
							props={this.props}
						/>
					</Grid.Column>
				</Grid>
			</Container>
		)
	}
}

export default SignUp
