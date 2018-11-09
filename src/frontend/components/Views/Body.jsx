import React from 'react'
import { withRouter } from 'react-router-dom'

class Body extends React.Component {
	getActiveItem() {
		const { setItemName, history } = this.props
		history.listen((location, action) => {
			let loc = location.pathname
			if (loc.length > 1) {
				loc = loc.slice(1)
			}
			setItemName(loc)
		})
	}

	componentDidMount() {
		this.getActiveItem()
	}

	render() {
		const { children } = this.props
		return children
	}
}

export default withRouter(Body)
