export const itemCardContent = () => {
	return (
		<Card.Group itemsPerRow="3">
			{obj.map(elem => {
				const imageSrc =
					elem.gender === 'Male'
						? require('../../../../public/images/male.jpg')
						: (imageSrc = require('../../../../public/images/female.png'))
				return (
					<Card key={count}>
						<Card.Content>
							<Image floated="right" size="mini" src={imageSrc} />
							<Card.Header>
								{elem.firstName} {elem.lastName}
							</Card.Header>
							<Card.Meta>Interested Buyer</Card.Meta>
							<Card.Description>
								{elem.message}
								<br />
								Contact Number: {elem.phone}
								<br />
								Preferred Date of Meet Up: {elem.date}
							</Card.Description>
						</Card.Content>
						<Card.Content extra>
							<Button onClick={() => onClickHandler(count++, props)} fluid basic color="green">
								MARKED AS READ
							</Button>
						</Card.Content>
					</Card>
				)
			})}
		</Card.Group>
	)
}
