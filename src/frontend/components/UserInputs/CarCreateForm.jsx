export const Form = ({
	brands,
	types,
	locations,
	marginTop,
	marginBottom,
	width,
	height,
	progress,
	isUploading,
	carFormError,
	carFormErrors
}) => {
	return (
		<Segment piled textAlign="center" color="grey">
			<ProgressBar />
			<Form>
				<Form.Group>
					<Form.Input id="model" placeholder="Car Model" width={12} />
					<Form.Input id="price" placeholder="Price in php" type="number" width={6} />
				</Form.Group>
				<Form.Group>
					<Form.Dropdown id="brand" selection placeholder="Brand" options={brands} width={8} />
					<Form.Dropdown id="type" selection placeholder="Type" options={types} width={8} />
				</Form.Group>
				<Form.Dropdown id="location" selection placeholder="Location" options={locations} />
			</Form>
			<Input type="file" onChange={e => setImageFile(e.target.files[0])} />
			<Form.TextArea
				id="desc"
				placeholder="Additional Details"
				maxLength="255"
				style={{
					marginTop: 20,
					marginBottom: 20,
					width: '100%',
					height: '10%'
				}}
			/>
			<Button
				loading={progress > -1 && progress < 100}
				onClick={() => onClickHandler()}
				content="Submit"
				secondary
				fluid
			/>
			{isUploading ? (
				<Message
					error
					header="Unable to Comply!"
					content="Please wait until the data has been uploaded"
				/>
			) : carFormError ? (
				<Message error header="There were some errors with your submission" list={carFormErrors} />
			) : (
				''
			)}
		</Segment>
	)
}
