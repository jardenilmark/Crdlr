import { ItemBody } from './ItemBody'
import React from 'react'
import { Card, Header, Image, Button, Grid, Segment, Divider, Reveal } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { loadImage, getNum } from '../../documentHandler'

const Item = props => {
	const { item } = props
	const { imageId } = item
	return (
		<Grid.Column mobile={16} tablet={8} computer={4}>
			<Card fluid>
				<Segment>
					<ItemBody
						margin={margin}
						background={background}
						height={height}
						width={width}
						imageId={imageId}
						loadImage={loadImage}
						getNum={getNum}
						Link={Link}
						pathname={pathname}
						state={state}
						owner={owner}
						item={item}
					/>
				</Segment>
			</Card>
		</Grid.Column>
	)
}

export default Item
