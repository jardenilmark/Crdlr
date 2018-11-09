import React from 'react'
import { Image, Container } from 'semantic-ui-react'

const HomeView = () => {
	return (
		<div>
			<Container fluid>
				<Image
					src={require('../../../../public/images/a.jpg')}
					style={{ height: '90vh', width: '100%' }}
				/>
			</Container>
			<div
				style={{
					backgroundColor: 'black',
					height: '7vh',
					textAlign: 'center',
					color: 'white',
					fontSize: '25px'
				}}>
				THE BEST PRICE FOR YOUR MONEY
			</div>
		</div>
	)
}

export default HomeView
