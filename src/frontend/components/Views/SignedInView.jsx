import React from 'react'
import SignOut from '../UserInputs/SignOut'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const SignIn = props => {
	const { activeItem, logOutUser } = props
	return (
		<Menu.Menu position="right">
			<Menu.Item
				name="Inventory"
				active={activeItem === 'InventoryView'}
				as={Link}
				to="/InventoryView"
			/>
			<Menu.Item
				name="Register Car"
				active={activeItem === 'CarCreate'}
				as={Link}
				to="/CarCreate"
			/>
			<Menu.Item>
				<SignOut logOutUser={logOutUser} />
			</Menu.Item>
		</Menu.Menu>
	)
}

export default SignIn
