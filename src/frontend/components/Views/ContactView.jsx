import React from 'react'
import {
	Label,
	Modal,
	Divider,
	Input,
	Button,
	Header,
	TextArea,
	Icon,
	Container,
	Segment,
	Dropdown
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { onKeyPressHandler, onChangeHandler, getColor } from '../../helpers/errorHandler'
import { autoFillForm, getDate } from '../../documentHandler'
import { contactHandler } from '../../contactHandler'

class ContactView extends React.Component {
	async initialize() {
		const { setSuccess, getUser, currentUser } = this.props
		try {
			const user = JSON.parse(currentUser)
			await getUser(user.uid, user.email)
			const { lastName, firstName, phone, gender } = this.props.user
			const values = { firstName: firstName, lastName: lastName, phone: phone, gender: gender }
			autoFillForm(values) // ui purposes
		} catch (e) {
			// do nothing
		}
		setSuccess()
	}

	componentDidMount() {
		this.initialize()
	}

	render() {
		const { setError, fnError, lnError, genderError, phoneError, genderOptions } = this.props
		const dateNow = new Date()
		const minDate = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate() + 1)
		return (
			<Container
				fluid
				style={{
					height: '100%',
					background: `url(${require('../../../../public/images/e.jpg')})`
				}}>
				<Modal open basic size="small" style={{ top: '45%' }}>
					<Modal.Actions>
						<Button as={Link} to={{ pathname: '/SearchView' }} inverted color="black">
							<Icon name="remove" /> BACK
						</Button>
					</Modal.Actions>
					<Segment basic>
						<Header textAlign="center" inverted>
							Contact User
						</Header>
						<Divider />
						<Modal.Content>
							<Input
								fluid
								id="firstName"
								placeholder="First Name"
								inverted
								transparent
								style={{ color: getColor(fnError) }}
								onKeyUp={() => onKeyPressHandler('firstName', 'GET_ERROR_FIRSTNAME', setError)}
							/>
							<Divider />
							<Input
								fluid
								id="lastName"
								placeholder="Last Name"
								inverted
								transparent
								style={{ color: getColor(lnError) }}
								onKeyUp={() => onKeyPressHandler('lastName', 'GET_ERROR_LASTNAME', setError)}
							/>
							<Divider />
							<Dropdown
								style={{ background: 'transparent', color: getColor(genderError) }}
								id="gender"
								selection
								fluid
								options={genderOptions}
								placeholder={'Gender'}
								onChange={() => onChangeHandler('gender', 'GET_ERROR_GENDER', setError)}
							/>
							<Divider />
							<Input
								fluid
								id="phone"
								placeholder="Contact Number"
								inverted
								transparent
								style={{ color: getColor(phoneError) }}
								type="number"
								min={0}
								max={99999999999}
								onKeyUp={() => onKeyPressHandler('phone', 'GET_ERROR_PHONE', setError)}
							/>
							<Divider />
							<Label style={{ background: 'transparent' }}>
								<Header size="small" style={{ color: 'white' }}>
									Preferred date of meet up
								</Header>
							</Label>
							<Input fluid id="date" inverted transparent type="date" min={getDate(minDate)} />
							<Divider />
							<TextArea
								id="message"
								autoHeight
								rows={5}
								placeholder="Message"
								style={{ background: 'transparent', width: '100%', color: 'white' }}
							/>
							<Divider hidden />
							<Button onClick={() => contactHandler()} fluid inverted>
								Confirm
							</Button>
						</Modal.Content>
					</Segment>
				</Modal>
			</Container>
		)
	}
}

export default ContactView
