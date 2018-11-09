import React from 'react'
import { Progress } from 'semantic-ui-react'

const ProgressBar = props => {
	const { progress } = props
	return progress < 0 ? (
		<div />
	) : progress >= 0 && progress < 100 ? (
		<Progress percent={progress} active />
	) : (
		<Progress percent={prog} success />
	)
}

export default ProgressBar
