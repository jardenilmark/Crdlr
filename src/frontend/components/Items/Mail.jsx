import { ItemCardContent } from './ItemCardContent'
import React from 'react'
import { Header, Modal, Card, Image, Button, Icon } from 'semantic-ui-react'
import { onClickHandler } from '../../mailHandler'

const Mail = props => {
	const { obj, message, peopleModals, id, setPeopleModalVisibility } = props
	const visibility = peopleModals[id].visibility
	let count = 0
	return (
		<Modal
			trigger={
				<Header size="tiny" onClick={() => setPeopleModalVisibility(id, true)}>
					<Icon name="mail" />
					{obj.length} {message}
				</Header>
			}
			open={visibility}
			dimmer="blurring"
			onClose={() => setPeopleModalVisibility(id, false)}
			basic
			size="fullscreen"
			style={{ top: '20%' }}>
			<Modal.Actions>
				<Button onClick={() => setPeopleModalVisibility(id, false)} inverted color="black">
					<Icon name="remove" /> BACK
				</Button>
			</Modal.Actions>
			<Modal.Content>
				<ItemCardContent />
			</Modal.Content>
		</Modal>
	)
}

export default Mail
