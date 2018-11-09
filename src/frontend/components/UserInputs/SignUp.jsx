import React from 'react'
import { Container, Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import { onKeyPressHandler, onChangeHandler } from '../../errorHandler'
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
						<Form size="massive" error>
							<Segment stacked>
								<Form.Input
									id="firstName"
									placeholder="Firstname"
									error={fnError}
									onKeyUp={() => onKeyPressHandler('firstName', 'GET_ERROR_FIRSTNAME', setError)}
								/>
								<Form.Input
									id="lastName"
									placeholder="Lastname"
									error={lnError}
									onKeyUp={() => onKeyPressHandler('lastName', 'GET_ERROR_LASTNAME', setError)}
								/>
								<Form.Input
									id="email"
									fluid
									icon="user"
									iconPosition="left"
									placeholder="E-mail address"
									error={emailError}
									onKeyUp={() => onKeyPressHandler('email', 'GET_ERROR_EMAIL', setError)}
								/>
								<Form.Input
									id="pass"
									fluid
									icon="lock"
									iconPosition="left"
									placeholder="Password"
									type="password"
									error={passError}
									onKeyUp={() => onKeyPressHandler('pass', 'GET_ERROR_PASS', setError)}
								/>
								<Form.Input
									id="phone"
									fluid
									icon="phone"
									iconPosition="left"
									placeholder="Phone Number"
									type="number"
									min={0}
									max={99999999999}
									error={phoneError}
									onKeyUp={() => onKeyPressHandler('phone', 'GET_ERROR_PHONE', setError)}
								/>
								<Form.Input
									id="creditCard"
									fluid
									icon="credit card alternative"
									iconPosition="left"
									placeholder="Credit Card"
									type="password"
									error={creditCardError}
									onKeyUp={() => onKeyPressHandler('creditCard', 'GET_ERROR_CREDITCARD', setError)}
								/>
								<Form.Input
									id="expirationDate"
									fluid
									icon="calendar"
									iconPosition="left"
									type="date"
									min={getDate(new Date())}
									error={expirationDateError}
								/>
								<Form.Select
									id="gender"
									fluid
									options={genderOptions}
									placeholder="Gender"
									error={genderError}
									onChange={() => onChangeHandler('gender', 'GET_ERROR_GENDER', setError)}
								/>
								<Button color="black" fluid size="large" onClick={() => addUser(this.props)}>
									Confirm
								</Button>
							</Segment>
						</Form>
					</Grid.Column>
				</Grid>
			</Container>
		)
	}
}

export default SignUp
